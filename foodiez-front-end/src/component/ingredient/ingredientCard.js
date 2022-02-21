import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import ingredientStore from "../../stores/ingredientStore";

const IngredientCard = ({ ingredient, recipe }) => {
  //   const ingredientList = ingredient.map((ingredient) => {
  //     return <IngredientCard key={ingredient._id} ingredient={ingredient} />;
  //   });
  const handleDelete = () => ingredientStore.deleteIngredient(ingredient._id);

  return (
    <Col className="col-lg-4 category-cards">
      <Card>
        <Card.Body className="text-center card-background">
          <Card.Img
            variant="top"
            src={ingredient.image}
            alt={ingredient.name}
          />
          <Card.Title id="ingredient-name-text-card">
            <u> Name: </u> <p>{ingredient.name}</p>
          </Card.Title>
          <Card.Text id="ingredient-text-card">
            <u> Description: </u> <p>{ingredient.description}</p>
          </Card.Text>
          {/* <Button
            className="m-1 text-center"
            onClick={handleDelete}
            variant="danger"
          >
            DELETE
          </Button> */}

          {/* <Row>{ingredientList}</Row> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default IngredientCard;
