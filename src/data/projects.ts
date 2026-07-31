export type ProjectType = 'frontend' | 'backend' | 'mobile' | 'library';

export interface FeaturedProject {
  /** Nome exato do repositório no GitHub */
  repo: string;
  /** Nome de exibição */
  name: string;
  type: ProjectType;
}

/**
 * Curadoria dos projetos exibidos no site — home e currículo.
 * A ordem aqui é a ordem de exibição.
 */
export const FEATURED_PROJECTS: FeaturedProject[] = [
  { repo: 'coffee-delivery', name: 'Coffee Delivery', type: 'frontend' },
  { repo: 'forest-wind', name: 'Forest Wind', type: 'frontend' },
  { repo: 'flexblog', name: 'Flexblog', type: 'frontend' },
  { repo: 'redux-store', name: 'Redux Store', type: 'frontend' },
  { repo: 'gerador-certificados', name: 'Gerador de Certificados', type: 'frontend' },
  { repo: 'calculator', name: 'Calculator', type: 'frontend' },
  { repo: 'todo-web', name: 'To Do Web', type: 'frontend' },
  { repo: 'website', name: 'Website', type: 'frontend' },
  { repo: 'mf-lab', name: 'MF Lab', type: 'frontend' },
  { repo: 'nlw-expert-notes', name: 'NLW Expert Notes', type: 'frontend' },
  { repo: 'nlw-expert-polls', name: 'NLW Expert Polls', type: 'backend' },
  { repo: 'nlw-journey-app', name: 'NLW Journey App', type: 'mobile' },
];
