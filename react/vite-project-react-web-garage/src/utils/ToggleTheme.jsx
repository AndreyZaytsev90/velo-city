import React from 'react';
import {Button} from "../components/Button/Button.jsx";

export const ToggleTheme = ({isDarkMode, setIsDarkMode}) => {

    const handlerToggle = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div>
            <Button
                callBack={handlerToggle}
                label={"Переключение темы"}
                btnStyles={{color: 'black'}}>
            </Button>
        </div>
    );
};

