import * as https from 'https';
import * as http from 'http';

/**
 * LLMProvider - OpenAI-compatible API client for skill execution.
 *
 * Supports any OpenAI-compatible endpoint (OpenAI, Anthropic via proxy,
 * local Ollama, etc.) using standard chat completions API.
 */

export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LLMRequest {
  model: string;
  messages: LLMMessage[];
  temperature?: number;
  maxTokens?: number;
  stream?: boolean;
}

export interface LLMResponse {
  content: string;
  model: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface LLMConfig {
  apiKey: string;
  baseUrl: string;
  model: string;
  temperature?: number;
  maxTokens?: number;
}

export class LLMProvider {
  private config: LLMConfig;

  constructor(config: LLMConfig) {
    this.config = {
      temperature: 0.7,
      maxTokens: 4096,
      ...config,
    };
  }

  async complete(request: LLMRequest): Promise<LLMResponse> {
    const url = new URL('/chat/completions', this.config.baseUrl);
    const body = JSON.stringify({
      model: request.model || this.config.model,
      messages: request.messages,
      temperature: request.temperature ?? this.config.temperature,
      max_tokens: request.maxTokens ?? this.config.maxTokens,
    });

    const options = {
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const transport = url.protocol === 'https:' ? https : http;

    return new Promise<LLMResponse>((resolve, reject) => {
      const req = transport.request(options, (res) => {
        let data = '';
        res.on('data', (chunk: Buffer) => {
          data += chunk.toString();
        });
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            if (parsed.error) {
              reject(new Error(`LLM API error: ${parsed.error.message || JSON.stringify(parsed.error)}`));
              return;
            }
            const choice = parsed.choices?.[0];
            if (!choice) {
              reject(new Error('No response from LLM'));
              return;
            }
            resolve({
              content: choice.message?.content || '',
              model: parsed.model || this.config.model,
              usage: parsed.usage
                ? {
                    promptTokens: parsed.usage.prompt_tokens,
                    completionTokens: parsed.usage.completion_tokens,
                    totalTokens: parsed.usage.total_tokens,
                  }
                : undefined,
            });
          } catch (err) {
            reject(new Error(`Failed to parse LLM response: ${err.message}`));
          }
        });
      });

      req.on('error', (err) => {
        reject(new Error(`LLM request failed: ${err.message}`));
      });

      req.write(body);
      req.end();
    });
  }
}
