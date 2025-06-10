import React from 'react';

export const Button = ({callBack, label, btnStyles}) => {

    const onClickHandler = () => {
        console.log("Меня нажали")
        callBack()
    }


    return (
        <button style={btnStyles} onClick={onClickHandler}>{label || "Кнопка"}</button>
    );
};

