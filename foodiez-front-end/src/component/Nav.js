import React from "react";
import { NavLink } from "react-bootstrap";

const Nav = () => {
  return (
    <nav
      style={{ position: "sticky" }}
      class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div class="container navBar">
        <NavLink class="navbar-brand" to="/">
          Hike
        </NavLink>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <NavLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <NavLink
                class="nav-link py-3 px-0 px-lg-3 rounded "
                to="/TripList"
              >
                Trips
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
