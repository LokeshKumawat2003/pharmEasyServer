import React from "react";
import Home from "../pages/Home";
import ProductPage from "../pages/Product";
import SimpleCartPage from "../pages/Cart";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import NavBar from "../conponets/NavBar";
import Footer from "../conponets/Footer";
import { Route, Routes } from "react-router-dom";
import Profile from "../conponets/profile";
import ProductAdmin from "../conponets/ProductAdmin";

const AllRouts = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<ProductAdmin />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<SimpleCartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRouts;
