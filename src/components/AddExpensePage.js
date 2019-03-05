import React from "react";
import { connect } from "react-redux";
import ExpenseFrom from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.addExpense(expense);
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
  addExpense: expense => dispatch(addExpense(expense))
});

export default connect(null, mapDispathToProps)(AddExpensePage);
