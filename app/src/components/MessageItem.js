import React from 'react';


export const MessageItem = (props) => {
    return(
        <li key={props.key} className="message_box_wrapper">
          <div className="text_wrapper">
              <div className="text">{props.message}</div>
          </div>
        </li>
    );
}
