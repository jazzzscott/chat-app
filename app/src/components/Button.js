import React from 'react';


export const Button = (props) => {
    return (
        <div className="send_button"
            onClick={props.onClick}>
            <div className="text">Send</div>
        </div>
    )
}
