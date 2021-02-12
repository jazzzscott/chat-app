import React from 'react';
import axios from 'axios';
import {MessagesPanel} from './MessagesPanel';
import {TextBox} from './TextBox';
import {Button} from './Button';
import './ChatRoom.css';

const ChatRoom = (props) => {

    const url = 'https://7r4e9bqtq9.execute-api.us-west-2.amazonaws.com/prod';

    var apigClientFactory = require('aws-api-gateway-client').default;
    var apigClient = apigClientFactory.newClient({invokeUrl: url, apiKey: 'jE0wgbjEBZ68L9jqCL0VS2vIi1o1Gych15oHY4jz'});
    
    const [messages, setMessages] = React.useState([]);
    const [currentMessage, setCurrentMessage] = React.useState({message: '', sender: '', time: null});

    React.useEffect(() => {
        if (messages.length === 0) {
            apigClient.invokeApi({id: `${props.userId}`}, '/conversations/{id}', 'GET', {}, {})
                .then(res => {
                    console.log('response', res)
                    const savedMessages = res.data.messages
                    savedMessages.forEach((msg) => {
                        setMessages(messages => [...messages, msg])
                    })
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }, [messages, props.userId]);

    function addMessage() {
        // Add a new message messages state & reset current message in text box
        const postMessage = currentMessage.message
        // axios.post(`${url}/conversations/${props.userId}`, postMessage)
        apigClient.invokeApi({id: `${props.userId}`}, '/conversations/{id}', 'POST', {}, postMessage)
            .then(() => {
                setMessages(messages => [...messages, currentMessage])
                setCurrentMessage({message: '', sender: '', time: null});
            })
    }

    const handleClick = () => {
        if (currentMessage.message.trim().length > 0) {
            addMessage();
        }
    }

    const onChange = (e) => {
        setCurrentMessage({'message': e.target.value, 'sender': props.currentUser, 'time': Date.now()});
    }

    const handleKeyPress = (e) => {
        if(e.key.toLowerCase() === "enter" && currentMessage.message.trim().length > 0) {
            addMessage();
        }
    }

    return (
        <div className="chat_window">
            {messages && <MessagesPanel messages={messages} currentUser={props.currentUser}/>}
            <div className="input_container_wrapper">
                <TextBox currentMessage={currentMessage.message} onChange={onChange} onKeyPress={handleKeyPress}/>
                <Button onClick={handleClick}/>
            </div>
        </div>
    )
}

export default ChatRoom;
