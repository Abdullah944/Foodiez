import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import categoryStore from "../../stores/categoryStore";
import CategoryModel from "../modal/CategoryModel";

const categoryCard = ({ category }) => {
  const handleDelete = () => categoryStore.deleteProduct(category._id);

  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Img variant="top" src={category.image} alt={category.name} />
        <Card.Body>
          <Card.Title>{category.name}</Card.Title>
          <Card.Text>{category.description}</Card.Text>
          <Button className="m-1" onClick={handleDelete} variant="danger">
            DELETE
          </Button>
          <CategoryModel oldcategory={category} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default categoryCard;
