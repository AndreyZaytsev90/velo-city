import React from 'react';
import './HomePage.css'
import {Button} from "../../components/Button/Button.jsx";
import Greeting from "../../components/Greeting/Greeting.jsx";
import Notification from "../../components/Notifocation/Notification.jsx";
import UserProfile from "../../components/UserProfile/UserProfile.jsx";
import TodoList from "../../components/TodoList/TodoList.jsx";

const HomePage = ({clicks, setClicks, isDarkMode, message}) => {


    const handleClick = () => {
        setClicks((prev) => prev + 1)
    }

    const viewAlertHandler = () => {
        alert(message)
    }

    const user = {
        name: 'Андрей',
        age: 35,
    }

    const todos = [
        {"id": 1, "text": "Изучить React", "done": false},
        {"id": 2, "text": "Сделать домашку", "done": true},
        {"id": 3, "text": "Погулять с собакой", "done": false}
    ]

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
            <Greeting isLoggedIn={true}/>
            <Greeting isLoggedIn={false}/>
            <Notification messages={[1, 2, 3]}/>
            <UserProfile user={user}/>
            <UserProfile user={''}/>
            <TodoList todos={todos}/>
        </>

    );
};

export default HomePage;