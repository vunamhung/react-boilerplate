import { Outlet } from 'react-router-dom';
import { TheFooter, TheHeader } from '~/components';

export default function App() {
  return (
    <>
      <TheHeader />
      <Outlet />
      <TheFooter />
    </>
  );
}
