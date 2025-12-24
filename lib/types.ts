export type BlogCategory = 'Herbal Protocols' | 'Metabolic Science' | 'Visceral Fat';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  imageUrl?: string;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface ResearchStudy {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  abstract: string;
  relevance: string;
}

