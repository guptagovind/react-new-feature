import React, { useEffect, useContext } from "react";
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';



const Note = ({note, removeNote}) => {

  /*useEffect(() => {
    console.log('Setting up effect!');

    // return function make useEffect to behave like componentDidUnmount.
    return () => {
      console.log('Cleaning up effect');
    }
  }, [])*/

  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  return (
    <div key={note.title}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{position.x},{position.y}</p>
      <button onClick={() => dispatch({
        type: 'REMOVE_NOTE',
        title: note.title
      })}>X</button>
    </div>
  );
}

export { Note as default };
