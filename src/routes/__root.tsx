import * as React from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { TheFooter, TheHeader } from '~/components';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <TheHeader />
      <Outlet />
      <TheFooter />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
