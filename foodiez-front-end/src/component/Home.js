import React from "react";
import CategoryCard from "../component/category/CategoryCard";
import CategoryList from "../component/category/CategoryCard";
import Nav from "./Nav";
import CategoryModel from "./modal/CategoryModel";
import { Route, Switch } from "react-router";

const Home = () => {
  return (
    <div>
      {/* <Nav /> */}

      {/* <div className="welcome-img">
        <img
          alt="welcome"
          src="https://down.imgspng.com/download/0720/welcome_PNG32.png"
        />
      </div>
      <h1 className="welcome-text">
        welcome to the best place to please you hunger
      </h1> */}

      <CategoryModel />

      {/*  to use the modal for the add button */}

      <CategoryList />
    </div>
  );
};

export default Home;
