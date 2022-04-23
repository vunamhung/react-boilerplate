import type { ReactNode } from 'react';
import clsx from 'clsx';

export function Badge({ className = 'absolute -top-1 -right-1', children }: { className?: string; children: ReactNode }) {
  return <span className={clsx('rounded-full bg-black py-0.5 px-1.5 text-xs text-white', className)}>{children}</span>;
}
