import React from "react";
import { useContext } from "react";
import { CreateNoteCtx } from "../context/Note";

const NoteLists = () => {
  const {notesStates,dispatch} = useContext(CreateNoteCtx);

  return (
    <div>
      <ul>
        {notesStates.notes.map((note) => (
          <li>
            <span>{note.title}</span>
            <button onClick={() => dispatch({type:'EDIT_NOTE',payload:{id:note.id}})}>Edit</button>
            <button onClick={() => dispatch({type:'REMOVE_NOTE',payload:{id:note.id}})}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteLists;
