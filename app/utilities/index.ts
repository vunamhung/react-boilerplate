import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export * from './http';

export function ct(value: any) {
  const maps: { [index: string]: any } = { true: true, false: false, NaN: NaN, null: null, undefined, Infinity: Infinity, '-Infinity': -Infinity };
  return value in maps ? maps[value] : value;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
