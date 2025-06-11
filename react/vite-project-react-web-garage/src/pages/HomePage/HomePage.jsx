import React from 'react';
import './HomePage.css'
import {Button} from "../../components/Button/Button.jsx";

const HomePage = ({clicks, setClicks, isDarkMode, message}) => {


    const handleClick = () => {
        setClicks((prev) => prev + 1)
    }

    const viewAlertHandler = () => {
        alert(message)
    }

    return (
        <>
            <div className='home-page' style={isDarkMode ? {background: 'gray'} : {background: 'white'}}>
                {clicks}
                <div style={{width: 300, height: 300, background: "red"}} onClick={handleClick}></div>
            </div>
            <Button
                callBack={() => viewAlertHandler()}
                label={"Показать сообщение"}>
            </Button>
        </>

    );
};

export default HomePage;