import React from "react";
import Labitems from "./Labitems";
import ImageSlider from "../conponets/Slider";
import ShortProduct from "../conponets/ShortProduct";
import Search from "../conponets/Search";
import ProductPage from "./Product";


const Home = () => {
  return (
    <div>
      <Search />
      <Labitems />
      <ImageSlider />
      <ShortProduct />
      <ProductPage />
    </div>
  );
};

export default Home;
