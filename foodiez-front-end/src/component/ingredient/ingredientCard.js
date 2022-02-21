import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import ingredientStore from "../../stores/ingredientStore";

const IngredientCard = ({ ingredient, recipe }) => {
  //   const ingredientList = ingredient.map((ingredient) => {
  //     return <IngredientCard key={ingredient._id} ingredient={ingredient} />;
  //   });
  const handleDelete = () => ingredientStore.deleteRecipe(ingredient._id);
  return (
    <Col className="col-lg-4 category-cards">
      <Card>
        <Card.Body className="text-center card-background">
          {/* <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
          <Card.Body className="text-center">
            <Card.Title>{recipe.name}</Card.Title>
            <Card.Text>{recipe.description}</Card.Text>
          </Card.Body> */}
          <Card.Img
            variant="top"
            src={ingredient.image}
            alt={ingredient.name}
          />
          <Card.Title id="category-name-text-category-card">
            <u> Name:</u> {ingredient.name}
          </Card.Title>
          <Card.Text id="description-text-category-card">
            <u> Description: </u> {ingredient.description}
          </Card.Text>
          <Button
            className="m-1 text-center"
            onClick={handleDelete}
            variant="danger"
          >
            DELETE
          </Button>

          {/* <Row>{ingredientList}</Row> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default IngredientCard;
