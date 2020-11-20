import React, { Suspense } from "react";
import "./sass/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./component/custom/loader";
import navigation from "./data";
const Error = React.lazy(() => import("./component/views/Error"));
const ViewHome = React.lazy(() => import("./component/views/Home"));
const Room = React.lazy(() => import("./component/views/Room"));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<Loader />}>
				<Router>
					<Switch>
						<Route
							path="/"
							exact
							render={(props) => <ViewHome {...props} items={navigation} />}
						/>
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
