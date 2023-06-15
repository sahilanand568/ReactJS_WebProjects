import { useReducer } from "react";
import "./App.css";

function App() {

// Using UseState Hook

  // const [name, setName] = useState("Name");
  // const [date, setDate] = useState("DoB");

  
  // function changeName(e){
  //  if(e.target.value ===""){
  //    setName("Name")
  // }
  // else{setName(e.target.value)}
  // }
  
  // function changeData(e){
    //   return e.target.value;
  // }
  
// Using UseReducer Hook

  const [ state,dispatch]=useReducer(reducer,{name:"Name",date:"DoB"});
 
  function reducer(state,{type,event}){
   
    switch(type){
    
      case "changeName":{
        if(event === "")
        return {...state,name:"Name"};
        else
        return {...state,name:event};
        
      }
      case "changeDate":{
        if(event === "")
        return {...state,date:"DoB"};
        else
        return {...state,date:event};
      }
      default:{return state;}

    }
    
  }

  return (
    <>
      <div className="main-Box">

        <div className="upper-Box">
          <p className="case">{state.name}</p>
          <p >{state.date}</p>
          <p className="body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, animi velit? Placeat incidunt enim molestiae nihil excepturi deserunt iste sapiente obcaecati, cupiditate consequuntur distinctio, atque iusto tenetur rerum iure quaerat.</p>

        </div>

        <div className="bottom-Box">
          <input type="date" name="" className="date" onChange={(e)=>{dispatch({type:"changeDate",event:e.target.value})}} /* onChange={(e)=>{setDate(e.target.value)}} *//>
          <input type="text" name="" onChange={(e)=>{dispatch({type:"changeName",event:e.target.value})}}/>
        </div>

      </div>

    </>
  )
}

export default App;