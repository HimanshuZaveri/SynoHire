import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Common/NavBar/Navbar";
import Home from "./Components/Pages/Home";
import Dashboard from "./Components/Pages/Dashboard";

function App() {
  return (
    <Dashboard/>
  )
}

export default App;
