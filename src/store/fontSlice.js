import { createSlice } from '@reduxjs/toolkit';

export const fontSlice = createSlice({
  name: 'font',
  initialState: { font: 'ubuntu' },
  reducers: {
    switchFont: (state, action) => {
      state.font = action.payload;
    },
  },
});

export const { actions, reducer } = fontSlice;
export const { switchFont } = actions;

export const selectFont = state => state.font.font;
