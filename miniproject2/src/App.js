import Button from "./Button";
import './App.css';

const data = [
  {
    name: "Click Me"
  },
  {
    name: "Me Too"
  },
  {
    name: "Me Three"
  },
  {
    name: "Don't Click me"
  }
]


function App() {
  return (
    <div className="container" >
      <p>Randomize Color</p>
      <div className="box">
      {
        data.map((val,index) => {
          return ((index!=data.length-1)?<Button name={val.name} color={"white"}/>:<Button name={val.name} color={"black"}/>)
        })
      }
      </div>
    </div>
  );
}

export default App;
