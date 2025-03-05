import { serve } from '@hono/node-server';
import { Hono, type Context } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import type { BlankEnv, BlankInput } from 'hono/types';

import MessageService from './messageService';
import { OpenAiService } from './openAiService';

const app = new Hono();

const messageService = new MessageService();
const openAiService = new OpenAiService();

app.use(cors());
app.use(logger());

app.post(
  '/api/get-completions',
  async (ctx: Context<BlankEnv, '/api/get-completions', BlankInput>) => {
    const { modelName, baseUrl } = await ctx.req.json();

    const model = await openAiService.createOpenAiCompatibleConfigurationModel({
      modelName,
      providerName: 'lmstudio',
      baseUrl,
    });
    return openAiService.handleGetCompletions(model, messageService, ctx);
  },
);

app.get('/chathistory', async (ctx) => {
  try {
    return ctx.json(
      { messageHistory: messageService.getMessageHistory() },
      200,
    );
  } catch (error) {
    return ctx.json({ error: (error as Error).message }, 500);
  }
});

async function fetchModels(url: string) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const models = await response.json();
  return models;
}
app.get('/api/models', async (ctx) => {
  try {
    const url = ctx.req.query('url');
    if (!url) {
      return ctx.json({ error: 'URL is required' }, 400);
    }
    const models = await fetchModels(url);
    return ctx.json({ models }, 200);
  } catch (error) {
    return ctx.json({ error: (error as Error).message }, 500);
  }
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
