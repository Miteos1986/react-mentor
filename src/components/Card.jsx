const Card = ({name, email, phone, address }) => {
    return (
        <div>
            <h2> Name: {name} </h2>
            <hr />
            <div>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address.city}, {address.street} </p>
            </div>
        </div>
    )
}

export default Card;