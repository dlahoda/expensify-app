import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numbro from "numbro";

const ExpensesListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numbro(amount / 100).formatCurrency({ mantissa: 2 })} 
      - 
      {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
  </div>
);

export default ExpensesListItem;