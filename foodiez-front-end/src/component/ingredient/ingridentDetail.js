import React from "react";
import { Form, Row, Stack } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import RecipeModel from "../modal/RecipeModal";
import categoryStore from "../../stores/categoryStore";
import { observer } from "mobx-react";
import RecipeCard from "../recipes/RecipeCard";
import IngredientModel from "../modal/IngredientModal";
import ingredientStore from "../../stores/ingredientStore";
import recipesStore from "../../stores/recipesStore";

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
    <div style={{ color: "black" }} className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <br />
                <br />
                <h2
                  style={{ color: "black" }}
                  className="portfolio-modal-title text-secondary text-uppercase mb-0"
                >
                  {recipe.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={recipe.image}
                  alt="..."
                />
                <p className="mb-4">Description: {recipe.description}</p>
                <IngredientModel categoryId={recipe._id} />

                {recipe.ingredients.map((recipe) => (
                  <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(IngredientDetail);
