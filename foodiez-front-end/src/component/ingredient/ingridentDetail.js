import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import RecipeCard from "../recipes/RecipeCard";
import IngredientModel from "../modal/IngredientModal";
import recipesStore from "../../stores/recipesStore";
import ingredientCard from "../../component/ingredient/ingredientCard";

function IngredientDetail() {
  const { slug } = useParams();
  const recipe = recipesStore.recipes.find((recipe) => {
    // console.log("####", category.recipes, slug);
    return recipe.slug === slug;
  });

  console.log(recipe);
  if (!slug) {
    return <Navigate to="/" />;
  }
  if (!recipe) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <img
        className="bk"
        alt="background"
        src="https://media.istockphoto.com/photos/culinary-background-with-traditional-ingredients-of-italian-cuisine-picture-id1278745986?b=1&k=20&m=1278745986&s=170667a&w=0&h=O7DjUu6D-mBNvwS68Ou_BmNF22a5XwrQgk2j9uV2Hs4="
      />
      <h2 className="portfolio-modal-title  text-uppercase mb-0 title-categories">
        {recipe.name}
      </h2>
      <div className="img-center">
        <img className="img-fluid rounded mb-5 " src={recipe.image} alt="..." />
      </div>
      <p className="mb-4 description-center-white">
        Description: {recipe.description}
      </p>

      <IngredientModel categoryId={recipe._id} />

      {recipe.ingredients.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
}

export default observer(IngredientDetail);
