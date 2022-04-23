import Cookie from 'js-cookie';
import { convertType } from '~/utilities';

export function useToken() {
  const getToken = convertType(Cookie.get('token') as string) ? Cookie.get('token') : undefined;
  const setToken = (token: string) => Cookie.set('token', token, { path: '/', secure: process.env.NODE_ENV !== 'dev', sameSite: 'strict' });
  return [getToken, setToken];
}
