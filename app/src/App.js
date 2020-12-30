import { Route, Redirect, Switch } from "react-router-dom";

import ChatRoom from './components/ChatRoom';
import './App.css';

function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/chat" />
      <Route path="/chat" component={ChatRoom} />
    </Switch>
  );
}

export default App;
