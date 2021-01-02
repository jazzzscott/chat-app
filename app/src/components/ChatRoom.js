import React from 'react';
import axios from 'axios';
import {MessagesPanel} from './MessagesPanel';
import {TextBox} from './TextBox';
import {Button} from './Button';
import './ChatRoom.css';

const ChatRoom = (props) => {

    const url = 'https://7r4e9bqtq9.execute-api.us-west-2.amazonaws.com/prod';

    const [messages, setMessages] = React.useState([]);
    const [currentMessage, setCurrentMessage] = React.useState({message: '', sender: '', time: null});

    React.useEffect(() => {
        if (messages.length === 0) {
            axios.get(`${url}/conversations/${props.userId}`).then(res => {
                const savedMessages = res.data.messages
                savedMessages.forEach((msg) => {
                    console.log(msg)
                    setMessages([...messages, msg])
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }, [messages, props.userId]);

    function addMessage() {
        // Add a new message messages state & reset current message in text box
        setMessages([...messages, currentMessage])
        setCurrentMessage({message: '', sender: '', time: null});
    }

    const handleClick = () => {
        if (currentMessage.message.trim().length > 0) {
            addMessage();
        }
    }

    const onChange = (e) => {
        setCurrentMessage({'message': e.target.value, 'sender': '', 'time': Date.now()});
    }

    const handleKeyPress = (e) => {
        if(e.key.toLowerCase() === "enter" && currentMessage.message.trim().length > 0) {
            addMessage();
        }
    }

    return (
        <div className="chat_window">
            {messages && <MessagesPanel messages={messages}/>}
            <div className="input_container_wrapper">
                <TextBox currentMessage={currentMessage.message} onChange={onChange} onKeyPress={handleKeyPress}/>
                <Button onClick={handleClick}/>
            </div>
        </div>
    )
}

export default ChatRoom;
