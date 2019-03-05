import React from "react";
import { connect } from "react-redux";
import numbro from "numbro";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expensesTotal";

export const ExpensesSummary = ({ expensesCount, expensesTotal}) => {
  const expenseWord = expensesCount === 1 ? "expense" : "expenses";
  const formatedExpensesTotal = numbro(expensesTotal / 100).formatCurrency({
    thousandSeparated: true,
    mantissa: 2 
  });

  return (
    <div>
      <h1>Viewing {expensesCount} {expenseWord} totalling {formatedExpensesTotal}</h1>
    </div>
  );
};

const mapToStateProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapToStateProps)(ExpensesSummary);