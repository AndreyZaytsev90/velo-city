import React from 'react';

const Greeting = ({isLoggedIn}) => {
    /* if(isLoggedIn) {
         return <div>Greeting me</div>
     } else {
         return <div>Войдите в систему!</div>
     }*/
    return isLoggedIn
        ? <div>Greeting me</div>
        : <div>Войдите в систему!</div>

};

export default Greeting;