export interface MentalModel {
  id: string;
  name: string;
  category: string;
  definition: string;
  keyPrinciples: string[];
  whenToUse: string;
  example: string;
  relatedModels?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  modelCount: number;
}

export interface ModelSearchResult {
  model: MentalModel;
  relevanceScore: number;
  matchingFields: string[];
}

export interface OutputFormat {
  pretty: boolean;
  json: boolean;
  yaml: boolean;
  markdown: boolean;
}

export interface Config {
  defaultCategory?: string;
  outputFormat: 'pretty' | 'json' | 'yaml' | 'markdown';
  verbose: boolean;
  quiet: boolean;
  cacheEnabled: boolean;
  cacheDuration: number;
}