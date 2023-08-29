import { configureStore } from '@reduxjs/toolkit';
import FormPopupSlice from './slices/FormPopupSlice';

const store = configureStore({
  reducer: {
    popup: FormPopupSlice,
  },
});

export default store;