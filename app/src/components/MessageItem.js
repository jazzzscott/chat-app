import React from 'react';
import './MessageItem.css';

export const MessageItem = (props) => {
    return(
        <li key={props.key} className="message_box_list_wrapper">
          <div className="text_wrapper">
              <div className="text">{props.message}</div>
          </div>
        </li>
    );
}
