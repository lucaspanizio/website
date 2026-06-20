export type Lang = 'pt' | 'en';

type DeepRecord = { [key: string]: string | DeepRecord };

export const translations: Record<Lang, DeepRecord> = {
  pt: {
    header: {
      save_pdf: 'SALVAR PDF',
    },

    hero: {
      role: 'Desenvolvedor Frontend',
      about1:
        'Desenvolvedor Frontend com mais de 4 anos de experiência na construção e evolução de aplicações web com React e TypeScript, com foco em performance, qualidade de código e experiência do usuário, sempre alinhado às necessidades do produto.',
      about2:
        'Atuo em times ágeis, participando de discussões técnicas, definição de padrões, code reviews e treinamentos internos, contribuindo para a qualidade das entregas e a evolução contínua das aplicações e do time. Atualmente venho me aprofundando em Node.js com o objetivo de evoluir para um perfil fullstack.',
      about_short:
        'Desenvolvedor Frontend com mais de 4 anos de experiência na construção e evolução de aplicações web com React e TypeScript, com foco em performance, qualidade de código e experiência do usuário.',
      about_rest:
        'Atuo em times ágeis, participando de discussões técnicas, definição de padrões, code reviews e treinamentos internos, contribuindo para a qualidade das entregas e a evolução contínua das aplicações e do time. Atualmente venho me aprofundando em Node.js com o objetivo de evoluir para um perfil fullstack.',
      read_more: 'ver mais...',
      read_less: 'ver menos',
    },

    footer: {
      text: 'José Lucas Panizio - Desenvolvedor Front-end',
    },

    grad: {
      title: 'Formação Acadêmica',
      degree: 'Bacharelado em Ciência da Computação',
      bullet: {
        '0': 'Fundamentos de computação, lógica, algoritmos, estruturas de dados e orientação a objetos.',
        '1': 'Contato com desenvolvimento web, bancos de dados e arquitetura de sistemas.',
        '2': 'Base sólida para análise, modelagem e tomada de decisões técnicas em sistemas de software.',
      },
      tag: {
        '0': 'Lógica',
        '1': 'Estrutura de dados',
        '2': 'Banco de dados',
        '3': 'Orientação a objetos',
      },
    },

    exp: {
      title: 'Experiências Profissionais',
      impact: 'Impacto & Resultados',
      solus1: {
        period: 'Fev de 2022 — Atualmente',
        role: 'Desenvolvedor Front-end',
        duty: {
          '0': 'Desenvolvimento e evolução de aplicações web voltadas à gestão de planos de saúde, utilizando React e TypeScript, integradas a APIs REST.',
          '1': 'Participação em discussões de arquitetura de software e análise de produto, contribuindo para a definição de soluções técnicas no frontend.',
          '2': 'Condução de treinamentos internos sobre boas práticas de programação e padrões de frontend.',
          '3': 'Criação e evolução de biblioteca de componentes baseada em Design System utilizada entre múltiplas aplicações.',
          '4': 'Documentação e padronização de componentes do Design System utilizando Storybook.',
          '5': 'Implementação de pipelines de CI/CD com GitHub Actions para automação e padronização do fluxo de desenvolvimento.',
        },
        impact: {
          '0': 'Reconhecido por votação como símbolo de respeito do ano 2024.',
          '1': 'Cinco promoções de senioridade.',
        },
      },
      solus2: {
        period: 'Ago de 2020 — Mai de 2021',
        role: 'Analista de Sistemas',
        duty: {
          '0': 'Suporte e manutenção do sistema Solus, atuando na resolução de incidentes e melhorias do sistema.',
          '1': 'Manutenção em código legado utilizando PHP, Delphi e PL/SQL.',
          '2': 'Controle de versão utilizando SVN.',
        },
        impact: {
          '0': 'Reconhecido entre os analistas com maior volume de chamados resolvidos dentro do SLA.',
          '1': 'Uma promoção de senioridade.',
        },
      },
      panizio: {
        period: 'Fev de 2018 — Ago de 2020',
        role: 'Técnico de Suporte',
        duty: {
          '0': 'Desenvolvimento e manutenção do website institucional da empresa.',
          '1': 'Suporte técnico aos sistemas utilizados pela organização.',
          '2': 'Criação de documentação técnica para apoio aos usuários.',
        },
      },
      apetit: {
        period: 'Mai de 2016 — Dez de 2016',
        role: 'Estagiário de TI',
        duty: {
          '0': 'Suporte técnico aos usuários e sistemas internos da empresa.',
          '1': 'Auxílio na manutenção básica de equipamentos e infraestrutura de TI.',
        },
      },
    },

    course: {
      title: 'CURSOS E CERTIFICAÇÕES',
      '0': {
        title: 'Node.js',
        period: 'Em andamento · 73h',
        desc: 'Curso de Node.js voltado ao desenvolvimento backend com JavaScript, abordando criação de servidores, APIs REST, autenticação, integração com banco de dados e ecossistema Node.',
      },
      '1': {
        title: 'Dev com IA',
        period: 'Jun 2026 · 10h',
        desc: 'Curso sobre como otimizar o uso de ferramentas de IA como Claude Code, Codex e Cursor, com foco em automação de tarefas, geração de código e integração com fluxos de trabalho de desenvolvimento.',
      },
      '2': {
        title: 'Next.js',
        period: 'Fev 2026 · 45h',
        desc: 'Curso voltado ao desenvolvimento de aplicações com Next.js, abordando SSR, SSG, ISR, roteamento via pages e app router e Server Components.',
      },
      '3': {
        title: 'Angular',
        period: 'Jan 2026 · 11h',
        desc: 'Curso introdutório de Angular v21, com abordagem da estrutura do framework, componentes e fluxo básico de dados.',
      },
      '4': {
        title: 'Tailwind CSS',
        period: 'Ago 2025 · 16h',
        desc: 'Curso voltado a construção de layouts responsivos com Tailwind CSS v4, incluindo customização de tema e composição de utilitários.',
      },
      '5': {
        title: 'Javascript ES6',
        period: 'Jul 2025 · 74h',
        desc: 'Curso de JavaScript moderno (ES6+), abrangendo módulos, closures, manipulação do DOM, consumo de APIs com fetch e programação assíncrona.',
      },
      '6': {
        title: 'React Profissional',
        period: 'Abr 2025 · 27h',
        desc: 'Curso de React com foco em Styled Components, documentação de componentes com Storybook e testes automatizados com Jest.',
      },
      '7': {
        title: 'React.js',
        period: 'Mar 2025 · 50h',
        desc: 'Curso completo sobre o ecossistema React, incluindo componentes, estado, integração com bibliotecas, testes e processos de build e deploy.',
      },
      '8': {
        title: 'Comunicação e Oratória',
        period: 'Set 2023 · 16h',
        desc: 'Curso de comunicação e oratória em contexto profissional com teoria e prática sob mentoria de Cinthia Erika.',
      },
    },

    projects: {
      title: 'Projetos',
    },

    project: {
      'coffee-delivery': {
        name: 'Coffee Delivery',
        desc: 'E-commerce de cafés com seleção de produtos, carrinho de compras e fluxo de checkout com endereço e forma de pagamento.',
      },
      'forest-wind': {
        name: 'Forest Wind',
        desc: 'Landing page de produto com design moderno construída com Astro e Tailwind CSS v4.',
      },
      flexblog: {
        name: 'Flexblog',
        desc: 'Landing page de um blog fictício desenvolvida para estudo aprofundado do CSS Flexbox.',
      },
      'cert-generator': {
        name: 'Gerador de Certificados',
        desc: 'Ferramenta para geração de certificados personalizados a partir de dados fornecidos pelo usuário.',
      },
      calculator: {
        name: 'Calculator',
        desc: 'Calculadora com suporte às operações básicas e histórico de cálculos realizados.',
      },
      'todo-web': {
        name: 'To Do Web',
        desc: 'Aplicação de gerenciamento de tarefas com criação, marcação como concluída e exclusão de itens.',
      },
      kanban: {
        name: 'Kanban',
        desc: 'Quadro Kanban com drag and drop entre colunas, utilizando a biblioteca dnd-kit.',
      },
      'nlw-expert-notes': {
        name: 'NLW Expert Notes',
        desc: 'App de criação de notas via texto ou transcrição de áudio em tempo real usando a Web Speech API.',
      },
      'passin-web': {
        name: 'Pass.in — Web',
        desc: 'Gerenciamento de participantes em eventos com listagem, busca e paginação no frontend.',
      },
      'nlw-expert-polls': {
        name: 'NLW Expert Polls',
        desc: 'API para criação, consulta e votação em enquetes com atualizações em tempo real via WebSockets.',
      },
      'passin-api': {
        name: 'Pass.in — API',
        desc: 'Backend do sistema de gerenciamento de participantes em eventos com check-in e geração de crachás.',
      },
      'nlw-journey-app': {
        name: 'NLW Journey App',
        desc: 'App mobile para planejamento de viagens com criação de roteiros, atividades e links úteis.',
      },
      'use-enhance-children': {
        name: 'use-enhance-children',
        desc: 'Hook React customizado para injeção de props em elementos filhos de forma genérica e reutilizável.',
      },
      'mf-lab': {
        name: 'MF Lab',
        desc: 'Laboratório de exploração de Module Federation e Web Components integrando React, Angular e Vue.',
      },
    },
  },

  en: {
    header: {
      save_pdf: 'SAVE PDF',
    },

    hero: {
      role: 'Frontend Developer',
      about1:
        'Frontend Developer with 4+ years of experience building and evolving web applications with React and TypeScript, focused on performance, code quality, and user experience, always aligned with product needs.',
      about2:
        'I work in agile teams, participating in technical discussions, standard-setting, code reviews, and internal training sessions, contributing to delivery quality and the continuous growth of both applications and the team. I am currently deepening my knowledge of Node.js to evolve into a fullstack role.',
      about_short:
        'Frontend Developer with 4+ years of experience building and evolving web applications with React and TypeScript, focused on performance, code quality, and user experience.',
      about_rest:
        'I work in agile teams, participating in technical discussions, standard-setting, code reviews, and internal training sessions, contributing to delivery quality and the continuous growth of both applications and the team. I am currently deepening my knowledge of Node.js to evolve into a fullstack role.',
      read_more: 'read more...',
      read_less: 'read less',
    },

    footer: {
      text: 'José Lucas Panizio - Front-end Developer',
    },

    grad: {
      title: 'Academic Background',
      degree: 'B.Sc. in Computer Science',
      bullet: {
        '0': 'Fundamentals of computing, logic, algorithms, data structures, and object-oriented programming.',
        '1': 'Exposure to web development, databases, and systems architecture.',
        '2': 'Solid foundation for analysis, modeling, and technical decision-making in software systems.',
      },
      tag: {
        '0': 'Logic',
        '1': 'Data Structures',
        '2': 'Databases',
        '3': 'Object-Oriented Programming',
      },
    },

    exp: {
      title: 'Professional Experience',
      impact: 'Impact & Results',
      solus1: {
        period: 'Feb 2022 — Present',
        role: 'Front-end Developer',
        duty: {
          '0': 'Development and evolution of web applications for health insurance management using React and TypeScript, integrated with REST APIs.',
          '1': 'Participation in software architecture discussions and product analysis, contributing to the definition of frontend technical solutions.',
          '2': 'Led internal training sessions on programming best practices and frontend standards.',
          '3': 'Creation and evolution of a Design System-based component library used across multiple applications.',
          '4': 'Documentation and standardization of Design System components using Storybook.',
          '5': 'Implementation of CI/CD pipelines with GitHub Actions for automation and standardization of the development workflow.',
        },
        impact: {
          '0': 'Voted by peers as a symbol of respect for the year 2024.',
          '1': 'Five seniority promotions.',
        },
      },
      solus2: {
        period: 'Aug 2020 — May 2021',
        role: 'Systems Analyst',
        duty: {
          '0': 'Support and maintenance of the Solus system, handling incident resolution and system improvements.',
          '1': 'Legacy code maintenance using PHP, Delphi, and PL/SQL.',
          '2': 'Version control using SVN.',
        },
        impact: {
          '0': 'Recognized among analysts with the highest volume of tickets resolved within SLA.',
          '1': 'One seniority promotion.',
        },
      },
      panizio: {
        period: 'Feb 2018 — Aug 2020',
        role: 'IT Support Technician',
        duty: {
          '0': "Development and maintenance of the company's institutional website.",
          '1': 'Technical support for systems used by the organization.',
          '2': 'Creation of technical documentation to support end users.',
        },
      },
      apetit: {
        period: 'May 2016 — Dec 2016',
        role: 'IT Intern',
        duty: {
          '0': 'Technical support for internal users and systems.',
          '1': 'Assisted with basic equipment maintenance and IT infrastructure.',
        },
      },
    },

    course: {
      title: 'COURSES & CERTIFICATIONS',
      '0': {
        title: 'Node.js',
        period: 'In progress · 73h',
        desc: 'Node.js course focused on backend development with JavaScript, covering server creation, REST APIs, authentication, database integration, and the Node ecosystem.',
      },
      '1': {
        title: 'AI-Powered Dev',
        period: 'Jun 2026 · 10h',
        desc: 'Course on optimizing the use of AI tools such as Claude Code, Codex, and Cursor, focusing on task automation, code generation, and integration with development workflows.',
      },
      '2': {
        title: 'Next.js',
        period: 'Feb 2026 · 45h',
        desc: 'Course focused on application development with Next.js, covering SSR, SSG, ISR, routing via pages and app router, and Server Components.',
      },
      '3': {
        title: 'Angular',
        period: 'Jan 2026 · 11h',
        desc: 'Introductory Angular v21 course covering framework structure, components, and basic data flow.',
      },
      '4': {
        title: 'Tailwind CSS',
        period: 'Aug 2025 · 16h',
        desc: 'Course focused on building responsive layouts with Tailwind CSS v4, including theme customization and utility composition.',
      },
      '5': {
        title: 'Javascript ES6',
        period: 'Jul 2025 · 74h',
        desc: 'Modern JavaScript (ES6+) course covering modules, closures, DOM manipulation, API consumption with fetch, and asynchronous programming.',
      },
      '6': {
        title: 'Professional React',
        period: 'Apr 2025 · 27h',
        desc: 'React course focusing on Styled Components, component documentation with Storybook, and automated testing with Jest.',
      },
      '7': {
        title: 'React.js',
        period: 'Mar 2025 · 50h',
        desc: 'Comprehensive course on the React ecosystem, including components, state management, library integration, testing, and build and deploy processes.',
      },
      '8': {
        title: 'Communication & Public Speaking',
        period: 'Sep 2023 · 16h',
        desc: 'Communication and public speaking course in a professional context with theory and practice under the mentorship of Cinthia Erika.',
      },
    },

    projects: {
      title: 'Projects',
    },

    project: {
      'coffee-delivery': {
        name: 'Coffee Delivery',
        desc: 'Coffee e-commerce with product selection, shopping cart, and checkout flow with address and payment method.',
      },
      'forest-wind': {
        name: 'Forest Wind',
        desc: 'Modern product landing page built with Astro and Tailwind CSS v4.',
      },
      flexblog: {
        name: 'Flexblog',
        desc: 'Fictional blog landing page built for in-depth study of CSS Flexbox.',
      },
      'cert-generator': {
        name: 'Certificate Generator',
        desc: 'Tool for generating customized certificates from user-provided data.',
      },
      calculator: {
        name: 'Calculator',
        desc: 'Calculator with support for basic operations and a history of completed calculations.',
      },
      'todo-web': {
        name: 'To Do Web',
        desc: 'Task management app with creation, completion marking, and item deletion.',
      },
      kanban: {
        name: 'Kanban',
        desc: 'Kanban board with drag and drop between columns using the dnd-kit library.',
      },
      'nlw-expert-notes': {
        name: 'NLW Expert Notes',
        desc: 'Notes app with creation via text or real-time audio transcription using the Web Speech API.',
      },
      'passin-web': {
        name: 'Pass.in — Web',
        desc: 'Event participant management with listing, search, and pagination on the frontend.',
      },
      'nlw-expert-polls': {
        name: 'NLW Expert Polls',
        desc: 'API for creating, querying, and voting on polls with real-time updates via WebSockets.',
      },
      'passin-api': {
        name: 'Pass.in — API',
        desc: 'Backend for the event participant management system with check-in and badge generation.',
      },
      'nlw-journey-app': {
        name: 'NLW Journey App',
        desc: 'Mobile travel planning app with itinerary creation, activities, and useful links.',
      },
      'use-enhance-children': {
        name: 'use-enhance-children',
        desc: 'Custom React hook for generic and reusable prop injection into child elements.',
      },
      'mf-lab': {
        name: 'MF Lab',
        desc: 'Laboratory exploring Module Federation and Web Components integrating React, Angular, and Vue.',
      },
    },
  },
};
