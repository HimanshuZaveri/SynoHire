import React from "react";
import Navbar from "./Components/Common/NavBar/Navbar";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboardhome from "./Dashboard/Dashboardhome/Dashboardhome";
// import Home from "./Components/Pages/Home";
// import IndexTest from "./Components/TestInstructions/IndexTest";
// import SystemChecking from "./Components/InstructionsAndSysChecking/SystemChecking";

function App() {
  return (
    <switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/dashboard" exact>
        <Dashboardhome />
      </Route>
      <Route path="/help" exact>
        <Help />
      </Route>
    </switch>
  )
}

export default App;
