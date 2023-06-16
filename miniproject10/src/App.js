import {useEffect, useState,useRef} from 'react';
import './App.css';
import { BiSearch } from 'react-icons/bi';


function App() {
  const [state,setState]=useState({status:true,bgColor:"rgb(189, 32, 197)"});

  const inputRef=useRef();
  
  const searchStyle={
    color:"white",
    cursor:"pointer",
    fontSize:"2.5rem",
    position:"absolute",
    top:"2%",
    right:"2%"
  }

  useEffect(()=>{
    document.body.style.backgroundColor=state.bgColor;
    inputRef.current?.focus();
  },[state]);
  

  function handleClick(){

    if (state.status)
      setState({status:false,bgColor:"black"});
    else
      setState({status:true,bgColor:"rgb(189, 32, 197)"});
    }

  
  return (
    <div className="App" onClick={state.status ? null :handleClick}>
      {(state.status) ? <BiSearch style={searchStyle} onClick={handleClick}/> : <input ref={inputRef} type="search" placeholder="Search" id="inputBox" onClick={(e)=>{e.stopPropagation();}}/>}
    </div>
  );
}

export default App;
