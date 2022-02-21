import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import recipeStore from "../../stores/recipesStore";

function RecipeModel({ oldRecipe, categoryId }) {
  const [show, setShow] = useState(false);
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    description: "",
  });
  // oldRecipe ??

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setRecipe({ ...recipe, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setRecipe({ ...recipe, [event.target.name]: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (oldRecipe) recipeStore.updateRecipe(recipe, oldRecipe._id);
    // ! we need to relate the recipe is to category  id:
    recipeStore.createRecipe(recipe, categoryId); // we need category id
    handleClose();
  };

  return (
    <>
      <div className="center-btn text-center">
        <Button
          className="new-btn  bg-light "
          variant="outline-dark"
          onClick={handleShow}
        >
          {"Add New Recipe"}
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Your recipe's name"
                name="name"
                value={recipe.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3 ">
              <InputGroup.Text>Image</InputGroup.Text>
              <FormControl
                name="image"
                // value={recipe.image}
                type="file"
                onChange={handleImage}
                placeholder="Image"
              />
            </InputGroup>

            <InputGroup className="mb-3 ">
              <InputGroup.Text>Description</InputGroup.Text>
              <FormControl
                name="description"
                value={recipe.description}
                type="text"
                onChange={handleChange}
                placeholder="Description"
              />
            </InputGroup>

            <Button variant="outline-dark" type="submit">
              {"Add"} recipe
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RecipeModel;
