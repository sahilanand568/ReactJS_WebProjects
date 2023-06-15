import { useState,useEffect } from 'react';
import { BiUser, BiCommentDetail } from 'react-icons/bi';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import './App.css';
import Button from './Components/Button';
import Posts from './Components/Posts';
import Users from './Components/Users';
import Comment from './Components/Comment';


function App() {

  const [testimonials, setTestimonials] = useState("");
  const [data,setData]=useState();

  function handleClick(e){
    setTestimonials(e.currentTarget.name);
  }

  function footSection(){
    if(testimonials==="Posts"){
      return(<Posts data={data}/>);
    }
    else if(testimonials==="Users"){
      return(<Users data={data}/>);
    }
    else if(testimonials==="Comments"){
      return(<Comment data={data}/>);
    }
    
  }

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
    .then(response => response.json())
    .then(json =>setData(json))
  },[testimonials])
  
  

  return (
    <>
      <h1>Testimonials</h1>
      <div className="App">
        <Button naam={"Posts"} icon={<BiUser className="icon-design" />} onClick={handleClick}/>
        <Button naam={"Users"} icon={<BsFillFileEarmarkPostFill className="icon-design" />} onClick={handleClick}/>
        <Button naam={"Comments"} icon={<BiCommentDetail className="icon-design" />} onClick={handleClick}/>
      </div>
      {(testimonials === "") ? <p className="foot-section">Select from Above!</p> : <p className="foot-section">{testimonials}</p>}
     <div>
       {/* {(testimonials==="Posts") ? <Posts/>: ((testimonials==="Users") ? <Users/> : <Comment/>)} */}
       {footSection()}
     </div>
    </>
  );
}

export default App;
