import React from "react";
import { Navigate, useParams } from "react-router-dom";
import RecipeModel from "../modal/RecipeModal";
import categoryStore from "../../stores/categoryStore";
import { observer } from "mobx-react";
import RecipeCard from "../recipes/RecipeCard";

function CategoryDetail() {
  const { slug } = useParams();
  const category = categoryStore.categories.find((category) => {
    return category.slug === slug;
  });
  if (!slug) {
    return <Navigate to="/" />;
  }
  if (!category) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <img
        className="bk"
        alt="background"
        src="https://media.istockphoto.com/photos/culinary-background-with-traditional-ingredients-of-italian-cuisine-picture-id1278745986?b=1&k=20&m=1278745986&s=170667a&w=0&h=O7DjUu6D-mBNvwS68Ou_BmNF22a5XwrQgk2j9uV2Hs4="
      />
      <h2 class=" portfolio-modal-title text-uppercase mb-0 title-recipe">
        {category.name}
      </h2>
      <div className="img-center category-detail-img">
        <img class="  rounded mb-5" src={category.image} alt="..." />
      </div>
      <p
        class="mb-4 description-center-white"
        style={{ border: "solid black" }}
      >
        {category.description}
      </p>
      <RecipeModel categoryId={category._id} />

      {category.recipes.map((recipe) => (
        <RecipeCard key={category._id} recipe={recipe} />
      ))}
    </div>
  );
}

export default observer(CategoryDetail);
