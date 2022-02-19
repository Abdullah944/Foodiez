import { makeAutoObservable } from "mobx";
import instance from "./instance";

class IngredientStore {
  // make the category default value is empty string:
  ingredients = [];
  //INFO: null of it's obj and in use status.

  constructor() {
    makeAutoObservable(this);
  }
  //----------------------------------------------------------------------------------------------
  // CREATE Category   DONE  :
  createIngredient = async (newIngredient) => {
    try {
      // ! form data for SHOWING the img::
      const formData = new FormData(); // Currently empty
      for (const key in newIngredient) {
        formData.append(key, newIngredient[key]); // append
      }
      const response = await instance.post("/user", formData);
      this.ingredients.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: ingredientStore.js ~ line 16 ~ ingredientStore ~ createIngredient= ~ error",
        error
      );
    }
  };
  //   ----------------------------------------------------------------------------------------------
  // FETCH ingredient:
  fetchIngredient = async () => {
    try {
      const response = await instance.get("/ingredient");
      this.ingredients = response.data;
    } catch (error) {
      console.log("ingredientStore -> fetchIngredient -> error", error);
    }
  };
  //----------------------------------------------------------------------------------------------
  // UPDATE ingredient:
  updateIngredient = async (updateIngredient, ingredientId) => {
    try {
      const res = await instance.put(
        `/ingredient/${ingredientId}`,
        updateIngredient
      );
      this.ingredients = this.ingredients.map((ingredient) =>
        ingredient._id === ingredientId ? res.data : ingredient
      );
    } catch (error) {
      console.log("ingredientStore -> updateIngredient-> error", error);
    }
  };
  //----------------------------------------------------------------------------------------------
  // DELETE ingredient:
  deleteIngredient = async (ingredientId) => {
    try {
      await instance.delete(`/ingredient/${ingredientId}`);
      this.ingredients = this.ingredients.filter(
        (ingredient) => ingredient._id !== ingredientId
      );
    } catch (error) {
      console.log("ingredientStore -> deleteIngredient -> error", error);
    }
  };
}
// ----------------------------------------------------------------------------------------------
const ingredientStore = new IngredientStore();
// It will only call this function when the app first starts
ingredientStore.fetchIngredient();
export default ingredientStore;

// axios.METHOD(URL, BODY)
// check if ingredient is single or plural???????

// GET: Fetching Data
// axios.get("http://localhost:8000/api/categories");             // check if ingredient path single or plural?????????????
// Return array of categories

// POST => It takes a BODY, and is used when we Send Data (Create)
// axios.post("http://localhost:8000/api/categories", newObject);
// Returns a new object

// PUT =>  It takes a BODY, and is used to Update Data. We must pass an ID.
// axios.put(`http://localhost:8000/api/categories/${ID}`, updatedObject);
// Returns updated object

// DELETE => Delete some data. We must pass an ID.
// axios.delete(`http://localhost:8000/api/categories/${ID}`);
// Returns nothing
