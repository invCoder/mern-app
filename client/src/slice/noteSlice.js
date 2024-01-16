// src/features/notesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Async thunk to fetch notes
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await axios.get('http://localhost:5000/api/notes');
  return response.data;
});

// Async thunk to add a note
export const addNote = createAsyncThunk('notes/addNote', async (note) => {
  const response = await axios.post('http://localhost:5000/api/notes', note);
  return response.data;
});

// Create a slice
const notesSlice = createSlice({
  name: 'notes_slice',
  initialState: { notes: [] },
  reducers: {}, // You can add synchronous actions here if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.notes = action.payload;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.notes.push(action.payload);
      });
  },
});

//  const {noteReducer: }  = notesSlice.actions;

// Export the reducer
export default notesSlice.reducer;
