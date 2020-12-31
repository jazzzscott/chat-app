import React from 'react';
import { Link } from "react-router-dom";
import './ParticipantListView.css';


const ParticipantListView = (props) => {
    return (
        <div className="participant_wrapper">
            {props.participants.map((user) => 
                <li key={`participant_${user}`}><Link to={`/chat/${user}`}>{user}</Link></li>
            )}
        </div>
    )
}

export default ParticipantListView;