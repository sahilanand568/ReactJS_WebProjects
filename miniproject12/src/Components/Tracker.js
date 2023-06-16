
function Tracker({state,bgColor}){

    const thumbStyling={
        width:`${state}%`,
        backgroundColor:`${bgColor}`,
        color:"white",
        borderRadius:"2vw",
        paddingLeft:"1%",
        transition:"width 1s ease-in-out"
    }
    return(
    <>
    <div className="tracker">
        <div style={thumbStyling} className="thumb" >{state}%</div>
    </div>

    </>)
}

export default Tracker;
