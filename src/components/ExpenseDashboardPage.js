import React from 'react';
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from './ExpensesList';
import ExpensesListFilter from './ExpensesListFilter';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpensesListFilter />
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;