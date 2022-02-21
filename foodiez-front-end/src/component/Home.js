import React from "react";
import CategoryList from "./category/CategoryList";
import CategoryModel from "./modal/CategoryModel";

const Home = () => {
  return (
    <div className="home-div ">
      <img
        className="bk"
        alt="background"
        src="https://media.istockphoto.com/photos/culinary-background-with-traditional-ingredients-of-italian-cuisine-picture-id1278745986?b=1&k=20&m=1278745986&s=170667a&w=0&h=O7DjUu6D-mBNvwS68Ou_BmNF22a5XwrQgk2j9uV2Hs4="
      />
      {/* <CategoryModel /> */}

      {/* makeing prolem of display ( I THINK IT'S FIXED) */}
      <CategoryList />
    </div>
  );
};

export default Home;

// ?--------------------------  add  topic\------------------------------------------::
// <div>

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
// ?-------------------------- -----------------------------------------------::
