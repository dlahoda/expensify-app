import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numbro from "numbro";

const ExpensesListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format("MMMM Do, YYYY")}</span>
    </div>
    <h3 className="list-item__data">
      {numbro(amount / 100).formatCurrency({ mantissa: 2 })}
    </h3>
  </Link>
);

export default ExpensesListItem;
