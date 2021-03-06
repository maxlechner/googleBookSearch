import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Search from "./pages/SearchPage";
import Saved from "./pages/SavedPage";
import NavTop from "./components/NavTop";
import Landing from "./pages/Landing"

function App() {
  return (
    <Router>
      <NavTop/>
      <Header/>
      <Switch>
        <Route exact strict  path="/" component={Landing}/>
        <Route exact strict  path="/search" component={Search}/>
        <Route exact strict  path="/saved" component={Saved}/>
      </Switch>
    </Router>
    
  );
}

export default App;
