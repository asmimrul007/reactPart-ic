import { createContext, useReducer } from "react";
import { NoteReducer } from "../reducer/noteReducer";

export const CreateNoteCtx = createContext();



const initState ={
  noteTitle : '',
  notes :[],
  editableNotes: null,
  editMode : false

}	
const NoteProvider = ({children}) => {

  

const [notesStates, dispatch]= useReducer(NoteReducer, initState)



  return (
    
    <CreateNoteCtx.Provider value={{notesStates,dispatch}}>
      {children}
    </CreateNoteCtx.Provider>
  );


}
export default NoteProvider;
