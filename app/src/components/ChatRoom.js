import React from 'react';
import {MessagesPanel} from './MessagesPanel';
import {TextBox} from './TextBox';
import {Button} from './Button';
import './ChatRoom.css';

const ChatRoom = () => {
    const [messages, setMessages] = React.useState([]);
    const [currentMessage, setCurrentMessage] = React.useState('');

    function addMessage() {
        // Add a new message to MessagePanel component & reset current message in text box
        setMessages([...messages, currentMessage])
        setCurrentMessage('');
    }

    const handleClick = () => {
        if (currentMessage.trim().length > 0) {
            addMessage();
        }
    }

    const onChange = (e) => {
        setCurrentMessage(e.target.value);
    }

    const handleKeyPress = (e) => {
        if(e.key.toLowerCase() === "enter" && currentMessage.trim().length > 0) {
            addMessage();
        }
    }

    return (
        <div className="chat_window">
            <MessagesPanel messages={messages}/>
            <div className="input_container_wrapper">
                <TextBox currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} onChange={onChange} onKeyPress={handleKeyPress}/>
                <Button onClick={handleClick}/>
            </div>
        </div>
    )
}

export default ChatRoom;
