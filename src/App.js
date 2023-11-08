import React from 'react';
import './App.css';
import Resume from './pages/resume';
import Projects from './pages/projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Resume/>
        </Route>
        <Route path = "/projects">
          <Projects/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
