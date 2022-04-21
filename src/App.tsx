import { Outlet } from 'react-router';
import { TheHeader, TheFooter } from '~/components';

export default function App() {
  return (
    <>
      <TheHeader />
      <Outlet />
      <TheFooter />
    </>
  );
}
