import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import recipeStore from "../../stores/recipesStore";

// ? DONE MAKE recipe card and modal showed in the front end

const RecipeCard = ({ recipe }) => {
  const handleDelete = () => recipeStore.deleteRecipe(recipe._id);
  return (
    <Col className="col-lg-4 category-cards ">
      <Card>
        <div className="card-background">
          <Link to={`/recipes/${recipe.slug}`}>
            <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
          </Link>
          <Card.Body className="text-center  ">
            <Card.Title id="category-name-text-category-card">
              <u> Name:</u>
              {recipe.name}
            </Card.Title>
            <Card.Text id="description-text-category-card">
              <u>Description: </u>
              {recipe.description}
            </Card.Text>
            <Button
              className="m-1 text-center"
              onClick={handleDelete}
              variant="danger"
            >
              DELETE
            </Button>
          </Card.Body>
        </div>
        {/* (<IngredientCard recipe={recipe} />) */}
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
