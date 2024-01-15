// src/components/NoteForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/notes-action';
import './NoteStyle.css';

const NoteForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [ description, setDescription] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newNote = { title, description};
        dispatch(addNote(newNote));
        setTitle('');
        setDescription('');
    }

  return (
    <form className='form-container' onSubmit={handleFormSubmit}>
      <label className='form-label'>Title:</label>
      <input className='form-input' type="text" value={title} 
      onChange={(e) => setTitle(e.target.value)} 
      />
      <label className='form-label'>Description:</label>
      <textarea className='form-textarea' value={description} 
      onChange={(e) => setDescription(e.target.value)} />
      <button className='form-button' type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
