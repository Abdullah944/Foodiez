import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import ingredientStore from "../../stores/ingredientStore";

function IngredientModel({ recipeId }) {
  const [show, setShow] = useState(false);
  const [ingredient, setIngredient] = useState({
    name: "",
    image: "",
    description: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setIngredient({ ...ingredient, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientStore.createIngredient(ingredient, recipeId);
    handleClose();
  };

  return (
    <>
      {/* ! this the EDIT button which we don't need - new and edit */}
      <div className="center-btn text-center">
        <Button
          className="btn-new bg-light "
          variant="outline-dark"
          onClick={handleShow}
        >
          {" Add New ingredient"}
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Your ingredient's name"
                name="name"
                value={ingredient.name}
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
                value={ingredient.description}
                type="text"
                onChange={handleChange}
                placeholder="Description"
              />
            </InputGroup>
            {/* button inside the modal */}
            <Button variant="outline-dark" type="submit">
              {"Add"} ingredient
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default IngredientModel;
