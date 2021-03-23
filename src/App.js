import "./styling/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navigator } from "./styling/Navbar";
import { Home } from "./component/Home";
import { Admission } from "./component/Admission";
import Academic from "./component/Academic";
import Alumni from "./component/Alumni";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admission" component={Admission} />
          <Route path="/academic" component={Academic} />
          <Route path="/alumni" component={Alumni} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
