import React from 'react';
import {MessageItem} from './MessageItem';
import './MessagePanel.css';

export const MessagesPanel = (props) => {
    const messages = props.messages;
    return (
        <div className="message_panel">
            {messages.map((messageObj, index) =>
                <li key={index} className="message_item_wrapper">
                    <MessageItem message={messageObj.message} time={messageObj.time} sender={messageObj.sender} />
                </li>
            )}
        </div>
    );
}