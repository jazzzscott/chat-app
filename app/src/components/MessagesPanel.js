import React from 'react';
import {MessageItem} from './MessageItem';

export const MessagesPanel = (props) => {
    const messages = props.messages;
    return (
        messages.map((message, index) => <MessageItem message={message} key={index} />)
    );
}