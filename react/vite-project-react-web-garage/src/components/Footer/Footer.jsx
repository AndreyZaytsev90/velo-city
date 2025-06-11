import React from 'react';
import './Footer.css'

const Footer = ({ isDarkMode }) => {
    return (
        <footer className={isDarkMode ? "container1": "container2"}>
           <p>Подвал сайта</p>
        </footer>
    );
};

export default Footer;