import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const fontSlice = createSlice({
  name: 'font',
  initialState: { font: Cookies.get('font') || 'ubuntu' },
  reducers: {
    switchFont: (state, action) => {
      state.font = action.payload;
      Cookies.set('font', state.font);
    },
  },
});

export const { actions, reducer } = fontSlice;
export const { switchFont } = actions;

export const selectFont = state => state.font.font;
