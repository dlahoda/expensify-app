import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilter from './ExpensesListFilter';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesListFilter />
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;