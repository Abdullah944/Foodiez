import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import categoryStore from "../../stores/categoryStore";

function CategoryModel({}) {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState({
    name: "",
    image: "",
    description: "",
  });
  // oldCategory ??

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setCategory({ ...category, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setCategory({ ...category, [event.target.name]: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (oldCategory) categoryStore.updateCategory(category, oldCategory._id);
    // else
    categoryStore.createCategory(category);
    handleClose();
  };

  return (
    <>
      {/* ! this the EDIT button which we don't need - new and edit */}
      <Button
        className="btn-new bg-light"
        variant="outline-dark"
        onClick={handleShow}
      >
        {"New"}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Your category's name"
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
                // value={category.image}
                type="file"
                onChange={handleImage}
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

            {/* button inside the modal */}
            <Button variant="outline-dark" type="submit">
              {"Add "} Category
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CategoryModel;
