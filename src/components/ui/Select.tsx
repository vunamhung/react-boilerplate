import type { FC, ReactNode } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';
import { __ } from '@/utilities';

type Props = {
  control: any;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  children: ReactNode;
};

export const Select: FC<Props> = ({ control, rules, children, name, label, className }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className={clsx('relative', className)}>
          {label && (
            <label htmlFor={name}>
              {label} {rules?.required && <span className="text-red-500">*</span>}
            </label>
          )}
          <select className={clsx('form-field form-select', { '!border-red-500 focus:!border-red-300 focus:!ring-red-200': error })} {...field}>
            {children}
          </select>
          {error && (
            <span className={clsx('absolute -bottom-4 text-xs text-red-500', { 'right-0': label })}>
              {error?.message || __('This field is required')}
            </span>
          )}
        </div>
      )}
    />
  );
};
