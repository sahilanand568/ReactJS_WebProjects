import { useState, useEffect, useRef } from 'react';
import './App.css';
import Tracker from './Components/Tracker';



function App() {

  const[randomState,setRandomState]=useState(98);
  const [trackerState, setTrackerState] = useState({ ui: "55", ux: "33", datas: "53" });

  const inputRef = useRef();

  const data = [{
    initialState: `${trackerState.ui}`,
    bgColor: "#6464e2"
  }, {
    initialState: `${trackerState.ux}`,
    bgColor: "#16b516"
  }, {
    initialState: `${trackerState.datas}`,
    bgColor: "red"
  }];

  useEffect(() => {
    inputRef.current.focus();
    setInterval(()=>{
      setRandomState(Math.ceil(Math.random()*100))
    },1500);
  }, [])


  function handleChange(e) {
    if (e.target.value < 0 || e.target.value > 100 ) {
      alert("Please enter a number between 0 and 100");
      e.target.value = "";
    }
    if (e.target.id == 1)
      setTrackerState({ ...trackerState, ui: e.target.value==="" ? "0":e.target.value });
    if (e.target.id == 2)
      setTrackerState({ ...trackerState, ux: e.target.value==="" ? "0":e.target.value });
    if (e.target.id == 3)
      setTrackerState({ ...trackerState, datas: e.target.value==="" ? "0":e.target.value });
  }


  return (
    <div className="App">

      <h1>Progress Bar</h1>
      <h2>Project status:</h2>

      <div className='container-1'>
        <span>  UI status: <input id="1" type="number" ref={inputRef} onChange={handleChange} /> </span>
        <span> UX status: <input id="2" type="number" onChange={handleChange} /></span>
        <span> DATA status: <input id="3" type="number" onChange={handleChange} /></span>
      </div>
      <div className='container-2'>
        {data.map((val, idx) => {
          return (<Tracker key={idx} state={val.initialState} bgColor={val.bgColor} />)
        })}
        <Tracker state={randomState} bgColor={(randomState>50) ? "red":"#6464e2"}/>
      </div>
    </div>
  );
}

export default App;
