import axios from 'axios';
import slugify from 'slugify';

export * from './i18n';
export * from './http';

export const http = axios.create({ baseURL: '' });

export function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

export function makeSlug(string: string | undefined) {
  if (!string) {
    return '';
  }
  return slugify(string, { lower: true, trim: true, remove: /[*+=~.,()/\\<>%`'"#!:;?@]/g });
}

export function convertType(value: string) {
  const maps: { [index: string]: any } = { NaN, null: null, undefined, Infinity, '-Infinity': -Infinity };
  return value in maps ? maps[value] : value;
}
