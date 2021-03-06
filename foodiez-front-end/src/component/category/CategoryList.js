import CategoryCard from "./CategoryCard";
import { useState } from "react";
import { observer } from "mobx-react";
import { Form, Row, Stack } from "react-bootstrap";
import categoryStore from "../../stores/categoryStore";
import CategoryModel from "../modal/CategoryModel";

function CategoryList() {
  const [query, setQuery] = useState("");

  const categoryList = categoryStore.categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase().trim())
    )
    .map((category) => <CategoryCard key={category._id} category={category} />);

  return (
    <div>
      <div>
        <h1 className="title-categories text-uppercase ">categories</h1>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="m-2"
            placeholder="Search for category by name"
            onChange={(event) => setQuery(event.target.value)}
          />
          <CategoryModel />
        </Stack>

        <Row>{categoryList}</Row>
      </div>
    </div>
  );
}

export default observer(CategoryList);
