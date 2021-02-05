import React from 'react';
import { Link } from "react-router-dom";
import './ParticipantListView.css';


const ParticipantListView = (props) => {
    const conversations = props.conversations

    return (
        <div className="participant_wrapper">
            <ul>
                {conversations.map(({id, participants, lastDate}) => 
                    <li key={`participant_${id}`} className="participant_list_item">
                        <Link to={`/conversations/${id}`}>{participants}</Link>
                        {lastDate && <div>{lastDate}</div>}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ParticipantListView;