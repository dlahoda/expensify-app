import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--transparent" onClick={startLogout}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispath => ({
  startLogout: () => dispath(startLogout())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);

// <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
