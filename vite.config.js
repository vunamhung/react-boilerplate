import { resolve } from 'path';
import { defineConfig } from 'vite';
import ViteReact from '@vitejs/plugin-react';
import ViteRadar from 'vite-plugin-radar';
import ViteFonts from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  jsx: 'react',
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
