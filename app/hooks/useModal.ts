import { useState } from 'react';

export function useModal() {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);
  const hidden = () => setVisible(false);

  return { toggle, visible, hidden };
}
