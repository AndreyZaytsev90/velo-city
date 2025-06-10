import React from 'react';
import './Header.css'
import {Button} from "../Button/Button.jsx";

const Header = () => {

    const style = {
        color: 'blue',
        fontSize: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    }

    const foo3 = () => {
        alert("Clicked from Header")
    }

    return (
        <header className="container" style={style}>
            <h1>Header</h1>
            <Button callBack={foo3} label={"Регистрация"} btnStyles={{height: 20, color: 'red', background: "white"}}/>
            <Button callBack={foo3} label={"Авторизация"} btnStyles={{height: 20, color: 'white', background: "red"}}/>
        </header>
    );
};

export default Header;