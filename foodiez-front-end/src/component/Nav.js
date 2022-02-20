import React from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import recipesStore from "../stores/recipesStore";
import RecipeModel from "./modal/RecipeModal";
import RecipeCard from "./recipes/RecipeCard";

// ! USE LINK TO TO NAVIGATE BETWEEN PAGES:

function Nav() {
  // ! try to connect the the recpie id to the slug of it >>>
  // const { recipeSlug } = useParams();
  // const recipe = recipesStore.find((recipe) => recipe.slug === recipeSlug);
  return (
    <nav
      className="navbar navbar-expand-lg bg-success text-uppercase fixed-top nav "
      id="mainNav"
    >
      <div className="container nav ">
        <Link className="navbar-brand " style={{ color: "black" }} to="/">
          foodies
        </Link>

        <div className="collapse navbar-collapse " id="navbarResponsive">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                className="nav-link py-3 px-0 px-lg-3 rounded "
                style={{ color: "black" }}
                to="/recipes"
              >
                respires
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                className="nav-link py-3 px-0 px-lg-3 rounded "
                style={{ color: "black" }}
                to="/recipe/:slug"
              >
                RecipesDetails
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              {/* <NavLink
                className="nav-link py-3 px-0 px-lg-3 rounded "
                style={{ color: "black" }}
                to="/user"
              >
                User
              </NavLink> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
