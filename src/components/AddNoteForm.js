import React, {useState, useContext} from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
  const [title, setTitle]= useState('');
  const [body, setBody]= useState('');
  const { dispatch } = useContext(NotesContext)
  const position = useMousePosition();

  const addNote = e => {
    e.preventDefault();
    // setNotes([
    //   ...notes,
    //   {title, body}
    // ]);
    dispatch({
      type: 'ADD_NOTE',
      title,
      body
    })
    setTitle('');
    setBody('');
  }

  return (
    <div>
      <p>Add note {position.x}-{position.y}</p>
      <form onSubmit={addNote}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} type="text"/>
        <input placeholder="Body" value={body} onChange={e => setBody(e.target.value)} type="text"/>
        <button>add note</button>
      </form>
    </div>
  )
};

export { AddNoteForm as default }
