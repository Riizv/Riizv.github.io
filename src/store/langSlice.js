import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const langSlice = createSlice({
  name: 'lang',
  initialState: { lang: Cookies.get('lang') },
  reducers: {
    switchLang: (state, action) => {
      state.lang = action.payload;
      Cookies.set('lang', state.lang);
    },
  },
});

export const { actions, reducer } = langSlice;
export const { switchLang } = actions;

export const selectLang = state => state.lang.lang;
