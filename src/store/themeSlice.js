import { createSlice, configureStore } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark',
  reducers: {
    // increment: state => state + 1,
    // decrement: state => state - 1,
    switchTheme: (state, action) => (state = action.payload),
  },
});

export const { actions, reducer } = themeSlice;
export const { switchTheme } = actions;

export const store = configureStore({
  reducer: themeSlice.reducer,
});
