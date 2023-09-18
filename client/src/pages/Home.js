import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Landing from "../components/Landing/index";

const Home = () => {
  return (
    <div className="container">
      {/* <Landing /> */}
      <Landing/>
      <Cart />
      {/* <CategoryMenu /> */}
      <ProductList />
      
    </div>
  );
};

export default Home;
