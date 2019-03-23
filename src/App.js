import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ChatPage from "./components/ChatPage";
import WelcomePage from './components/WelcomePage'

const App = () => {
  return (
    <Router>
      <Switch> 
        <Route path="/(welcome)?" component={WelcomePage} />
        <Route path="/chat" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
