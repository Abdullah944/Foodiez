import React from "react";
// import recipesStore from "../../stores/recipesStore";

import RecipeModel from "../modal/RecipeModal";
import RecipeCard from "./RecipeCard";
import recipesStore from "../../stores/recipesStore";
import { observer } from "mobx-react";
import RecipesList from "./RecipesList";

function RecipesDetails() {
  // ! DON'T THINK WE NEED THIS BECAUSE THIS IF YOU HAVE DATA LOCAL:
  const recipe = recipesStore.recipes; //find in data objs if the slug in the data match the slug in the app.js.
  console.log(recipe);
  return (
    <div>
      <img
        className="bk"
        alt="background"
        src="https://media.istockphoto.com/photos/culinary-background-with-traditional-ingredients-of-italian-cuisine-picture-id1278745986?b=1&k=20&m=1278745986&s=170667a&w=0&h=O7DjUu6D-mBNvwS68Ou_BmNF22a5XwrQgk2j9uV2Hs4="
      />

      <h2 className="portfolio-modal-title  text-uppercase mb-0 title-recipe">
        Recipes
      </h2>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
      {/* -------------- slug information -----------------------------------*/}
      {/* <img className="img-fluid rounded mb-5" src={recipe.image} alt="..." /> */}
      {/* <p className="mb-4">
                  NAME : {recipe.name}
                  <br />
                  description : {recipe.description}
                  <br /> */}
      <div className="recipes-card m-5">
        <RecipeModel />
        {recipe.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
      {/*   ------------- ------------------- ------------------------ */}
      {/* </p> */}
    </div>
  );
}

export default observer(RecipesDetails);
