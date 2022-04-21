import { Outlet } from 'react-router';
import TheHeader from '~/modules/TheHeader';
import TheFooter from '~/modules/TheFooter';

export default function App() {
  return (
    <>
      <TheHeader />
      <Outlet />
      <TheFooter />
    </>
  );
}
