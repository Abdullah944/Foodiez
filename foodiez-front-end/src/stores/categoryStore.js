import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  // make the category default value is empty string:
  categories = [];
  //INFO: null of it's obj and in use status.

  constructor() {
    makeAutoObservable(this);
  }
  //----------------------------------------------------------------------------------------------
  // CREATE Category   DONE  :
  createCategory = async (newCategory) => {
    try {
      // form data for showing the img
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);
      // console.log(newCategory);
      const response = await instance.post("/category", formData);
      this.categories.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: categoryStore.js ~ line 16 ~ categoryStore ~ createCategory= ~ error",
        error
      );
    }
  };
  //   ----------------------------------------------------------------------------------------------
  // FETCH category:
  fetchCategory = async () => {
    try {
      const response = await instance.get("/category");
      this.categories = response.data;
    } catch (error) {
      console.log("categoryStore -> fetchCategory -> error", error);
    }
  };
  //----------------------------------------------------------------------------------------------
  // UPDATE category:
  updateCategory = async (updateCategory, categoryId) => {
    try {
      const res = await instance.put(`/category/${categoryId}`, updateCategory);
      this.categories = this.categories.map((category) =>
        category._id === categoryId ? res.data : category
      );
    } catch (error) {
      console.log("categoryStore -> updateCategory-> error", error);
    }
  };
  //----------------------------------------------------------------------------------------------
  // DELETE category:
  deleteCategory = async (categoryId) => {
    try {
      await instance.delete(`/category/${categoryId}`);
      this.categories = this.categories.filter(
        (category) => category._id !== categoryId
      );
    } catch (error) {
      console.log("categoryStore -> deleteCategory -> error", error);
    }
  };
}
// ----------------------------------------------------------------------------------------------
const categoryStore = new CategoryStore();
// It will only call this function when the app first starts
categoryStore.fetchCategory();
export default categoryStore;

// axios.METHOD(URL, BODY)
// check if category is single or plural???????

// GET: Fetching Data
// axios.get("http://localhost:8000/api/categories");             // check if category path single or plural?????????????
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
