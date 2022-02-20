import React from "react";
// import recipesStore from "../../stores/recipesStore";

import RecipeModel from "../modal/RecipeModal";
import RecipeCard from "./RecipeCard";
import recipesStore from "../../stores/recipesStore";
import { observer } from "mobx-react";

function RecipesDetails() {
  // ! DON'T THINK WE NEED THIS BECAUSE THIS IF YOU HAVE DATA LOCAL:
  const recipe = recipesStore.recipes; //find in data objs if the slug in the data match the slug in the app.js.
  console.log(recipe);
  return (
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {recipe.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                {/* -------------- slug information -----------------------------------*/}
                <img
                  className="img-fluid rounded mb-5"
                  src={recipe.image}
                  alt="..."
                />
                <p className="mb-4">
                  NAME : {recipe.name}
                  <br />
                  description : {recipe.description}
                  <br />
                  <RecipeModel />
                  {recipe.map((recipe) => (
                    <RecipeCard recipe={recipe} />
                  ))}
                  {/*   ------------- ------------------- ------------------------ */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(RecipesDetails);
