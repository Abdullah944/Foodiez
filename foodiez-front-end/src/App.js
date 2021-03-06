import Home from "./component/Home";
import { Routes, Route } from "react-router";
import CategoryList from "./component/category/CategoryList";
import CategoryDetail from "./component/category/CategoryDetail";
import Nav from "./component/Nav";
import RecipesDetails from "./component/recipes/RecipesDetails";
import IngredientDetail from "./component/ingredient/ingridentDetail";

function App() {
  return (
    <div id="page-top ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<CategoryList />}></Route>
        {/* slug is the data will be given by the user. in our case it's from the data file. */}
        <Route path="/recipes" element={<RecipesDetails />}></Route>
        <Route path="/recipes/:slug" element={<IngredientDetail />}></Route>
        <Route path="/category/:slug" element={<CategoryDetail />}></Route>
        {/* <Route path="/recipes/:slug" element={<ingredientDetail />}></Route> */}
        {/* <Route path="/user" element={<UserIngredientsRecipe />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
