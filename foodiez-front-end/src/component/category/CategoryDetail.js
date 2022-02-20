import React from "react";
import { Form, Row, Stack } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import RecipeModel from "../modal/RecipeModal";
import categoryStore from "../../stores/categoryStore";
import { observer } from "mobx-react";
import RecipeCard from "../recipes/RecipeCard";
function CategoryDetail() {
  const { slug } = useParams();
  const category = categoryStore.categories.find((category) => {
    // console.log("####", category.recipes, slug);
    return category.slug === slug;
  });
  if (!slug) {
    return <Navigate to="/" />;
  }
  if (!category) {
    return <h1>Loading</h1>;
  }

  return (
    <div style={{ color: "black" }} class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body text-center pb-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <br />
                <br />
                <h2
                  style={{ color: "black" }}
                  class="portfolio-modal-title text-secondary text-uppercase mb-0"
                >
                  {category.name}
                </h2>
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="divider-custom-line"></div>
                </div>
                <img
                  class="img-fluid rounded mb-5"
                  src={category.image}
                  alt="..."
                />
                <p class="mb-4">Description: {category.description}</p>
                <RecipeModel categoryId={category._id} />

                {category.recipes.map((recipe) => (
                  <RecipeCard key={category._id} recipe={recipe} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(CategoryDetail);
