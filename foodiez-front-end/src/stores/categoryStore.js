import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  categories = [];
  //null of it's obj and in use status.

  constructor() {
    makeAutoObservable(this);
  }

  createCategory = async (newCategory) => {
    try {
      const response = await instance.post("/category", newCategory);
      this.category.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: categoryStore.js ~ line 16 ~ ProductStore ~ createProduct= ~ error",
        error
      );
    }
  };

  fetchProducts = async () => {
    try {
      const response = await instance.get("/products");
      this.products = response.data;
    } catch (error) {
      console.log("ProductStore -> fetchProducts -> error", error);
    }
  };

  //   updateProduct = async (updatedProduct, productId) => {
  //     try {
  //       const res = await instance.put(`/products/${productId}`, updatedProduct);
  //       this.products = this.products.map((product) =>
  //         product._id === productId ? res.data : product
  //       );
  //     } catch (error) {
  //       console.log("ProductStore -> updateProduct -> error", error);
  //     }
  //   };

  //   deleteProduct = async (productId) => {
  //     try {
  //       await instance.delete(`/products/${productId}`);
  //       this.products = this.products.filter(
  //         (product) => product._id !== productId
  //       );
  //     } catch (error) {
  //       console.log("ProductStore -> deleteProduct -> error", error);
  //     }
  //   };
}

const categoryStore = new CategoryStore();
// It will only call this function when the app first starts
categoryStore.fetchProducts();

export default categoryStore;

// axios.METHOD(URL, BODY)

// GET: Fetching Data
// axios.get("http://localhost:8000/api/products");
// Return array of products

// POST => It takes a BODY, and is used when we Send Data (Create)
// axios.post("http://localhost:8000/api/products", newObject);
// Returns a new object

// PUT =>  It takes a BODY, and is used to Update Data. We must pass an ID.
// axios.put(`http://localhost:8000/api/products/${ID}`, updatedObject);
// Returns updated object

// DELETE => Delete some data. We must pass an ID.
// axios.delete(`http://localhost:8000/api/products/${ID}`);
// Returns nothing
