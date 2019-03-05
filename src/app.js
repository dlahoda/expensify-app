import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));