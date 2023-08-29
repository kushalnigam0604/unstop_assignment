import { createSlice } from '@reduxjs/toolkit';

const formPopup = createSlice({
  name: 'popup',
  initialState: {
    value: false,
  },
  reducers: {
    openLoginForm: (state) => {
      state.value = true;
    },
    closeLoginForm: (state) => {
      state.value = false;
    },
  },
});

export const { openLoginForm, closeLoginForm } = formPopup.actions;
export default formPopup.reducer;