import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Common/NavBar/Navbar";
import Landing from "./Components/Landing/Landing";
import Dashboardhome from "./Components/Dashboard/Dashboardhome/Dashboardhome";
import Help from "./Components/Help/Help";
import SystemChecking from "./Components/InstructionsAndSysChecking/SystemChecking";

function App() {
  return (
    <div>
      <div style={{height: "10vh"}}>
        <Switch>
        <Route path="/" exact>
            <Navbar />
          </Route>
          <Route path="/dashboard" exact>
            <Navbar />
          </Route>
          <Route path="/help" exact>
            <Navbar />
          </Route>
          <Route path="/sysCheck" exact>
            <Navbar />
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboardhome />
        </Route>
        <Route path="/help" exact>
          <Help />
        </Route>
        <Route path="/sysCheck" exact>
          <SystemChecking />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
