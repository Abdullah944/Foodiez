import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import recipeStore from "../../stores/recipesStore";
import RecipeModel from "../modal/RecipeModal";

// ? DONE MAKE recipe card and modal showed in the front end

const RecipeCard = ({ recipe }) => {
  // const handleDelete = () => recipeStore.deleteRecipe(recipe._id);

  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeCard;
{
  /* <Button className="m-1" onClick={handleDelete} variant="danger">
            DELETE
          </Button> */
}
{
  /* this line to make and show the editing button */
}
{
  /* <RecipeModel oldRecipe={recipe} /> */
}
