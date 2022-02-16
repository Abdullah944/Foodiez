import "./App.css";
import CategoryCard from "./component/category/CategoryCard";
import CategoryList from "./component/category/CategoryCard";

function App() {
  return (
    <div className="card">
      <h1> welcome to the best place to please you hunger</h1>
      <CategoryCard />
      {/* <CategoryList /> */}
    </div>
  );
}

export default App;
