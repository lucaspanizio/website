import { setTimeout as sleep } from 'node:timers/promises';
import { readFile, writeFile } from 'node:fs/promises';
import { execSync, spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';

import { RESUME_FILENAME } from '../src/data/config.ts';

const PORT = 4323;
const RESUME_URL = `http://127.0.0.1:${PORT}/resume`;

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..');
const OUT_FILE = path.join(ROOT, 'public', RESUME_FILENAME);
const ASTRO_BIN = path.join(
  ROOT,
  'node_modules',
  '.bin',
  `astro${process.platform === 'win32' ? '.cmd' : ''}`,
);

function buildSite() {
  execSync(`"${ASTRO_BIN}" build`, { cwd: ROOT, shell: true, stdio: 'inherit' });
}

function startPreviewServer() {
  return spawn(`"${ASTRO_BIN}"`, ['preview', '--port', String(PORT), '--host', '127.0.0.1'], {
    cwd: ROOT,
    shell: true,
    stdio: 'ignore',
  });
}

function killPreviewServer(server) {
  if (process.platform === 'win32') {
    execSync(`taskkill /pid ${server.pid} /T /F`, { stdio: 'ignore' });
  } else {
    server.kill();
  }
}

async function waitForServer(url) {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await sleep(500);
  }
  throw new Error(`Servidor de preview não respondeu em ${url}`);
}

async function openResumePage(browser) {
  const context = await browser.newContext({
    viewport: { width: 1240, height: 1737 },
    colorScheme: 'light',
  });
  const page = await context.newPage();
  await page.goto(RESUME_URL, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  return page;
}

async function stripPageChromeForPdf(page) {
  await page.evaluate(() => {
    document.querySelector('header')?.remove();
    document.querySelector('footer')?.remove();
    document.querySelector('main').style.paddingTop = '2rem';
    document.body.style.backgroundColor = '#ffffff';

    // Chromium rasteriza box-shadow como imagens JPEG enormes no PDF,
    // inflando o arquivo em centenas de KB.
    const style = document.createElement('style');
    style.textContent = '* { box-shadow: none !important; }';
    document.head.appendChild(style);
  });
  await page.emulateMedia({ media: 'screen' });
}

async function renderPdf(page, outFile) {
  await page.pdf({
    path: outFile,
    printBackground: true,
    width: '1240px',
    height: '1737px',
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
  });
}

async function writePdfMetadata(outFile) {
  const pdf = await PDFDocument.load(await readFile(outFile));
  pdf.setCreator('panizio.is-a.dev');
  pdf.setAuthor('José Lucas Panizio');
  pdf.setSubject('Currículo de 2026 - José Lucas Panizio');
  await writeFile(outFile, await pdf.save());
}

async function main() {
  buildSite();

  const previewServer = startPreviewServer();
  try {
    await waitForServer(RESUME_URL);

    const browser = await chromium.launch();
    try {
      const page = await openResumePage(browser);
      await stripPageChromeForPdf(page);
      await renderPdf(page, OUT_FILE);
    } finally {
      await browser.close();
    }

    await writePdfMetadata(OUT_FILE);
    console.log(`✅ PDF gerado com sucesso!`);
  } finally {
    killPreviewServer(previewServer);
  }
}

await main();
