import { http } from '~/utilities';
import queryString from 'query-string';

//prettier-ignore
export const fetcher = (url: string) => http(url).then((res) => res.data).catch(({ response }) => response.data);

function makeKey(path: string, params?: Record<string, any>) {
  return params ? `${path}?${queryString.stringify(params)}` : `${path}`;
}
