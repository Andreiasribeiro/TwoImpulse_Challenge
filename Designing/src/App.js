//Two Impulse Challenge - Andréia Ribeiro
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./components/homepage"
import Employee from "./components/employee"
import Team from "./components/team"


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path='/' component={Homepage} />
          <Route exact path='/emp' component={Employee} />
          <Route exact path='/team' component={Team} />

        </Switch>

      </Router>

    </div>
  );
} export default App;
