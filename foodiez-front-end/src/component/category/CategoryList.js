import React from "react";
import { useState } from "react";
import { Badge, Form, ListGroup, Row, Stack } from "react-bootstrap";
import categoryStore from "../../stores/categoryStore";
import CategoryModel from "../modal/CategoryModel";
import categoryCard from "./CategoryCard";
import { observer } from "mobx-react";

const categoryList = () => {
  const [query, setQuery] = useState("");
  console.log(categoryStore.categories);

  const categoryList = categoryStore.categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <categoryCard key={category._id} category={category} />);
  return (
    <div>
      <h1 className="title">Products</h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="m-2"
          placeholder="Search for product by name"
          onChange={(event) => setQuery(event.target.value)}
        />
        <CategoryModel />
      </Stack>

      <Row>{categoryList}</Row>
    </div>
  );
};

export default observer(categoryList);
