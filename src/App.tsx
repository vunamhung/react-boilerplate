import { Outlet } from 'react-router';
import { useProgress } from '~/hooks';
import { TheHeader, TheFooter } from '~/components';

export default function App() {
  useProgress();

  return (
    <>
      <TheHeader />
      <Outlet />
      <TheFooter />
    </>
  );
}
