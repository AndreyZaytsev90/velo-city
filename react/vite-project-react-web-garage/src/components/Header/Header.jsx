import React from 'react';
import './Header.css'
import {Button} from "../Button/Button.jsx";
import {ToggleTheme} from "../../utils/ToggleTheme.jsx";

const Header = ({clicks, isDarkMode, setIsDarkMode}) => {

    const style = {
        color: isDarkMode? 'white': 'blue',
        background: isDarkMode ? 'black' : '#b76161',
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
            <h1>Header</h1>{clicks}
            <ToggleTheme isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            <Button callBack={foo3} label={"Регистрация"} btnStyles={{height: 20, color: 'red', background: "white"}}/>
            <Button callBack={foo3} label={"Авторизация"} btnStyles={{height: 20, color: 'white', background: "red"}}/>
        </header>
    );
};

export default Header;