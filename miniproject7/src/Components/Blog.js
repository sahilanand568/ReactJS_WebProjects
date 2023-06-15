import { useContext } from "react";
import BlogContext from "../Context/context";

function Blog(){
   
    const ans=useContext(BlogContext);
    const buttonStyleLight={
        backgroundColor:"beige",
        color:"black"
    }
    const buttonStyleDark={
        backgroundColor:"black",
        color:"white"
    }
   return(
    <div className="container" style={(ans.state==="Light") ? buttonStyleLight:buttonStyleDark}>
   <button onClick={ans.handleClick} style={(ans.state==="Light") ? buttonStyleDark:buttonStyleLight}>{ans.state}</button>
   <h1>My Blog with {ans.state} Theme</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fuga. Autem ullam eaque voluptas. Ipsam, libero ipsa culpa nam et voluptatibus. Deserunt nam nesciunt voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iste, dolores dolor ea saepe deserunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
   )
   }
export default Blog;