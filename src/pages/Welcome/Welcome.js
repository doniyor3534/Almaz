import Header from "../../componet/welcome/Header";
import React from "react";
import Nav from "../../componet/welcome/Nav";
import Product from "../../componet/welcome/Product";
import Statistik from "../../componet/welcome/Statistik";
import Footer from "../../componet/welcome/Footer";

const Welcome = () => {
  return (
    <div>
      <Header />
      <Product />
      <Statistik />
  
    </div>
  );
};

export default Welcome;
