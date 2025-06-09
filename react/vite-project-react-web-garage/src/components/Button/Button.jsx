import React from 'react';

export const Button = ({callBack}) => {

    const onClickHandler = () => {
        console.log("Меня нажали")
        callBack()
    }


    return (
        <button onClick={onClickHandler}>Кнопка</button>
    );
};

