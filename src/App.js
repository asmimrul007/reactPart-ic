import './App.css';
import NoteCreatingForm from "./components/NoteCreatingForm";
import NoteList from "./components/NoteList";



function App() {
   

  
  return (
    <div className = "App" >

   <NoteCreatingForm />

   < NoteList  />

   </div>
 );
}


export default App;