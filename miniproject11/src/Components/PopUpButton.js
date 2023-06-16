// import {state} from '../App/state';

function PopUpButton({bgColor,title,statement,onClick}){

  

    return(
    <div className="button-style" style={{backgroundColor:bgColor}}>
    <div>
     <p>{title}</p>
     <p>{statement}</p>
    </div>
     <p onClick={onClick} style={{cursor:"pointer"}}>X</p>
    </div>)
}

export default PopUpButton;