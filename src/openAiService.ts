import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText, type CoreMessage, type LanguageModel } from 'ai';
import { type Context } from 'hono';
import type { BlankEnv, BlankInput } from 'hono/types';
import MessageService from './messageService';

type CreateOpenAiCompatibleConfigurationModelProps = {
  modelName?: string;
  providerName?: string;
  baseUrl?: string;
};

export class OpenAiService {
  async createOpenAiCompatibleConfigurationModel({
    modelName = 'llama-3.2-3b-instruct',
    providerName = 'lmstudio',
    baseUrl = 'http://localhost:1234/v1',
  }: CreateOpenAiCompatibleConfigurationModelProps): Promise<LanguageModel> {
    const lmstudio = createOpenAICompatible({
      name: providerName,
      baseURL: baseUrl,
    });
    return lmstudio(modelName);
  }

  async handleGetCompletions(
    model: LanguageModel,
    messageService: MessageService,
    ctx: Context<BlankEnv, '/api/get-completions', BlankInput>,
  ) {
    const { prompt, history } = await ctx.req.json(); // get the prompt from the request body

    if (!prompt) {
      return ctx.json({ error: 'Prompt is required' }, 400);
    }

    if (typeof prompt !== 'string') {
      return ctx.json({ error: 'Prompt must be a string' }, 400);
    }

    if (history && !Array.isArray(history)) {
      return ctx.json({ error: 'History must be an array' }, 400);
    }

    const newMessage: CoreMessage = { role: 'user', content: prompt };

    const allMessages = history
      ? [...history, newMessage]
      : [...messageService.getMessageHistory(), newMessage];

    try {
      const result = await generateText({
        model,
        messages: allMessages,
      });

      const responseMessages = result.response.messages;
      messageService.writeMessageHistory([...allMessages, ...responseMessages]);

      return ctx.json({
        userMessage: newMessage,
        aiResponses: responseMessages,
      });
    } catch (error) {
      return ctx.json({ error: (error as Error).message }, 500);
    }
  }
}
