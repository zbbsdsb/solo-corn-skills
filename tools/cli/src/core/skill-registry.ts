import * as fs from 'fs';
import * as path from 'path';
import { 
  Skill, 
  SkillMetadata, 
  SkillResult, 
  InvocationParams,
  Capability,
  InputSchema,
  OutputSchema
} from '../types';

/**
 * SkillRegistry - Manages skill registration, discovery, and invocation
 * 
 * Provides a centralized registry for all skills with capabilities including:
 * - Registration of new skills
 * - Discovery of skills by name
 * - Search by tags/categories
 * - Listing all available skills
 */
export class SkillRegistry {
  private skills: Map<string, Skill> = new Map();
  private metadata: Map<string, SkillMetadata> = new Map();
  private initialized: boolean = false;

  constructor() {
    this.initialize();
  }

  /**
   * Initialize the registry and auto-discover skills
   */
  private async initialize(): Promise<void> {
    if (this.initialized) return;
    
    try {
      await this.discoverSkills();
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize skill registry:', error);
    }
  }

  /**
   * Register a new skill
   */
  register(skill: Skill): void {
    if (!skill.metadata || !skill.metadata.name) {
      throw new Error('Invalid skill: metadata and name are required');
    }

    const name = skill.metadata.name.toLowerCase();
    
    if (this.skills.has(name)) {
      console.warn(`Skill "${name}" is already registered. Overwriting...`);
    }

    this.skills.set(name, skill);
    this.metadata.set(name, skill.metadata);
    
    console.log(`✓ Registered skill: ${name} (${skill.metadata.version})`);
  }

  /**
   * Find a skill by name
   */
  find(name: string): Skill | undefined {
    const normalizedName = name.toLowerCase();
    return this.skills.get(normalizedName);
  }

  /**
   * Check if a skill is registered
   */
  has(name: string): boolean {
    return this.skills.has(name.toLowerCase());
  }

  /**
   * Search skills by query (matches name, description, tags)
   */
  search(query: string): Skill[] {
    const normalizedQuery = query.toLowerCase();
    const results: Skill[] = [];

    for (const skill of this.skills.values()) {
      const metadata = skill.metadata;
      
      if (metadata.name.toLowerCase().includes(normalizedQuery)) {
        results.push(skill);
        continue;
      }

      if (metadata.description.toLowerCase().includes(normalizedQuery)) {
        results.push(skill);
        continue;
      }

      if (metadata.tags && metadata.tags.some(tag => 
        tag.toLowerCase().includes(normalizedQuery)
      )) {
        results.push(skill);
        continue;
      }

      if (metadata.category && metadata.category.some(cat => 
        cat.toLowerCase().includes(normalizedQuery)
      )) {
        results.push(skill);
      }
    }

    return results;
  }

  /**
   * List all registered skills as metadata
   */
  list(): SkillMetadata[] {
    return Array.from(this.metadata.values());
  }

  /**
   * Get skill metadata by name
   */
  getMetadata(name: string): SkillMetadata | undefined {
    return this.metadata.get(name.toLowerCase());
  }

  /**
   * Get capabilities for a specific skill
   */
  getCapabilities(name: string): Capability[] | undefined {
    const skill = this.find(name);
    return skill?.metadata.capabilities;
  }

  /**
   * Get input schema for a skill
   */
  getInputs(name: string): InputSchema[] | undefined {
    const skill = this.find(name);
    return skill?.inputs;
  }

  /**
   * Get output schema for a skill
   */
  getOutputs(name: string): OutputSchema[] | undefined {
    const skill = this.find(name);
    return skill?.outputs;
  }

  /**
   * Invoke a skill by name
   */
  async invoke(name: string, params: InvocationParams): Promise<SkillResult> {
    const skill = this.find(name);

    if (!skill) {
      return {
        success: false,
        outputs: {},
        error: {
          code: 'E001',
          message: `Skill "${name}" not found`,
          details: {
            availableSkills: this.list().map(s => s.name)
          }
        }
      };
    }

    try {
      const startTime = Date.now();
      const result = await skill.invoke(params);
      
      if (result.success && result.metadata) {
        result.metadata.duration = Date.now() - startTime;
      }

      return result;
    } catch (error) {
      return {
        success: false,
        outputs: {},
        error: {
          code: 'E002',
          message: `Error invoking skill "${name}": ${error.message}`,
          details: error
        }
      };
    }
  }

  /**
   * Auto-discover skills from the skills directory
   */
  private async discoverSkills(): Promise<void> {
    const skillsDir = path.resolve(process.cwd(), '../..');
    
    if (!fs.existsSync(skillsDir)) {
      console.warn('Skills directory not found, skipping auto-discovery');
      return;
    }

    const skillDirs = fs.readdirSync(skillsDir)
      .filter(item => {
        const itemPath = path.join(skillsDir, item);
        return fs.statSync(itemPath).isDirectory() && 
               fs.existsSync(path.join(itemPath, 'SKILL.md'));
      });

    console.log(`\n🔍 Discovered ${skillDirs.length} potential skills...`);

    for (const dir of skillDirs) {
      try {
        await this.loadSkillFromDirectory(path.join(skillsDir, dir));
      } catch (error) {
        console.warn(`⚠ Failed to load skill "${dir}":`, error.message);
      }
    }

    console.log(`✓ Loaded ${this.skills.size} skills into registry\n`);
  }

  /**
   * Load a skill from its directory
   */
  private async loadSkillFromDirectory(skillPath: string): Promise<void> {
    const skillDir = path.basename(skillPath);
    const skillFile = path.join(skillPath, 'SKILL.md');

    if (!fs.existsSync(skillFile)) {
      return;
    }

    const content = fs.readFileSync(skillFile, 'utf-8');
    
    const mockSkill: Skill = {
      metadata: {
        name: skillDir,
        version: '1.0.0',
        description: this.extractDescription(content),
        category: this.extractCategories(content),
        capabilities: [],
        tags: this.extractTags(content)
      },
      inputs: [],
      outputs: [],
      invoke: async (params: InvocationParams): Promise<SkillResult> => {
        return {
          success: true,
          outputs: {
            message: `Skill "${skillDir}" invoked successfully`,
            inputs: params.inputs
          },
          metadata: {
            duration: 0,
            tokens: 0
          }
        };
      }
    };

    this.register(mockSkill);
  }

  /**
   * Extract description from SKILL.md
   */
  private extractDescription(content: string): string {
    const match = content.match(/^#\s+(.+)$/m);
    return match ? match[1] : 'No description available';
  }

  /**
   * Extract categories from SKILL.md
   */
  private extractCategories(content: string): string[] {
    const categories: string[] = [];
    
    if (content.includes('product')) categories.push('product');
    if (content.includes('decision') || content.includes('strategy')) {
      categories.push('strategy');
    }
    if (content.includes('research')) categories.push('research');
    if (content.includes('marketing') || content.includes('growth')) {
      categories.push('marketing');
    }
    if (content.includes('landing') || content.includes('validation')) {
      categories.push('validation');
    }

    return categories.length > 0 ? categories : ['general'];
  }

  /**
   * Extract tags from SKILL.md
   */
  private extractTags(content: string): string[] {
    const tags: string[] = [];
    
    const tagMatch = content.match(/\btags?:\s*\[([^\]]+)\]/i);
    if (tagMatch) {
      tags.push(...tagMatch[1].split(',').map(t => t.trim()));
    }

    return tags;
  }

  /**
   * Get all skill names
   */
  getSkillNames(): string[] {
    return Array.from(this.skills.keys());
  }

  /**
   * Get skill count
   */
  getSkillCount(): number {
    return this.skills.size;
  }

  /**
   * Clear all registered skills
   */
  clear(): void {
    this.skills.clear();
    this.metadata.clear();
    console.log('✓ Skill registry cleared');
  }

  /**
   * Reload all skills
   */
  async reload(): Promise<void> {
    this.clear();
    this.initialized = false;
    await this.initialize();
  }
}

export const skillRegistry = new SkillRegistry();
