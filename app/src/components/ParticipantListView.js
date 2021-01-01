import React from 'react';
import { Link } from "react-router-dom";
import './ParticipantListView.css';


const ParticipantListView = (props) => {
    const conversations = props.conversations
    
    return (
        <div className="participant_wrapper">
            <ul>
                {conversations.map(({id, participants}) => 
                    <li key={`participant_${id}`}><Link to={`/conversations/${id}`}>{participants}</Link></li>
                )}
            </ul>
        </div>
    )
}

export default ParticipantListView;