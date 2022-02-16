import { Button } from "react-bootstrap";
import CategoryCard from "./component/category/CategoryCard";
import CategoryList from "./component/category/CategoryCard";

function App() {
  return (
    <div>
      <div className="welcome-img">
        <img
          alt="welcome"
          src="https://down.imgspng.com/download/0720/welcome_PNG32.png"
        />
      </div>
      <h1 className="welcome-text">
        welcome to the best place to please you hunger
      </h1>

      <Button variant="primary" size="lg">
        add category
      </Button>

      <CategoryCard />
      {/* <CategoryList /> */}
    </div>
  );
}

export default App;
