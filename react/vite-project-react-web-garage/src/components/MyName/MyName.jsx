import React from 'react';
import './MyName.css'
import {EmailCheck} from "../EmailCheck/EmailCheck.jsx";


export const MyName = ({name}) => {

    const cats = ['cat', 'cat1', 'cat2', 'cat3'];
    const [condition, setCondition] = React.useState(false);

    return (
        <>
            <div>
                <button type={"button"} onClick={() => setCondition(!condition)}>Condition</button>
                <h2>My name is {name}</h2>
                {condition && <EmailCheck/>}
                <ul>
                    {cats.map((cat, index) => (
                        <li key={index}>
                            {cat}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
