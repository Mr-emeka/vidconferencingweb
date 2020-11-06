import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./component/custom/loader";
const Error = React.lazy(() => import("./component/views/Error"));
const ViewHome = React.lazy(() => import("./component/views/Home"));
const Room = React.lazy(() => import("./component/views/Room"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
}

export default App;
