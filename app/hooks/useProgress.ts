import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { start, done } from 'nprogress';
import { useMounted } from './useMounted';

export function useProgress() {
  const { pathname } = useLocation();
  const mounted = useMounted();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) {
      start();
      setVisible(true);
    }
    if (visible) {
      done();
      setVisible(false);
    }
    if (!visible && mounted) {
      setVisible(false);
      done();
    }
    return () => {
      done();
    };
  }, [pathname, mounted]);
}
