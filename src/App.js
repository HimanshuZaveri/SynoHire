import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Common/NavBar/Navbar";
import Home from "./Components/Pages/Home";
import Dashboard from "./Components/Pages/Dashboard";
import Feedback from './Components/Pages/Feedback';

function App() {
  return (
    // <Router>
    //   <Route path='/path'>
        <Feedback />
    //   </Route>
    // </Router> 
  )
}

export default App;
