import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div class="topnav">
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active">
          Todos
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/user" activeClassName="active">
          ListUser
        </NavLink>
      </div>
    );
  }
}

export default Nav;
