import {useState} from 'react';
import './App.css';

function App() {
  const [state,setState]=useState(0);
  const[color,setColor]=useState("aqua");

  function handleInput(e){
    setState(e.target.value);
    setColor("aqua");
    if(e.target.value >=30 && e.target.value<60)
    setColor("orange")
    if(e.target.value >=60 && e.target.value<80)
    setColor("green")
    if(e.target.value>=80)
    setColor("yellow")
  }

  const styling={width:`${Math.ceil(state*3.5)}px`,height:`${Math.ceil(state*3.5)}px`,backgroundColor:color}

  return (
    <div className="App">
      <h1>Slide to Grow</h1>
      <input className="range-button" type="range" value={state} onInput={handleInput} />
      <p className="paraBox" style={styling}>{state}</p>
    </div>
  );
}

export default App;
