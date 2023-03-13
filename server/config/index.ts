import { config } from 'dotenv';

config({ path: '.env' });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { PEXELS_API_KEY, PEXELS_API_ENDPOINT, ORIGIN } = process.env;
