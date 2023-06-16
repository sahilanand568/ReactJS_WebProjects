import './App.css';
import { useState,useEffect } from 'react';
import PopUpButton from './Components/PopUpButton';

function App() {

  const [state, setState] = useState(false);
  
  
  const [newState,setNewState]=useState(false);


  useEffect(() => {

    setTimeout(() => {
      setState(true);
    }, 3000)

  },[])

  function buttonClick(){
    if(state){
      alert("Close TimeOut PopUp")
      return;
    }
    else{
    setNewState(true);
  }
  }

  function crossClick(e){
    let elem=e.target.parentElement?.firstChild?.firstChild?.innerText;
    // console.log(elem.toString());
    if(elem !== "Time out PopUp" && state){
      alert("Close TimeOut PopUp");
      return;
    }
    else if(elem === "Time out PopUp"){
      setState(false)
    }
    else
    setNewState(false);
  }

  return (
    <div className="App">
      <h1>Magic Popup App</h1>
      <button onClick={buttonClick}>Click me</button>
      {state && <PopUpButton bgColor="rgba(255, 165, 0,0.35)" title="Time out PopUp" statement="This popup was trigerred by a delay" onClick={crossClick} />}
      {newState && <PopUpButton bgColor="rgba(61, 61, 247,0.25)" title="Trigerred Popup" statement="This popup was trigerred by you" onClick={crossClick} />}
    </div>
  )
  }

  export default App;