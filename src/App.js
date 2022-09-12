import React from "react";
import Nav from "./componet/welcome/Nav";
import Welcome from "./pages/Welcome/Welcome";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './ui/css/vendors/font-awesome.css'
import "react-lazy-load-image-component/src/effects/blur.css";
import "./ui/ui.css";
import Header from "./componet/welcome/Header";
import Product from "./componet/welcome/Product";
import Statistik from "./componet/welcome/Statistik";
import { Routes, Route } from "react-router-dom";
import ShowLists from "./pages/Welcome/ShowLists";
import Footer from "./componet/welcome/Footer";
import Category from "./pages/Welcome/Category";
import Davlat from "./Doniyor/DavlatPage/DavlatPage";
// import Erorr from '../../almaz_test/src/pages/Erorr';
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Welcome />} />
        <Route path="/product" element={ <Category/>} />
       
        <Route path="/:id" element={  <ShowLists/>} /> */}
        <Route path="/" element={  <Davlat/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
