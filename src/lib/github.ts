import { FEATURED_PROJECTS, GITHUB_OWNER, type FeaturedProject } from '@/data/projects';

export interface Project extends FeaturedProject {
  desc: string;
  tags: string[];
  repoUrl: string;
  demo?: string;
}

interface GithubRepoResponse {
  description: string | null;
  topics?: string[];
  html_url: string;
  homepage: string | null;
}

async function fetchGithubRepo(repo: string): Promise<GithubRepoResponse> {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${repo}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': `${GITHUB_OWNER}-website`,
      ...(import.meta.env.GITHUB_TOKEN ? { Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}` } : {}),
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API respondeu ${res.status} para ${GITHUB_OWNER}/${repo}: ${body}`);
  }

  return res.json();
}

/**
 * Busca description/topics no GitHub para cada projeto curado em `FEATURED_PROJECTS`.
 * Se a busca de um repo falhar (rate limit, repo renomeado, etc.), ele é
 * descartado da lista em vez de derrubar o build inteiro.
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const results = await Promise.all(
    FEATURED_PROJECTS.map(async (project): Promise<Project | null> => {
      try {
        const data = await fetchGithubRepo(project.repo);
        return {
          ...project,
          desc: data.description ?? '',
          tags: data.topics ?? [],
          repoUrl: data.html_url,
          demo: data.homepage || undefined,
        };
      } catch (err) {
        console.warn(`[github] falha ao buscar dados de "${project.repo}":`, err);
        return null;
      }
    }),
  );

  return results.filter((project): project is Project => project !== null);
}
