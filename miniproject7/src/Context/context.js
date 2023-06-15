import {useState,createContext} from 'react';

const BlogContext=createContext();

const BlogProvider=({children})=>{

    const [state,setState]=useState("Light");

    function handleClick(e){
        if(state==="Light")
        setState("Dark");
        else
        setState("Light");
    }
    
    return(
        <BlogContext.Provider value={{state,handleClick}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;
export {BlogProvider};