import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

console.log("NODE ENV:", process.env.NODE_ENV);

export default defineConfig({
  dialect: 'mysql',
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
  },
  verbose: true,
  strict: true,
});

