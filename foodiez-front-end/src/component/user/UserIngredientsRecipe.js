//  will be in it: 1- <Ricpe modal > + < recipe card / > + recipe create func> ++ <ingredient modal > + < ingredient card / > + ingredient create func>

import React from "react";
import IngredientCard from "../ingredient/ingredientCard";
import IngredientModel from "../modal/IngredientModal";
import RecipeModel from "../modal/RecipeModal";
import RecipeCard from "../recipes/RecipeCard";

const userIngredientsRecipe = () => {
  return (
    <div className="bk-user">
      <h1 className="title-user text-uppercase"> user</h1>
      <div className="ingredient-title  text-decoration-underline">
        <h2>make new ingredients here ::</h2>
        <IngredientModel />
      </div>
      {/* // making error the card */}
      {/* <IngredientCard /> */}
      <div className="recipe-user text-decoration-underline">
        <h2> make a new recipe here ::</h2>
        <RecipeModel />
        {/* <RecipeCard /> */}
      </div>
    </div>
  );
};

export default userIngredientsRecipe;
