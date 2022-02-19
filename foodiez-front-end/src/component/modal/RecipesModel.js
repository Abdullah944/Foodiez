import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import recipesStore from "../../stores/recipesStore";

function RecipesModel({ oldRecipes, categoryId }) {
  const [show, setShow] = useState(false);
  const [recipes, setRecipes] = useState(
    oldRecipes ?? {
      name: "",
      image: "",
      description: "",
    }
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setRecipes({ ...recipes, [event.target.name]: event.target.value });
  const handleImage = (event) =>
    setRecipes({ ...recipes, [event.target.name]: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldRecipes) recipesStore.updateRecipes(recipes, oldRecipes._id);
    else recipesStore.createRecipes(recipes, categoryId);
    handleClose();
  };

  return (
    <>
      <Button className="btn-new" variant="outline-dark" onClick={handleShow}>
        {oldRecipes ? "Edit" : "New"}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Your recipes's name"
                name="name"
                value={recipes.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Image</InputGroup.Text>
              <FormControl
                name="image"
                // value={recipes.image}
                type="file"
                onChange={handleImage}
                placeholder="Image"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Description</InputGroup.Text>
              <FormControl
                name="description"
                value={recipes.description}
                type="text"
                onChange={handleChange}
                placeholder="Description"
              />
            </InputGroup>
            <Button variant="outline-dark" type="submit">
              {oldRecipes ? "Edit" : "Add"} recipe
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RecipesModel;
