import React from 'react';
import {MessageItem} from './MessageItem';
import './MessagePanel.css';

export const MessagesPanel = (props) => {
    const messages = props.messages;
    return (
        <div className="message_panel">
            {messages.map((messageObj, index) => {
                    const listClassName = messageObj.sender === props.currentUser ? "message_item_wrapper_right" : "message_item_wrapper_left";
                    return (
                        <li key={index} className={listClassName}>
                            <MessageItem message={messageObj.message} time={messageObj.time} sender={messageObj.sender} />
                        </li>
                    )
                }
            )}
        </div>
    );
}