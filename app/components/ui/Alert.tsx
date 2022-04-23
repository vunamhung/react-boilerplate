import type { FC, ReactNode } from 'react';
import clsx from 'clsx';

export const Alert: FC<{ type: 'info' | 'warn' | 'danger'; children: ReactNode; className?: string }> = ({ type, children, className }) => (
  <p
    className={clsx('p-3', className, {
      'border border-cyan-400 bg-cyan-100 text-cyan-800': type === 'info',
      'border border-yellow-400 bg-yellow-100 text-yellow-800': type === 'warn',
      'border border-red-400 bg-red-100 text-red-800': type === 'danger',
    })}
  >
    {children}
  </p>
);
