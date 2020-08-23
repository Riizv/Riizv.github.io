import { configureStore } from '@reduxjs/toolkit';

import { themeSlice } from './themeSlice';
import { fontSlice } from './fontSlice';
import { langSlice } from './langSlice';
import { modalSlice } from './modalSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    font: fontSlice.reducer,
    lang: langSlice.reducer,
    modal: modalSlice.reducer,
  },
});
