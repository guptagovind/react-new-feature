import React, {useEffect, useReducer, useState} from "react";
import notesReducer from "../reducers/notes";
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
  // const [notes, setNotes]= useState([]);
  const [notes, dispatch ] = useReducer(notesReducer,[]);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    if(notes){
      dispatch({type: 'POPULATE_NOTES', notes: notes});
      // setNotes(notes);
    }

    // condition []: makes useEffect to behave like componentDidMount
  }, [])

  useEffect(()=> {
    localStorage.setItem('notes', JSON.stringify(notes));
    // condition [someValue]: makes useEffect to behave like componentDidUpdate
  }, [notes])


  return (
    <NotesContext.Provider value={{notes, dispatch}}>
      <h1>Notes</h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  )
}

export { NoteApp as default };
