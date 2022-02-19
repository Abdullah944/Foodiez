import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const IngredientCard = ({ ingredient }) => {
  //   const ingredientList = ingredient.map((ingredient) => {
  //     return <IngredientCard key={ingredient._id} ingredient={ingredient} />;
  //   });

  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Body>
          <Card.Img
            variant="top"
            src={ingredient.image}
            alt={ingredient.name}
          />
          <Card.Title>{ingredient.name}</Card.Title>
          <Card.Text>{ingredient.description}</Card.Text>

          {/* <Row>{ingredientList}</Row> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default IngredientCard;
