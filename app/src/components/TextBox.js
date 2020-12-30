import React from 'react';
import './TextBox.css';

export const TextBox = (props) => {
    return(
        <div className="text_box_wrapper">
            <input id="msg_input" 
                className="message_input" 
                placeholder="Type message here..."
                value={props.currentMessage}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}/> 
        </div>
    );
}
