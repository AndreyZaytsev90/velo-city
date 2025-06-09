import React from 'react';
import './HomePage.css'
import {Button} from "../../components/Button/Button.jsx";
import UserList from "../../components/UserList/UserList.jsx";
const programmer = new URL('../../assets/programmer.jpg', import.meta.url).href;

const HomePage = () => {

    const foo = () => {
        alert("меня нажали")
    }

    return (
        <div className='home-page'>
            <h2>Домашняя страница</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorum iste maxime minima nulla
                optio quae reiciendis reprehenderit sint vel?</p>
            <Button callBack={foo}/>
            <UserList/>
            <img src={programmer} alt="programmer"/>
        </div>
    );
};

export default HomePage;