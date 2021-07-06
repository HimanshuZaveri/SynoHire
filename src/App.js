import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Common/NavBar/Navbar";
import Home from "./Components/Pages/Home";
import SystemChecking from "./Components/InstructionsAndSysChecking/SystemChecking";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar
            compo={[
              {
                title: "abbout ",
                path: "/abouts",
                margin: "0px 5px 0px 5px",
                bgColor: "#C6FFDD",
              },
              {
                title: "hello ",
                path: "/hello",
                margin: "0px 5px 0px 5px",
                bgColor: "#FBD786",
              },
              {
                title: "Hello ",
                path: "/hello2",
                margin: "0px 5px 0px 5px",
                bgColor: "#C6FFDD",
              },
            ]}
          />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
