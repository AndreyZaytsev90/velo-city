import React, {useEffect, useState} from 'react';

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(resp => setUsers(resp))
    }, [])

    return (
        <ul>
            {users.map((user, index) => {
                return <li key={index}>
                    {user.name}
                </li>
            })}
        </ul>
    );
};

export default UserList;