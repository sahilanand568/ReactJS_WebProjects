import { useEffect } from "react";
import './App.css';
import Box from "./Components/Box";

const data = [
  {
    id: "1",
    text: "Complete all fields",
    color: "rgba(255,0,0,0.35)"
  },
  {
    id: "2",
    text: "Successful Login",
    color: "rgba(0,255,0,0.35)"
  },
  {
    id: "3",
    text: "Hide Alert after delay",
    color: "rgba(0,0,255,0.35)"
  }
]

function App() {

  function handleClick(e) {
    e.target.parentElement.style.transform = "scale(0)";
  }

  useEffect(() => {
    setTimeout(() => {
      document.getElementById(3).style.transform = "scale(0)";
    }, 3000)
  },[])

  return (
    <>
      {
        data.map((val) => {
          return (<Box text={val.text} colour={val.color} id={val.id} onClick={handleClick} />)
        })
      }
    </>
  );
}

export default App;
