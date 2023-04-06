import React from 'react'
import { useContext } from 'react'
import { CreateNoteCtx } from '../context/Note'

const NoteCreatingForm = () => {

    const {notesStates,dispatch} = useContext(CreateNoteCtx)
  return (
    <div>
        <form
        onSubmit={(event) => {
          event.preventDefault()
          notesStates.editMode ? dispatch({type: 'UPDATE_NOTE', payload:{title: notesStates.noteTitle}}) : dispatch({type:'CREATE_NOTE',payload:{title:notesStates.noteTitle}});
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Please enter a valid note"
          value={notesStates.noteTitle}
          onChange={(e) => dispatch({type:'CHANGE_TITLE', payload:{title:e.target.value}})}
        />

        <button type="submit">{notesStates.editMode ? "Update note" : "Add Note"}</button>
      </form>
      
    </div>
  )
}

export default NoteCreatingForm
