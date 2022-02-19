import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import categoryStore from "../../stores/categoryStore";
import CategoryModel from "../modal/CategoryModel";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  // const handleDelete = () => categoryStore.deleteCategory(category._id);

  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{category.name}</Card.Title>
          <Card.Text style={{ color: "black" }}>
            {category.description}
          </Card.Text>
          <br />
          <Link to={`/category/${category.slug}`}>
            <Card.Img variant="top" src={category.image} alt={category.name} />
          </Link>

          {/* <Button className="m-1" onClick={handleDelete} variant="danger">
            DELETE
          </Button> */}
          <CategoryModel oldCategory={category} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CategoryCard;
