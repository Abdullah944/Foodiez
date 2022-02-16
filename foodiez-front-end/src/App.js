import { Button } from "react-bootstrap";
import CategoryCard from "./component/category/CategoryCard";
import CategoryList from "./component/category/CategoryCard";

function App() {
  return (
    <div>
      <h1> welcome to the best place to please you hunger</h1>
      <Button variant="primary">add category</Button>
      <CategoryCard />
      {/* <CategoryList /> */}
    </div>
  );
}

export default App;
