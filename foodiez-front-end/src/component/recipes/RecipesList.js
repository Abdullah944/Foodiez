import React, { useState } from "react";
import { Form, Row, Stack } from "react-bootstrap";
import recipeStore from "../../stores/recipesStore";
import RecipeModel from "../modal/RecipeModal";
import RecipeCard from "../recipes/RecipeCard";
// import SearchBar from "./SearchBar";

function RecipesList() {
  const [query, setQuery] = useState("");

  const recipeList = recipeStore.recipes
    .filter((recipeList) =>
      recipeList.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((recipeList) => (
      <RecipeCard key={recipeList._id} recipeList={recipeList} />
    ));

  return (
    <div>
      <h1 className="title-recipe text-uppercase">recipeList</h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="m-5"
          placeholder="Search for recipeList by name"
          onChange={(event) => setQuery(event.target.value)}
        />

        <RecipeModel />
      </Stack>

      <Row>{recipeList}</Row>
    </div>
  );
}

export default RecipesList;

{
  /* <section className="page-section portfolio" id="portfolio">
<div className="container ">
  <h2 className=" title-recipe page-section-heading text-center text-uppercase mb-0">
    Explore Recipes
  </h2>
  <RecipeModel />
  <br />
  {/* <SearchBar setQuery={setQuery} /> */
}
//   <div className="divider-custom">
//     <div className="divider-custom-line"></div>
//     <div className="divider-custom-icon">
//       <i className="fas fa-star"></i>
//     </div>
//     <div className="divider-custom-line"></div>
//   </div>
//   ( // !---- ROW TO SHOW THE RECIPE LIST -------------------------)
//   <div className="row justify-content-center">{recipeList}</div>
// </div>
// </section> */}
