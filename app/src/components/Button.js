import React from 'react';
import './Button.css';


export const Button = (props) => {
    return (
        <div className="send_button"
            onClick={props.onClick}>
            <div className="button_text">Send</div>
        </div>
    )
}
