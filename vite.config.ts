import type { PluginOption } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import viteReact from '@vitejs/plugin-react-swc';
import viteAnalyze from 'rollup-plugin-analyzer';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import viteEnv from 'vite-plugin-environment';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteAnalyze({ summaryOnly: true }) as PluginOption,
    visualizer({ gzipSize: true }) as PluginOption,
    viteReact(),
    tsConfigPaths(),
    viteEnv({
      VITE_API_BASE_URL: undefined,
    }),
  ],
});
