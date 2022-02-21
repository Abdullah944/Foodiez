import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import categoryStore from "../../stores/categoryStore";

const CategoryCard = ({ category }) => {
  const handleDelete = () => categoryStore.deleteCategory(category._id);

  return (
    <Col className="col-lg-4  category-cards ">
      <Card>
        <Card.Body className="card-background">
          <Card.Title id="category-name-text-category-card">
            <u> Name:</u> {category.name}
          </Card.Title>
          <br />
          <Card.Text id="description-text-category-card">
            <u> Description: </u>
            {category.description}
          </Card.Text>
          <br />
          <Link to={`/category/${category.slug}`}>
            <Card.Img variant="top" src={category.image} alt={category.name} />
          </Link>

          <Button className="m-1" onClick={handleDelete} variant="danger">
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CategoryCard;
