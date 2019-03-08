import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));



firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Log in
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    // Log out
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});