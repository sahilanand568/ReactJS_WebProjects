function Comment({data}){
    
    return(
    <>
        {
            data?.map((val)=>{

            return ( <div>
                <p className="users-styleName" >{`${val.id}.${val.name}`}</p>
                <p>{val.body}</p>
                <p className="users-styleEmail">{val.email}</p>
                </div>
            )
            }
        )}
    </>);
}

export default Comment;