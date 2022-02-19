import React from "react";

import { Navigate, useParams } from "react-router-dom";
import RecipesModel from "../modal/RecipesModel";
import categoryStore from "../../stores/categoryStore";
function CategoryDetail() {
  const { slug } = useParams();
  const category = categoryStore.categories.find(
    (category) => category.slug === slug
  );
  if (!slug) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ color: "black" }} class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body text-center pb-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
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
                <RecipesModel categoryId={category._id} />
                <p class="mb-4">Description: {category.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryDetail;
