import React, { useState } from "react";
import "../componetnsStyle/navbar.css";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidbar";

function NavBar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("Email");

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  const login = () => {
    navigate("/login");
  };

  const home = () => {
    navigate("/");
  };

  const offer = () => {
    navigate("/product");
  };

  const cart = () => {
    navigate("/cart");
  };

  const userProfile = () => {
    navigate("/profile");
  };

  return (
    <div>
   
      {isSidebarVisible && (
        <div className="sid">
          <Sidebar hideSidebar={toggleSidebar} />
        </div>
      )}


      <nav>
        <div className="nav">
          <div className="nav-box">
            <div className="sid-icons" onClick={toggleSidebar}>
              <AiOutlineAlignLeft />
            </div>
            <div className="logo-web" onClick={home}>
              <img
                src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=360x0"
                alt="Logo"
              />
            </div>
            <div className="line"></div>
            <div className="address">
              <p className="elect-icons">
                <img
                  src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=32x0"
                  alt="Express Delivery"
                />
                <p> Express delivery to</p>
                <FiChevronDown />
              </p>
              <div className="p-pincode">400001 Mumbai</div>
            </div>
          </div>

          {/* Search Box */}
          <div className="input-box">
            <div className="inputfild">
              <CiSearch />
              <input type="text" placeholder="Search for" className="input" />
              <button>Search</button>
            </div>
          </div>

          {/* User Login and Offer/Cart Section */}
          <div className="nav-box1">
            <div className="phone-download-box">
              <div className="app-download">
                <IoPhonePortraitOutline />
                <p>Download App</p>
              </div>
              {isLogin ? (
                <div className="login" onClick={userProfile}>
                  <FiUser />
                  <p>Profile</p>
                </div>
              ) : (
                <div className="login" onClick={login}>
                  <FiUser />
                  <p>Hello, Login</p>
                </div>
              )}
            </div>
            <div className="offer-cart">
              <div className="offer" onClick={offer}>
                <MdOutlineSell />
                <p>Offers</p>
              </div>
              <div className="cart" onClick={cart}>
                <PiShoppingCartSimple />
                <p>Cart</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="down-product-type">
        <div className="product-type">
          <a href="#Medicine" onClick={offer}>
            Medicine
          </a>
          <a href="#Lab Tests">Lab Tests</a>
          <a href="#Healthcare">Healthcare</a>
          <a href="#">Health Blogs</a>
          <a href="#PLUS Offers">PLUS Offers</a>
          <a href="#Value Store">Value Store</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
