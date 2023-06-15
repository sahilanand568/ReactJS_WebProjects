import { AiOutlineSmile, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import dogPhoto from './Photos/dog.jpg'
import './App.css';
import { useState } from 'react';



function App() {

  const [state, setState] = useState(0);

  function handleLikes() {
    if (state === 0)
      setState(1);
    else
      setState(0);
  }

  return (
    <div className="container">

      <div className="top-box">
        <h1>Double Click To Like</h1>
        <p>Likes {state}</p>
      </div>

      <div className="bottom-box">
        <AiOutlineSmile />CuteDogs
      </div>

      <div className="bottom-midsection">
        <img src={dogPhoto} alt='Dog Pic' className="dogImage" onDoubleClick={handleLikes} />
      </div>

      <div className="bottom-footsection">
        <BsChatDots />
        <div id="heart"  onClick={handleLikes}>
          {(state === 1) ? <AiFillHeart className="heart-filled"/> : <AiOutlineHeart className="heart-unfilled"/>}
          {/* {(state === 1) ? (document.getElementById("heart").classList.add("heart-filled")) : (document.getElementById("heart")?.classList?.remove("heart-filled"))} */}
        </div>
      </div>

    </div>
  );
}

export default App;
