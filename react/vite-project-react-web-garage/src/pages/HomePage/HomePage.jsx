import React from 'react';
import './HomePage.css'

const HomePage = ({clicks, setClicks, isDarkMode}) => {


    const handleClick = () => {
        setClicks((prev) => prev + 1)
    }

    return (
        <div className='home-page' style={isDarkMode ? {background: 'gray'}: {background: 'white'}}>
            {clicks}
            <div style={{width: 300, height: 300, background: "red"}} onClick={handleClick}></div>
        </div>
    );
};

export default HomePage;