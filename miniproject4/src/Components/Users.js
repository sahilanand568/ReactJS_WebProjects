function Users({data}){
console.log(data);
    return(
         <>
           {
            data?.map((val)=>{

            return ( <>
                <p className="users-styleName">{`${val.id}.${val.name}`}</p>
                <p className="users-styleEmail">{val.email}</p>
                </>
            )
            }
        )}
        </>
    );
   
}

export default Users;