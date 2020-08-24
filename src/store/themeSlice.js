import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: Cookies.get('theme') || 'light' },
  reducers: {
    switchTheme: (state, action) => {
      state.theme = action.payload;
      Cookies.set('theme', state.theme);
    },
  },
});

export const { actions, reducer } = themeSlice;
export const { switchTheme } = actions;

export const selectTheme = state => state.theme.theme;
