import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

// Test
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 400
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 230,
    createdAt: 1000
  })
);
const expenseThree = store.dispatch(
  addExpense({
    description: "Rent",
    amount: 1340
  })
);

// store.dispatch(setTextFilter("bill"));