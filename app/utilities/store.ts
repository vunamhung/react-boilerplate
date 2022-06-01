import { proxy } from 'valtio';

export const store = proxy({
  keyword: '',
});

export const actions = {
  setKeyword: (payload: string) => {
    store.keyword = payload;
  },
};
