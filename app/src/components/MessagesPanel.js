import React from 'react';
import {MessageItem} from './MessageItem';
import './MessagePanel.css';

export const MessagesPanel = (props) => {
    const messages = props.messages;
    return (
        <div className="message_panel">
            {messages.map((messageObj, index) =>
                <MessageItem message={messageObj.message} time={messageObj.time} sender={messageObj.sender} listKey={index} />
            )}
        </div>
    );
}