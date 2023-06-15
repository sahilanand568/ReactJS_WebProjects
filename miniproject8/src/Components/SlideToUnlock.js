import { useState } from 'react';
import { AiFillUnlock } from 'react-icons/ai';
import HomePic from '../Images/home.jpg'
import MoonPic from '../Images/moon.jpg'



function SlideToUnlock() {

    const initialState={
    title: "Unlock Screen",
    color: "white",
    bgImg: `url(${MoonPic})`}

    const [state, setState] = useState(initialState);

    const [switchState, setSwitchState] = useState(true);

    function handleValue(e) {
        console.log(e.target.value);
        if (e.target.value == 100) {
            setState({ title: "Lock Screen", color: "black", bgImg: `url(${HomePic})`})
            setSwitchState(false);
        }
        else {
            setState(initialState);
            setSwitchState(true);
        }
    }

    function handleClick(){
        setState(initialState);
        setSwitchState(true);
    }


    return (
        <div className="locked-screen" style={{background:`${state.bgImg} center/cover no-repeat`,color:state.color }}>
            <h1>{state.title}</h1>
            {(switchState) ? <input className="test" type="range" onInput={handleValue} /> : <AiFillUnlock className="unlock-button" onClick={handleClick} />}
        </div>)
}

export default SlideToUnlock;