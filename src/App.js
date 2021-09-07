import React from "react";

import { Route,Switch,BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Htask from "./pages/Htask";

function App() {
  return (
    <div className="container">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/tasks" component={Htask}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
