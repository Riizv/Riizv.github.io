import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false, value: {} },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.value = action.payload;
    },
    closeModal: state => {
      state.isOpen = false;
    },
  },
});

export const { actions, reducer } = modalSlice;
export const { openModal, closeModal } = actions;

export const modalIsOpen = state => state.modal.isOpen;
