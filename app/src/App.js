import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';
import ChatRoom from './components/ChatRoom';
import ParticipantListView from './components/ParticipantListView';
import './App.css';

function App() {

  const [conversations, setConversations] = React.useState([]);

  const currentUsername = 'jadotscott';
  const url = 'https://7r4e9bqtq9.execute-api.us-west-2.amazonaws.com/prod';

  var apigClientFactory = require('aws-api-gateway-client').default;
  var apigClient = apigClientFactory.newClient({invokeUrl: url});

  const fetchConversations = () => {
    return apigClient.invokeApi({}, '/conversations', 'GET', {}, {})
      .then(res => res.data)
  }

  React.useEffect(() => {
    async function getConvoData() {
      let response = await fetchConversations();
      let newData = [];
      response.forEach(convo => {
        var users = []
        convo.participants.forEach((user) => {
          if (user !== currentUsername) {
            users.push(user)
          }
        })
        let lastDate = null
        if (convo.last) {
          lastDate = moment(new Date(convo.last)).fromNow()
        }
        newData.push({convoId: convo.id, participants: users, lastDate: lastDate})
      })
      setConversations([...conversations, ...newData]);
    }

    if (conversations.length === 0) {
      getConvoData()
    }
  }, [conversations])
  
  return (
    <Switch>
      <Redirect exact from="/" to="/conversations" />
      <Route exact path="/conversations" 
        render={() => (
          <ParticipantListView conversations={conversations} />
        )}
      />
      <Route 
        exact
        path="/conversations/:convoId" 
        render={({
          match: {
            params: {convoId}
          }
        }) => (
          <ChatRoom userId={convoId} currentUser={currentUsername}/>
        )} 
      />
    </Switch>
  );
}

export default App;
