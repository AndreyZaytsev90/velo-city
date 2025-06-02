import React from 'react';
import './Header.css'

const Header = () => {

    const style = {
        color: 'blue',
        fontSize: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <header className="container" style={style}>
            <h1>Header</h1>
        </header>
    );
};

export default Header;