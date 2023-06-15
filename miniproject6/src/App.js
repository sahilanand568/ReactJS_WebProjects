import './App.css';
import Button from "./Components/Button";
import {useState} from 'react';
import {WiDegrees} from 'react-icons/wi';

let icon=<WiDegrees/>;
function App() {
  const [temp,setTemp]=useState(0);

  function handleClick(e){

  if(e.target.name === "+")
  setTemp(temp+1);
  else
  setTemp(temp-1);

  }

  const bgColor=((temp<=0) ? "#409be3" : "#ff3030e3");

  return (
    <div className="App">
      <p style={{backgroundColor:`${bgColor}`}}>{temp}{icon}C</p>
     <div className="button-box">
     <Button onClick={handleClick} sign={"+"}/>
     <Button onClick={handleClick} sign={"-"}/>
     </div>
    </div>
  );
}

export default App;
