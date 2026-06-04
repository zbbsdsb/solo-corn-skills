import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

/**
 * ConfigManager - Manages SCS CLI configuration.
 *
 * Stores API keys and preferences in ~/.scs/config.json
 * Environment variables (SCS_API_KEY, SCS_BASE_URL, SCS_MODEL) take precedence.
 */

export interface SCSConfig {
  apiKey?: string;
  baseUrl?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  outputFormat?: 'pretty' | 'json' | 'markdown';
}

const CONFIG_DIR = path.join(os.homedir(), '.scs');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');

const DEFAULT_CONFIG: SCSConfig = {
  baseUrl: 'https://api.openai.com/v1',
  model: 'gpt-4o-mini',
  temperature: 0.7,
  maxTokens: 4096,
  outputFormat: 'pretty',
};

export class ConfigManager {
  private config: SCSConfig;

  constructor() {
    this.config = this.load();
  }

  private load(): SCSConfig {
    // Environment variables take highest precedence
    const envApiKey = process.env.SCS_API_KEY || process.env.OPENAI_API_KEY;
    const envBaseUrl = process.env.SCS_BASE_URL || process.env.OPENAI_BASE_URL;
    const envModel = process.env.SCS_MODEL;

    // Load from config file
    let fileConfig: SCSConfig = {};
    try {
      if (fs.existsSync(CONFIG_FILE)) {
        fileConfig = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
      }
    } catch {
      // Config file missing or corrupted, use defaults
    }

    return {
      ...DEFAULT_CONFIG,
      ...fileConfig,
      ...(envApiKey ? { apiKey: envApiKey } : {}),
      ...(envBaseUrl ? { baseUrl: envBaseUrl } : {}),
      ...(envModel ? { model: envModel } : {}),
    };
  }

  get(): SCSConfig {
    return { ...this.config };
  }

  getApiKey(): string | undefined {
    return this.config.apiKey;
  }

  getBaseUrl(): string {
    return this.config.baseUrl || DEFAULT_CONFIG.baseUrl!;
  }

  getModel(): string {
    return this.config.model || DEFAULT_CONFIG.model!;
  }

  getTemperature(): number {
    return this.config.temperature ?? DEFAULT_CONFIG.temperature!;
  }

  getMaxTokens(): number {
    return this.config.maxTokens ?? DEFAULT_CONFIG.maxTokens!;
  }

  isConfigured(): boolean {
    return !!this.config.apiKey;
  }

  set(key: keyof SCSConfig, value: any): void {
    (this.config as any)[key] = value;
    this.save();
  }

  setMultiple(updates: Partial<SCSConfig>): void {
    this.config = { ...this.config, ...updates };
    this.save();
  }

  private save(): void {
    try {
      if (!fs.existsSync(CONFIG_DIR)) {
        fs.mkdirSync(CONFIG_DIR, { recursive: true });
      }
      // Don't save env-derived values back to file
      const toSave: SCSConfig = {};
      for (const [key, value] of Object.entries(this.config)) {
        if (value !== undefined && value !== null) {
          (toSave as any)[key] = value;
        }
      }
      fs.writeFileSync(CONFIG_FILE, JSON.stringify(toSave, null, 2));
    } catch (err) {
      console.error(`Failed to save config: ${err.message}`);
    }
  }

  getConfigPath(): string {
    return CONFIG_FILE;
  }

  show(): string {
    const c = this.config;
    const maskedKey = c.apiKey
      ? c.apiKey.slice(0, 7) + '...' + c.apiKey.slice(-4)
      : '(not set)';
    return [
      `Config file: ${CONFIG_FILE}`,
      `API Key:    ${maskedKey}`,
      `Base URL:   ${c.baseUrl}`,
      `Model:      ${c.model}`,
      `Temperature: ${c.temperature}`,
      `Max Tokens: ${c.maxTokens}`,
      `Output:     ${c.outputFormat}`,
    ].join('\n');
  }
}

export const configManager = new ConfigManager();
