import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Origins allowed to read this site's data (CORS) and hosts allowed to reach the dev server.
// localhost stays allowed for local work; the ngrok tunnel is added explicitly.
const ALLOWED_ORIGINS = [
  'https://erik-unbarking-foolhardily.ngrok-free.dev',
  /^https?:\/\/localhost(:\d+)?$/,
  /^https?:\/\/127\.0\.0\.1(:\d+)?$/,
];

const ALLOWED_HOSTS = ['erik-unbarking-foolhardily.ngrok-free.dev'];

const corsConfig = {
  origin: ALLOWED_ORIGINS,
  methods: ['GET', 'HEAD', 'OPTIONS'],
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  server: {
    cors: corsConfig,
    allowedHosts: ALLOWED_HOSTS,
  },
  preview: {
    cors: corsConfig,
    allowedHosts: ALLOWED_HOSTS,
  },
});
