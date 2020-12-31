import React from 'react';
import './MessageItem.css';

export const MessageItem = (props) => {
    return(
        <div className="text_wrapper">
            <div className="text">{props.message}</div>
        </div>
    );
}
