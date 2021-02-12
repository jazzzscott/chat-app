import React from 'react';
import { Link } from "react-router-dom";
import './ParticipantListView.css';


const ParticipantListView = (props) => {
    const conversations = props.conversations

    return (
        <div className="participant_wrapper">
            <ul>
                {conversations.map(({convoId, participants, lastDate}) => 
                    <li key={`participant_${convoId}`} className="participant_list_item">
                        <Link to={`/conversations/${convoId}`}>{participants}</Link>
                        {lastDate && <div>{lastDate}</div>}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ParticipantListView;