import React from 'react';

const Notification = ({messages}) => {
    return (
        <div>
            {messages.length > 0 && <div>У вас {messages.length} новых сообщения</div>}
        </div>
    );
};

export default Notification;