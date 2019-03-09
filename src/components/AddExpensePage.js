import React from "react";
import { connect } from "react-redux";
import ExpenseFrom from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseFrom
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  };
};

const mapDispathToProps = (dispatch) => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(null, mapDispathToProps)(AddExpensePage);
