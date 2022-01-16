const User = ({user, getUserById}) => {

    const {id, name, email} = user;

    return (
        <div>
            {id}.  {name} ____ {email}
            <button onClick={() => getUserById(id)}>Details</button>
        </div>
    );
};

export default User;