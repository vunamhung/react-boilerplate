import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import viteRadar from 'vite-plugin-radar';
import viteFonts from 'vite-plugin-fonts';
import viteEnv from 'vite-plugin-environment';
import viteAnalyze from 'rollup-plugin-analyzer';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    viteAnalyze({ summaryOnly: true }),
    visualizer(),
    viteReact(),
    viteEnv({
      API_BASE_URL: undefined,
    }),
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
