import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RecipeCard from "../recipes/RecipeCard";

const CategoryCard = ({ category }) => {
  //! this const make a recipe below the catogry::
  const recipeList = category.recipes.map((recipe) => {
    return <RecipeCard key={recipe._id} recipe={recipe} />;
  });

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
{
  /* <Button className="m-1" onClick={handleDelete} variant="danger">
            DELETE
          </Button> */
}
{
  /* <CategoryModel oldCategory={category} /> */
}
