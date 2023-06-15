

export default function Button({naam,icon,onClick}){
//    console.log(onClick);
    return(
        <button onClick={onClick} name={naam}>{icon}{naam}</button>
    )
}