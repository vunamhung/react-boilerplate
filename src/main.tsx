import { StrictMode } from 'react';
import { MantineProvider } from '@mantine/core';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { createRoot } from 'react-dom/client';
import { SWRConfig } from 'swr';
import { mantineTheme } from '~/utilities';
import { routeTree } from './routeTree.gen';
import '~/assets/css/style.css';

// Set up a Router instance
const router = createRouter({ routeTree, defaultPreload: 'intent' });

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <SWRConfig value={{ revalidateOnReconnect: true, errorRetryCount: 2 }}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </SWRConfig>
  </StrictMode>,
);

// Register things for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
