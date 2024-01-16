// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../src/slice/noteSlice';

const store = configureStore({
  reducer: {
    notes: notesReducer,
    // Add other reducers here if you have more slices
  },
});

// const {} = store.

export default store;
