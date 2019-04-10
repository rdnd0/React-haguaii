import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AuthProvider from "./components/AuthProvider";
import Main from "./components/Main";
// Redux
import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Main} />
          <PrivateRoute exact path="/private" component={Private} />
          <AnonRoute exact path="/login" component={Login} />
          <AnonRoute exact path="/signup" component={Signup} />
        </Switch>
      </AuthProvider>
    </Provider>
  );
}

export default App;
