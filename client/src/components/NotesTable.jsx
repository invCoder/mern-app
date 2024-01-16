    // src/components/NoteTable.js
import React, { useEffect } from 'react';
import './NotesTableStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../slice/noteSlice';



const NotesTable = ({onEdit, onDelete }) => {
    const dispatch = useDispatch();
  const notes = useSelector((state=>state.notes?.notes ?? []));

  useEffect(()=>{
    //fetch notes when component mounts
    dispatch(fetchNotes());
  }, [dispatch]);

    
  return (
    <table>
      <thead>
        <tr>
          <th>Note</th>
          <th>Description</th>
          <th>Date</th>
          <th>Edit Action</th>
          <th>Delete Action</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note) => (
          <tr key={note._id}>
            <td>{note.title}</td>
            <td>{note.description}</td>
            <td>{new Date(note.date).toLocaleDateString()}</td>
            <td>
              <button onClick={() => onEdit(note)}>EDIT</button>
            </td>
            <td>
              <button onClick={() => onDelete(note._id)}>DELETE</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NotesTable;
