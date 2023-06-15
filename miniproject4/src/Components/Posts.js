
function Posts({data}){
    // console.log(data);
    return(
        <>
        {
            data?.map((val)=>{

            return ( <div className="posts-style">
                <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>{val.title}</p>
                <p  style={{fontSize:"0.9rem"}}>{val.body}</p>
                </div>
            )
            }
        )}
        </>
    );
}

export default Posts;