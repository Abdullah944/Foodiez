import React from "react";
import CategoryCard from "../component/category/CategoryCard";
import CategoryList from "../component/category/CategoryCard";
import Nav from "./Nav";
import CategoryModel from "./modal/CategoryModel";
import { Route, Switch } from "react-router";

const Home = () => {
  return (
    <div className="big-div">
      <img
        className="bk"
        alt="background"
        src="https://media.istockphoto.com/photos/culinary-background-with-traditional-ingredients-of-italian-cuisine-picture-id1278745986?b=1&k=20&m=1278745986&s=170667a&w=0&h=O7DjUu6D-mBNvwS68Ou_BmNF22a5XwrQgk2j9uV2Hs4="
      />

      <CategoryModel />

      {/* makeing prolem of display */}
      {/* <CategoryList /> */}
    </div>
  );
};

export default Home;

// add nav bar and topic\::
// <div>
{
  /* <Nav /> */
}

// <div className="welcome-img">
//   <img
//     alt="welcome"
//     src="https://down.imgspng.com/download/0720/welcome_PNG32.png"
//   />
// </div>
// <h1 className="welcome-text">
//   welcome to the best place to please you hunger
// </h1>
// </div>
