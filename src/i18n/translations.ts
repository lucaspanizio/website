export type Lang = 'pt' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
  pt: {
    // Header
    'header.save_pdf': 'SALVAR PDF',

    // Hero
    'hero.role':        'Desenvolvedor Frontend',
    'hero.about1':      'Desenvolvedor Frontend com mais de 4 anos de experiência na construção e evolução de aplicações web com React e TypeScript, com foco em performance, qualidade de código e experiência do usuário, sempre alinhado às necessidades do produto.',
    'hero.about2':      'Atuo em times ágeis, participando de discussões técnicas, definição de padrões, code reviews e treinamentos internos, contribuindo para a qualidade das entregas e a evolução contínua das aplicações e do time. Atualmente venho me aprofundando em Node.js com o objetivo de evoluir para um perfil fullstack.',
    'hero.about_short': 'Desenvolvedor Frontend com mais de 4 anos de experiência na construção e evolução de aplicações web com React e TypeScript, com foco em performance, qualidade de código e experiência do usuário.',
    'hero.about_rest':  'Atuo em times ágeis, participando de discussões técnicas, definição de padrões, code reviews e treinamentos internos, contribuindo para a qualidade das entregas e a evolução contínua das aplicações e do time. Atualmente venho me aprofundando em Node.js com o objetivo de evoluir para um perfil fullstack.',
    'hero.read_more':   'ver mais...',
    'hero.read_less':   'ver menos',

    // Footer
    'footer.text': 'José Lucas Panizio - Desenvolvedor Front-end',

    // Graduation
    'grad.title':    'Formação Acadêmica',
    'grad.degree':   'Bacharelado em Ciência da Computação',
    'grad.bullet.0': 'Fundamentos de computação, lógica, algoritmos, estruturas de dados e orientação a objetos.',
    'grad.bullet.1': 'Contato com desenvolvimento web, bancos de dados e arquitetura de sistemas.',
    'grad.bullet.2': 'Base sólida para análise, modelagem e tomada de decisões técnicas em sistemas de software.',
    'grad.tag.0':    'Lógica',
    'grad.tag.1':    'Estrutura de dados',
    'grad.tag.2':    'Banco de dados',
    'grad.tag.3':    'Orientação a objetos',

    // Experience
    'exp.title':  'Experiências Profissionais',
    'exp.impact': 'Impacto & Resultados',

    'exp.solus1.period':   'Fev de 2022 — Atualmente',
    'exp.solus1.role':     'Desenvolvedor Front-end',
    'exp.solus1.duty.0':   'Desenvolvimento e evolução de aplicações web voltadas à gestão de planos de saúde, utilizando React e TypeScript, integradas a APIs REST.',
    'exp.solus1.duty.1':   'Participação em discussões de arquitetura de software e análise de produto, contribuindo para a definição de soluções técnicas no frontend.',
    'exp.solus1.duty.2':   'Condução de treinamentos internos sobre boas práticas de programação e padrões de frontend.',
    'exp.solus1.duty.3':   'Criação e evolução de biblioteca de componentes baseada em Design System utilizada entre múltiplas aplicações.',
    'exp.solus1.duty.4':   'Documentação e padronização de componentes do Design System utilizando Storybook.',
    'exp.solus1.duty.5':   'Implementação de pipelines de CI/CD com GitHub Actions para automação e padronização do fluxo de desenvolvimento.',
    'exp.solus1.impact.0': 'Reconhecido por votação como símbolo de respeito do ano 2024.',
    'exp.solus1.impact.1': 'Cinco promoções de senioridade.',

    'exp.solus2.period':   'Ago de 2020 — Mai de 2021',
    'exp.solus2.role':     'Analista de Sistemas',
    'exp.solus2.duty.0':   'Suporte e manutenção do sistema Solus, atuando na resolução de incidentes e melhorias do sistema.',
    'exp.solus2.duty.1':   'Manutenção em código legado utilizando PHP, Delphi e PL/SQL.',
    'exp.solus2.duty.2':   'Controle de versão utilizando SVN.',
    'exp.solus2.impact.0': 'Reconhecido entre os analistas com maior volume de chamados resolvidos dentro do SLA.',
    'exp.solus2.impact.1': 'Uma promoção de senioridade.',

    'exp.panizio.period': 'Fev de 2018 — Ago de 2020',
    'exp.panizio.role':   'Técnico de Suporte',
    'exp.panizio.duty.0': 'Desenvolvimento e manutenção do website institucional da empresa.',
    'exp.panizio.duty.1': 'Suporte técnico aos sistemas utilizados pela organização.',
    'exp.panizio.duty.2': 'Criação de documentação técnica para apoio aos usuários.',

    'exp.apetit.period': 'Mai de 2016 — Dez de 2016',
    'exp.apetit.role':   'Estagiário de TI',
    'exp.apetit.duty.0': 'Suporte técnico aos usuários e sistemas internos da empresa.',
    'exp.apetit.duty.1': 'Auxílio na manutenção básica de equipamentos e infraestrutura de TI.',

    // Courses
    'course.title':    'CURSOS E CERTIFICAÇÕES',
    'course.0.title':  'Node.js',
    'course.0.period': 'Em andamento · 73h',
    'course.0.desc':   'Curso de Node.js voltado ao desenvolvimento backend com JavaScript, abordando criação de servidores, APIs REST, autenticação, integração com banco de dados e ecossistema Node.',
    'course.1.title':  'Dev com IA: Claude Code, Codex e Cursor',
    'course.1.period': '2026 · 10h',
    'course.1.desc':   'Curso sobre como otimizar o uso de ferramentas de IA como Claude Code, Codex e Cursor, com foco em automação de tarefas, geração de código e integração com fluxos de trabalho de desenvolvimento.',
    'course.2.title':  'Next.js',
    'course.2.period': '2026 · 45h',
    'course.2.desc':   'Curso voltado ao desenvolvimento de aplicações com Next.js, abordando SSR, SSG, ISR, roteamento via pages e app router e Server Components.',
    'course.3.title':  'Angular',
    'course.3.period': 'Jan 2026 · 11h',
    'course.3.desc':   'Curso introdutório de Angular v21, com abordagem da estrutura do framework, componentes e fluxo básico de dados.',
    'course.4.title':  'Tailwind CSS',
    'course.4.period': 'Ago 2025 · 16h',
    'course.4.desc':   'Curso voltado a construção de layouts responsivos com Tailwind CSS v4, incluindo customização de tema e composição de utilitários.',
    'course.5.title':  'Javascript ES6',
    'course.5.period': 'Jul 2025 · 74h',
    'course.5.desc':   'Curso de JavaScript moderno (ES6+), abrangendo módulos, closures, manipulação do DOM, consumo de APIs com fetch e programação assíncrona.',
    'course.6.title':  'React Profissional',
    'course.6.period': 'Abr 2025 · 27h',
    'course.6.desc':   'Curso de React com foco em Styled Components, documentação de componentes com Storybook e testes automatizados com Jest.',
    'course.7.title':  'React.js',
    'course.7.period': 'Mar 2025 · 50h',
    'course.7.desc':   'Curso completo sobre o ecossistema React, incluindo componentes, estado, integração com bibliotecas, testes e processos de build e deploy.',
    'course.8.title':  'Comunicação e Oratória',
    'course.8.period': 'Set 2023 · 16h',
    'course.8.desc':   'Curso de comunicação e oratória em contexto profissional com teoria e prática sob mentoria de Cinthia Erika.',
  },

  en: {
    // Header
    'header.save_pdf': 'SAVE PDF',

    // Hero
    'hero.role':        'Frontend Developer',
    'hero.about1':      'Frontend Developer with 4+ years of experience building and evolving web applications with React and TypeScript, focused on performance, code quality, and user experience, always aligned with product needs.',
    'hero.about2':      'I work in agile teams, participating in technical discussions, standard-setting, code reviews, and internal training sessions, contributing to delivery quality and the continuous growth of both applications and the team. I am currently deepening my knowledge of Node.js to evolve into a fullstack role.',
    'hero.about_short': 'Frontend Developer with 4+ years of experience building and evolving web applications with React and TypeScript, focused on performance, code quality, and user experience.',
    'hero.about_rest':  'I work in agile teams, participating in technical discussions, standard-setting, code reviews, and internal training sessions, contributing to delivery quality and the continuous growth of both applications and the team. I am currently deepening my knowledge of Node.js to evolve into a fullstack role.',
    'hero.read_more':   'read more...',
    'hero.read_less':   'read less',

    // Footer
    'footer.text': 'José Lucas Panizio - Front-end Developer',

    // Graduation
    'grad.title':    'Academic Background',
    'grad.degree':   'B.Sc. in Computer Science',
    'grad.bullet.0': 'Fundamentals of computing, logic, algorithms, data structures, and object-oriented programming.',
    'grad.bullet.1': 'Exposure to web development, databases, and systems architecture.',
    'grad.bullet.2': 'Solid foundation for analysis, modeling, and technical decision-making in software systems.',
    'grad.tag.0':    'Logic',
    'grad.tag.1':    'Data Structures',
    'grad.tag.2':    'Databases',
    'grad.tag.3':    'Object-Oriented Programming',

    // Experience
    'exp.title':  'Professional Experience',
    'exp.impact': 'Impact & Results',

    'exp.solus1.period':   'Feb 2022 — Present',
    'exp.solus1.role':     'Front-end Developer',
    'exp.solus1.duty.0':   'Development and evolution of web applications for health insurance management using React and TypeScript, integrated with REST APIs.',
    'exp.solus1.duty.1':   'Participation in software architecture discussions and product analysis, contributing to the definition of frontend technical solutions.',
    'exp.solus1.duty.2':   'Led internal training sessions on programming best practices and frontend standards.',
    'exp.solus1.duty.3':   'Creation and evolution of a Design System-based component library used across multiple applications.',
    'exp.solus1.duty.4':   'Documentation and standardization of Design System components using Storybook.',
    'exp.solus1.duty.5':   'Implementation of CI/CD pipelines with GitHub Actions for automation and standardization of the development workflow.',
    'exp.solus1.impact.0': 'Voted by peers as a symbol of respect for the year 2024.',
    'exp.solus1.impact.1': 'Five seniority promotions.',

    'exp.solus2.period':   'Aug 2020 — May 2021',
    'exp.solus2.role':     'Systems Analyst',
    'exp.solus2.duty.0':   'Support and maintenance of the Solus system, handling incident resolution and system improvements.',
    'exp.solus2.duty.1':   'Legacy code maintenance using PHP, Delphi, and PL/SQL.',
    'exp.solus2.duty.2':   'Version control using SVN.',
    'exp.solus2.impact.0': 'Recognized among analysts with the highest volume of tickets resolved within SLA.',
    'exp.solus2.impact.1': 'One seniority promotion.',

    'exp.panizio.period': 'Feb 2018 — Aug 2020',
    'exp.panizio.role':   'IT Support Technician',
    'exp.panizio.duty.0': "Development and maintenance of the company's institutional website.",
    'exp.panizio.duty.1': 'Technical support for systems used by the organization.',
    'exp.panizio.duty.2': 'Creation of technical documentation to support end users.',

    'exp.apetit.period': 'May 2016 — Dec 2016',
    'exp.apetit.role':   'IT Intern',
    'exp.apetit.duty.0': 'Technical support for internal users and systems.',
    'exp.apetit.duty.1': 'Assisted with basic equipment maintenance and IT infrastructure.',

    // Courses
    'course.title':    'COURSES & CERTIFICATIONS',
    'course.0.title':  'Node.js',
    'course.0.period': 'In progress · 73h',
    'course.0.desc':   'Node.js course focused on backend development with JavaScript, covering server creation, REST APIs, authentication, database integration, and the Node ecosystem.',
    'course.1.title':  'AI-Powered Dev: Claude Code, Codex & Cursor',
    'course.1.period': '2026 · 10h',
    'course.1.desc':   'Course on optimizing the use of AI tools such as Claude Code, Codex, and Cursor, focusing on task automation, code generation, and integration with development workflows.',
    'course.2.title':  'Next.js',
    'course.2.period': '2026 · 45h',
    'course.2.desc':   'Course focused on application development with Next.js, covering SSR, SSG, ISR, routing via pages and app router, and Server Components.',
    'course.3.title':  'Angular',
    'course.3.period': 'Jan 2026 · 11h',
    'course.3.desc':   'Introductory Angular v21 course covering framework structure, components, and basic data flow.',
    'course.4.title':  'Tailwind CSS',
    'course.4.period': 'Aug 2025 · 16h',
    'course.4.desc':   'Course focused on building responsive layouts with Tailwind CSS v4, including theme customization and utility composition.',
    'course.5.title':  'Javascript ES6',
    'course.5.period': 'Jul 2025 · 74h',
    'course.5.desc':   'Modern JavaScript (ES6+) course covering modules, closures, DOM manipulation, API consumption with fetch, and asynchronous programming.',
    'course.6.title':  'Professional React',
    'course.6.period': 'Apr 2025 · 27h',
    'course.6.desc':   'React course focusing on Styled Components, component documentation with Storybook, and automated testing with Jest.',
    'course.7.title':  'React.js',
    'course.7.period': 'Mar 2025 · 50h',
    'course.7.desc':   'Comprehensive course on the React ecosystem, including components, state management, library integration, testing, and build and deploy processes.',
    'course.8.title':  'Communication & Public Speaking',
    'course.8.period': 'Sep 2023 · 16h',
    'course.8.desc':   'Communication and public speaking course in a professional context with theory and practice under the mentorship of Cinthia Erika.',
  },
};
