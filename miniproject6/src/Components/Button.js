function Button({onClick,sign}){

    return(
        <button className="style-button" onClick={onClick} name={sign}>{sign}</button>
    )
}

export default Button;