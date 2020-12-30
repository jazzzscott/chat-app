import React from 'react';
import {MessageItem} from './MessageItem';
import './MessagePanel.css';

export const MessagesPanel = (props) => {
    const messages = props.messages;
    return (
        <div className="message_panel">
            {messages.map((message, index) => 
                <MessageItem message={message} key={index} />
            )}
        </div>
    );
}