import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import categoryStore from "../../stores/categoryStore";

function CategoryModel({ oldCategory }) {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState(
    oldCategory ?? {
      name: "",
      image: "",
      description: "",
    }
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setCategory({ ...category, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldCategory) categoryStore.updateCategory(category, oldCategory._id);
    else categoryStore.createCategory(category);
    handleClose();
  };

  return (
    <>
      <Button className="btn-new" variant="outline-dark" onClick={handleShow}>
        {oldCategory ? "Edit" : "New"}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Your product's name"
                name="name"
                value={category.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Image</InputGroup.Text>
              <FormControl
                name="image"
                value={category.image}
                type="file"
                onChange={handleChange}
                placeholder="Image"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Description</InputGroup.Text>
              <FormControl
                name="description"
                value={category.description}
                type="text"
                onChange={handleChange}
                placeholder="Description"
              />
            </InputGroup>
            <Button variant="outline-dark" type="submit">
              {oldCategory ? "Edit" : "Add"} Category
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CategoryModel;
