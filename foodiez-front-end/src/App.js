import Home from "./component/Home";
import { Routes, Route } from "react-router";
import CategoryList from "./component/category/CategoryList";
import Nav from "./component/Nav";
import RecipesList from "./component/recipes/RecipesList";
import RecipesDetails from "./component/recipes/RecipesDetails";
import UserIngredientsRecipe from "./component/user/UserIngredientsRecipe";

function App() {
  return (
    <div id="page-top ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<CategoryList />}></Route>
        {/* slug is the data will be given by the user. in our case it's from the data file. */}
        <Route path="/recipes" element={<RecipesList />}></Route>
        <Route path="/recipe/:slug" element={<RecipesDetails />}></Route>
        <Route path="/user" element={<UserIngredientsRecipe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
