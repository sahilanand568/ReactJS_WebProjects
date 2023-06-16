import Card from './Components/Card';
import './App.css';
import {useState,useEffect, useRef} from 'react'; 
import Data from './Data/Data.json'



function App() {

  const [currentData,setCurrentData]=useState();
  const inputRef=useRef();

useEffect(()=>{
  inputRef.current.focus();
        setCurrentData(Data);
      },[])


function handleChange(e){
  if(e.target.value==="")
  setCurrentData(Data);
  else{
  setCurrentData(Data.filter((val)=>val.first_name.toLowerCase().includes(e.target.value.toLowerCase())))
}
}

  return (
    <div className="App">
    <h1 style={{fontSize:"2.5rem"}} >Search Filter App</h1>
    <input ref={inputRef} type="text" placeholder='Search by first name' onChange={handleChange}/>
    <div className="card-box">
      {currentData?.map((val)=>{
        console.log(val.first_name);
        return(<Card data={val}/>)
      })}
      </div>
    </div>
  ) 
}

export default App;
