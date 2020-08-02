import { createSlice, configureStore } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: 'dark' },
  reducers: {
    // increment: state => state + 1,
    // decrement: state => state - 1,
    switchTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { actions, reducer } = themeSlice;
export const { switchTheme } = actions;

export const selectTheme = state => state.theme.value;

export const store = configureStore({
  reducer: { theme: themeSlice.reducer }
});
