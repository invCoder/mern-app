// src/components/NoteForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/notes-action';
import  DatePicker  from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import './NoteStyle.css';

const NoteForm = () => {
    const dispatch = useDispatch();
    const [note, setNote] = useState({title : "", description: "", date: new Date()});

    // const [ description, setDescription] = useState('');

    const handleChange = (e) => {
      const { name, value } = e.target;
       setNote((prevNote) =>({
        ...prevNote,
        [name]: value,
       }));
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote(note));
        setNote({ title: "", description: "", date:""});

    }

    const handleDateChange = (selectedDate) => {
      if(new Date(selectedDate) <= new Date()){
        console.log('selectedDate',selectedDate)
        const date = new Date(selectedDate);
        //used to format the date.
        handleChange({target: {name:'date', value: `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`}});
      }
    }

  return (
    <form className='form-container' onSubmit={handleFormSubmit}>
      <label className='form-label'>Title:</label>
      <input className='form-input' type="text" 
      name="title" value={note.title} 
      onChange={handleChange} 
      />
      <label className='form-label'>Description:</label>
      <textarea className='form-textarea' type="text" 
      name="description" value={note.description} 
      onChange={handleChange} />
      <label className='form-date'>
        Date:
        <DatePicker
        selectedDate={note.date}
        value={note.date}
        onChange={handleDateChange} 
        dateFormate='mm-dd-yyyy'
        className='datePicker'
        />

      </label>
      <button className='form-button' 
      type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
