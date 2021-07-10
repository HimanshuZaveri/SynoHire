import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboardhome from "./Dashboard/Dashboardhome/Dashboardhome";
// import Home from "./Components/Pages/Home";
import IndexTest from "./Components/TestInstructions/IndexTest";
import SystemChecking from "./Components/InstructionsAndSysChecking/SystemChecking";

function App() {
  return (
    <div>
      <div style={{height: "10vh"}}>
        <switch>
          <Route path="/dashboard" exact>
            <Navbar />
          </Route>
          <Route path="/help" exact>
            <Navbar />
          </Route>
        </switch>
      </div>
      <switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/dashboard" exact>
          <SystemChecking />
        </Route>
        <Route path="/help" exact>
          <IndexTest />
        </Route>
      </switch>
    </div>
  )
}

export default App;
