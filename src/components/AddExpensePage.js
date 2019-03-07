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
        <h3>Add expense</h3>
        <ExpenseFrom
          onSubmit={this.onSubmit}
        />
      </div>
    );
  };
};

const mapDispathToProps = (dispatch) => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(null, mapDispathToProps)(AddExpensePage);
