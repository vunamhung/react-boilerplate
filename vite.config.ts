import { resolve } from 'path';
import { defineConfig } from 'vite';
import ViteReact from '@vitejs/plugin-react';
import ViteRadar from 'vite-plugin-radar';
import ViteFonts from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    ViteReact(),
    ViteFonts({
      google: {
        families: ['Jost'],
      },
    }),
    ViteRadar({
      enableDev: true,
      analytics: {
        id: 'G-XXXXX',
      },
      gtm: [{ id: 'GTM-XXXXX' }],
      pixel: [{ id: 'XXXXXXX' }],
    }),
  ],
  resolve: {
    alias: [{ find: '~', replacement: resolve(__dirname, 'src') }],
  },
});
