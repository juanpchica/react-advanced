import React from "react";

import { Route,Switch,BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Task from "./pages/Task";

function App() {
  return (
    <div className="container">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/task" component={Task}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
