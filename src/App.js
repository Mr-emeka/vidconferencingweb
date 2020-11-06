import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Error = React.lazy(() => import("./component/views/Error"));
const ViewHome = React.lazy(() => import("./component/views/Home"));
const Room = React.lazy(() => import("./component/views/Room"));

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <ViewHome {...props} />} />
          <Route
            path="/room/:roomId"
            exact
            render={(props) => <Room {...props} />}
          />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
