
function Card({ data }) {

    return (
        <>
            <div className="card">
                <h2 className="name">{data.first_name}</h2>
                <div style={{padding:"2%"}}>
                <p><span>Last Name:</span>{data.last_name}</p>
                <p><span>Email:</span>{data.email}</p>
                <p><span>Phone:</span>{data.phone}</p>
                <p><span>User name:</span>{data.user_name}</p>
                </div>
            </div>
        </>)
}

export default Card;