
function Button({ name,color }) {

    function handleClick(e){
       let body=document.querySelector("body");
       let elem=document.querySelector("p");
       elem.style.color=randomColorGenerator()
       body.style.backgroundColor=randomColorGenerator();
    e.target.style.backgroundColor=randomColorGenerator();
    }

    return <button onClick={handleClick} style={{color:`${color}`,backgroundColor:`${randomColorGenerator()}`}}>{name}</button>
}

function randomColorGenerator(){
    let str="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=str[Math.floor(Math.random()*16)]
    }
    return color;
}

export default Button;