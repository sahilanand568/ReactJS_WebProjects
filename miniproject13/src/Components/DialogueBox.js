import Button from './Button';
import { useEffect, useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { TfiFaceSad } from 'react-icons/tfi';

// let elem=document.querySelector(".App");

function DialogueBox() {


    const [state, setState] = useState({
        bgColor: "grey",
        title: "Hello",
        description: "Would you like to Subscribe?",
        icon: null
    })

    document.body.style.backgroundColor = state.bgColor;

    useEffect(()=>{
        document.querySelector(".App").style.transition="all 0.5s ease-in-out";
        document.querySelector(".App").classList.add("bounce");
       setTimeout(()=>{document.querySelector(".App").classList?.remove("bounce")},700); 
    },[state]);

    function handleClick(e) {

        if (e.target.innerText === "Cancel") {

            setState({
                ...state,
                title: "Please refresh the Page!",
                description: null,
                icon: null
            })
        }

        else if (e.target.innerText === "Subscribe") {
            setState({
                bgColor: "#a7d2a7",
                title: "Thank you,",
                description: "for your subscription :)",
                icon: <BsEmojiSmile className="icon-style" />
            });
        }

        else {
            setState({
                bgColor: "lightblue",
                title: "Sorry",
                description: "to see you go:(",
                icon: <TfiFaceSad className="icon-style" />
            })
        }
    }

    return (
        <>
            <div className="box-1">
                <div className="text">
                    <h1>{state.title}</h1>
                    <h2>{state.description}</h2>
                </div>
                <div style={{ color: state.bgColor }}>{state.icon}</div>
            </div>
            <div className="box-2">

                {(state.title === "Hello") && <><Button text="Cancel" className="cancel-button" onClick={handleClick} />
                    <Button text="Subscribe" className="Subscribe-button" onClick={handleClick} /></>}

                {(state.title === "Thank you,") && <Button text="Unsubscribe" className="Unsubscribe-button" onClick={handleClick} />}

                {(state.title === "Sorry") && <Button text="Subscribe" className="Subscribe-button addOn" onClick={handleClick} />}

            </div>

        </>)
}

export default DialogueBox;