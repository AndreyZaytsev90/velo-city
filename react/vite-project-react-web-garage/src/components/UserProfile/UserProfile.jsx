import React from 'react';

const UserProfile = ({user}) => {
    return user ? (
        <div>
            <h1>Имя пользователя: {user.name}</h1>
            {user.age > 18 ? <h1>Возраст: {user.age} лет</h1>: ''}
        </div>
    ) : "Пользователь не найден"
};

export default UserProfile;