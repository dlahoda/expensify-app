import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formatedExpensesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add expense</Link>
        </div>
      </div>
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