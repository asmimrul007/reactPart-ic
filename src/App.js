import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const App = () => {

  const [counter, setCounter]= useState(0)

  
  //increase handler
  const increaseHandler = (value) =>{
    setCounter(counter + value) 
  }

  const decreaseHandler = (value) =>{
    setCounter(counter - value)
  }




  return (
    <div className="App" >
      <h2>
        The Value of the counter is {counter}
      </h2>
      <button onClick={() =>increaseHandler(1)}>Increased By 1 </button>
      <button onClick={() =>decreaseHandler(1)}>Decreased By 1</button><hr/>
      <button onClick={() =>increaseHandler(100)}>Increased By 100</button>
      <button onClick={() =>decreaseHandler(100)}>Decreased By 100</button>

    </div>
  )
}

export default App;
