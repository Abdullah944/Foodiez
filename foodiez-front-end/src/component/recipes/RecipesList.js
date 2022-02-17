import React, { useState } from "react";
import recipeStore from "../../stores/recipesStore";
import RecipeCard from "../recipes/RecipeCard";
// import SearchBar from "./SearchBar";

function RecipesList() {
  const [query, setQuery] = useState("");

  const recipeList = recipeStore.recipes
    .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
    .map((recipe) => <RecipeCard key={recipe._id} recipe={recipe} />);

  return (
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
          Explore Recipes
        </h2>
        <br />
        {/* <SearchBar setQuery={setQuery} /> */}
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        ( // !---- ROW TO SHOW THE RECIPE LIST -------------------------)
        <div class="row justify-content-center">{recipeList}</div>
      </div>
    </section>
  );
}

export default RecipesList;
