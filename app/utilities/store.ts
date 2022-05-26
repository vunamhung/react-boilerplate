import { proxy } from 'valtio';

export const store = proxy({
  keyword: '',
  setKeyword: (payload: string) => {
    store.keyword = payload;
  },
});
