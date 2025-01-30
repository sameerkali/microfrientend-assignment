import React, { useState, useEffect, lazy, Suspense} from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FoodList from "./components/FoodList.jsx";
import ProductList from "./components/ProductList.jsx";

import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <FoodList />
      <ProductList />
      <Footer />
    </>
  )
}

export default App;
