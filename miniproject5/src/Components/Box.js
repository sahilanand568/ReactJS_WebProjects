
function Box({ text, colour, id, onClick }) {

    const inlineStyling = {
        backgroundColor: `${colour}`,
        border: `2px solid ${colour}`
    }

    return (
        <>
            <div className="box" id={id} style={inlineStyling} >
                <span>{text}</span>
                <span className="cross" value={`${id}`} onClick={onClick}>x</span>
            </div>
        </>
    )

}
export default Box;