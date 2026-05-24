import { MentalModel, CategoryInfo } from '../types';
import * as path from 'path';
import * as fs from 'fs';

export class ModelLoader {
  private models: MentalModel[] = [];
  private modelsById: Map<string, MentalModel> = new Map();
  private modelsByCategory: Map<string, MentalModel[]> = new Map();
  private initialized: boolean = false;

  constructor() {}

  private getCategoryIdFromPath(dirName: string): string {
    const categoryMap: Record<string, string> = {
      'decision-reasoning': 'decision-reasoning',
      'strategy-competition': 'strategy-competition',
      'systems-complexity': 'systems-complexity',
      'psychology-behavior': 'psychology-behavior',
      'execution-learning': 'execution-learning'
    };
    return categoryMap[dirName] || dirName;
  }

  private getCategoryNameFromId(id: string): string {
    const names: Record<string, string> = {
      'decision-reasoning': 'Decision & Reasoning',
      'strategy-competition': 'Strategy & Competition',
      'systems-complexity': 'Systems & Complexity',
      'psychology-behavior': 'Psychology & Behavior',
      'execution-learning': 'Execution & Learning'
    };
    return names[id] || id;
  }

  private formatModelId(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  private parseModelFromHtml(htmlPath: string, category: string): MentalModel | null {
    try {
      const content = fs.readFileSync(htmlPath, 'utf-8');
      
      const idMatch = htmlPath.match(/([^/]+)\.html$/);
      const id = idMatch ? idMatch[1] : this.formatModelId(path.basename(htmlPath, '.html'));
      
      const nameMatch = content.match(/<h1[^>]*>([^<]+)</i) || 
                        content.match(/<title>([^<]+)</i);
      let name = nameMatch ? nameMatch[1].trim() : id;
      
      if (name.includes(' | ')) {
        name = name.split(' | ')[0];
      }
      
      if (name.includes('SOLO CORN SKILLS')) {
        name = id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      }

      return {
        id,
        name,
        category,
        definition: 'A mental model helps you think more clearly and make better decisions.',
        keyPrinciples: ['Principle 1', 'Principle 2', 'Principle 3'],
        whenToUse: 'Use this model when facing complex decisions or problems.',
        example: 'Example usage scenario...',
        relatedModels: []
      };
    } catch (error) {
      console.warn(`Warning: Could not load ${htmlPath}`);
      return null;
    }
  }

  async init(): Promise<void> {
    if (this.initialized) return;

    const models: MentalModel[] = [];
    const docsPath = path.join(__dirname, '../../../../docs/mental-models');

    const categories = [
      { id: 'decision-reasoning', dir: 'decision-reasoning' },
      { id: 'strategy-competition', dir: 'strategy-competition' },
      { id: 'systems-complexity', dir: 'systems-complexity' },
      { id: 'psychology-behavior', dir: 'psychology-behavior' },
      { id: 'execution-learning', dir: 'execution-learning' }
    ];

    for (const category of categories) {
      const categoryDir = path.join(docsPath, category.dir);
      if (fs.existsSync(categoryDir)) {
        const files = fs.readdirSync(categoryDir);
        for (const file of files) {
          if (file.endsWith('.html') && file !== 'index.html') {
            const model = this.parseModelFromHtml(
              path.join(categoryDir, file),
              category.id
            );
            if (model) {
              models.push(model);
            }
          }
        }
      }
    }

    this.models = models;
    
    this.modelsById = new Map();
    for (const model of models) {
      this.modelsById.set(model.id, model);
    }

    this.modelsByCategory = new Map();
    for (const model of models) {
      if (!this.modelsByCategory.has(model.category)) {
        this.modelsByCategory.set(model.category, []);
      }
      this.modelsByCategory.get(model.category)!.push(model);
    }

    this.initialized = true;
  }

  getModels(): MentalModel[] {
    if (!this.initialized) throw new Error('ModelLoader not initialized');
    return [...this.models];
  }

  getModelById(id: string): MentalModel | undefined {
    if (!this.initialized) throw new Error('ModelLoader not initialized');
    return this.modelsById.get(id);
  }

  getModelsByCategory(category: string): MentalModel[] {
    if (!this.initialized) throw new Error('ModelLoader not initialized');
    return [...(this.modelsByCategory.get(category) || [])];
  }

  getCategories(): CategoryInfo[] {
    if (!this.initialized) throw new Error('ModelLoader not initialized');
    return Array.from(this.modelsByCategory.entries()).map(([id, models]) => ({
      id,
      name: this.getCategoryNameFromId(id),
      description: '',
      modelCount: models.length
    }));
  }

  searchModels(query: string): MentalModel[] {
    if (!this.initialized) throw new Error('ModelLoader not initialized');
    const lowerQuery = query.toLowerCase();
    return this.models.filter(model => 
      model.name.toLowerCase().includes(lowerQuery) ||
      model.id.toLowerCase().includes(lowerQuery) ||
      model.definition.toLowerCase().includes(lowerQuery)
    );
  }
}