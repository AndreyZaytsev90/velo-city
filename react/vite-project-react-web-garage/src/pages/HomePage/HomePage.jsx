import React from 'react';
import './HomePage.css'
import {Button} from "../../components/Button/Button.jsx";

const HomePage = () => {

    const foo = () => {
        alert("меня нажали")
    }

    return (
        <div className='home-page'>
            <h2>Домашняя страница</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorum iste maxime minima nulla optio quae reiciendis reprehenderit sint vel?</p>
            <Button callBack={foo}/>
        </div>
    );
};

export default HomePage;