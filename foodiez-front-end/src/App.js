import Home from "./component/Home";
import { Routes, Route } from "react-router";
import CategoryList from "./component/category/CategoryList";
import CategoryDetail from "./component/category/CategoryDetail";
import Nav from "./component/Nav";

function App() {
  return (
    <div id="page-top">
      {/* <Nav /> */}
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={<CategoryList />}></Route>
        <Route path="/category/:slug" element={<CategoryDetail />} />
        {/* slug is the data will be given by the user. in our case it's from the data file. */}
        {/* <Route path="/recipes" element={<RecipesList />}></Route>
      <Route path="/recipes/:slug" element={<RecipesDetails />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
