import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import viteRadar from 'vite-plugin-radar';
import viteFonts from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    viteReact(),
    viteFonts({
      google: {
        families: ['Jost'],
      },
    }),
    viteRadar({
      enableDev: true,
      analytics: {
        id: 'G-XXXXX',
      },
      gtm: [{ id: 'GTM-XXXXX' }],
      pixel: [{ id: 'XXXXXXX' }],
    }),
  ],
  resolve: {
    alias: [{ find: '~', replacement: resolve(__dirname, 'app') }],
  },
});
