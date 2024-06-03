import { z } from 'zod';
import { config } from 'dotenv';

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test', override: true });
} else {
  config();
}

const envSchema = z.object({
  DATABASE_URL: z.string(),
  DATABASE_USERNAME: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PASSAWORD: z.string(),
  JWT_SECRET_KEY: z.string(),
  DATABASE_PORT: z.coerce.number().default(5432),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('Invalid environment variable', _env.error.format());

  throw new Error('Invalid environment variable');
}

export const env = _env.data;
