import { configureStore } from '@reduxjs/toolkit';

import { themeSlice } from './themeSlice';
import { fontSlice } from './fontSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    font: fontSlice.reducer,
  },
});
