import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../componetnsStyle/sidbar.css";
import { IoCloseCircleSharp } from "react-icons/io5";

const Sidebar = ({ hideSidebar }) => {
  const navigate = useNavigate();
  const login = localStorage.getItem("Email");
  const handleLogout = () => {
    localStorage.clear();
    hideSidebar();
    navigate("/login");
  };
  const Login = () => {
    hideSidebar();
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">
     
        <IoCloseCircleSharp onClick={hideSidebar} />
        <h2>PharmEasy</h2>
      </div>
      <div className="sidebar-links">
        <NavLink
          to="/profile"
          activeClassName="active-link"
          onClick={hideSidebar}
        >
          Profile
        </NavLink>
        <NavLink
          to="/product"
          activeClassName="active-link"
          onClick={hideSidebar}
        >
          Offers
        </NavLink>
        <NavLink
          to="/notifications"
          activeClassName="active-link"
          onClick={hideSidebar}
        >
          My Order
        </NavLink>
        {login ? (
          <NavLink
            to="/login"
            activeClassName="active-link"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login" activeClassName="active-link" onClick={Login}>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
