import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useProgress, useToken } from '~/hooks';
import { TheHeader, TheFooter } from '~/components';
import { setAuthorization } from '~/utilities';

export default function App() {
  useProgress();
  const [token] = useToken();

  useEffect(() => {
    if (token) {
      setAuthorization(token as string);
    }
  });

  return (
    <>
      <TheHeader />
      <Outlet />
      <TheFooter />
    </>
  );
}
