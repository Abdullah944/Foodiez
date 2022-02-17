import React from "react";
import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div class="container">
        <Link class="navbar-brand" to="/">
          foodies
        </Link>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <NavLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                respires
              </NavLink>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <NavLink
                class="nav-link py-3 px-0 px-lg-3 rounded "
                to="/RecipeList"
              >
                RecipesDetails
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
