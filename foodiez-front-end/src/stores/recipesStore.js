import { makeAutoObservable } from "mobx";
import categoryStore from "./categoryStore";
import instance from "./instance";

// ? DONE COPY AND RENAMING 17/2/2022.................
// why recipes with s??
class RecipesStore {
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }
  //----------------------------------------------------------------------------------------------
  // CREATE recipe   DONE  :
  createRecipe = async (newRecipe, categoryId) => {
    try {
      //! form data for SHOWING the img::
      const formData = new FormData(); // Currently empty
      for (const key in newRecipe) formData.append(key, newRecipe[key]); // appaned
      console.log("new recipe", newRecipe, categoryId);
      const response = await instance.post(`/category/${categoryId}`, formData);
      console.log("res", response);

      this.recipes.push(response.data);
      categoryStore.categories.map((category) =>
        category._id === categoryId
          ? category.recipes.push(response.data)
          : category
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: recipeStore.js ~ line 16 ~ recipeStore ~ createRecipe= ~ error",
        error
      );
    }
  };
  //   ----------------------------------------------------------------------------------------------
  // FETCH recipe:
  fetchRecipe = async () => {
    try {
      const response = await instance.get("/recipe");
      this.recipes = response.data;
    } catch (error) {
      console.log("recipeStore -> fetchRecipe -> error", error);
    }
  };
  //----------------------------------------------------------------------------------------------
  // UPDATE recipe:
  updateRecipe = async (updateRecipe, recipeId) => {
    try {
      const res = await instance.put(`/recipe/${recipeId}`, updateRecipe); //
      this.recipes = this.recipes.map((recipe) =>
        recipe._id === recipeId ? res.data : recipe
      );
    } catch (error) {
      console.log("recipeStore -> updateRecipe -> error", error);
    }
  };
  //----------------------------------------------------------------------------------------------
  // DELETE recipe:
  deleteRecipe = async (recipeId) => {
    try {
      await instance.delete(`/recipe/${recipeId}`);
      this.recipes = this.recipes.filter((recipe) => recipe._id !== recipeId);
    } catch (error) {
      console.log("recipeStore -> deleteRecipe -> error", error);
    }
  };
}
// ----------------------------------------------------------------------------------------------
const recipesStore = new RecipesStore();
// It will only call this function when the app first starts
recipesStore.fetchRecipe();
export default recipesStore;
