import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
  name: 'lang',
  initialState: { lang: 'pl' },
  reducers: {
    switchLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { actions, reducer } = langSlice;
export const { switchLang } = actions;

export const selectLang = state => state.lang.lang;
