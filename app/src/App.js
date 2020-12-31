import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import axios from 'axios';

import ChatRoom from './components/ChatRoom';
import ParticipantListView from './components/ParticipantListView';
import './App.css';

function App() {

  const [participants, setParticipants] = React.useState([]);

  const currentUsername = 'Student';
  const url = 'https://7r4e9bqtq9.execute-api.us-west-2.amazonaws.com/prod';

  React.useEffect(() => {
    getParticipants();
  }, []);

  function getParticipants() {
    axios.get(`${url}/conversations`).then(res => {
      var users = []
      res.data.forEach((convo) => {
        convo.participants.forEach((user) => {
          if (user !== currentUsername) {
            users.push(user);
          }
        })
      })
      setParticipants(users)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <Switch>
      <Redirect exact from="/" to="/main" />
      <Route path="/main" 
        render={() => (
          <ParticipantListView participants={participants} />
        )}
      />
      <Route 
        exact
        path="/chat/:user" 
        render={({
          match: {
            params: {user}
          }
        }) => (
          <ChatRoom user={user}/>
        )} 
      />
    </Switch>
  );
}

export default App;
