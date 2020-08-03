import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'light' },
  reducers: {
    switchTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { actions, reducer } = themeSlice;
export const { switchTheme } = actions;

export const selectTheme = state => state.theme.theme;
