

import React, { useState } from "react";
import "../pageStyle/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email= localStorage.getItem("Email")
      if(email){
        
      }
      const response = await axios.post(
        "https://pharmeasyserver-adov.onrender.com/login",
        formData
     
      );
      if (response.status === 200) {
        localStorage.setItem("Email",formData.email)
        setMessage("Login successful!");
        alert("user login")
        navigate("/");
      }

    } catch (error) {
      setMessage(error.response?.data?.message || "Error logging in");
    }
  };

  const Singup = () => {
    navigate("/singup");
  };

  return (
    <div>
      <div className="login-box">
        <div className="login-input">
          <form onSubmit={handleSubmit}>
            <div className="img-login">
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=360x0"
                alt=""
              />
            </div>
            <div className="email">
              <p>Enter Email</p>
              <input
                type="email"
                name="email"
                placeholder=" Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="password">
              <p>Enter Password</p>
              <input
                type="password"
                name="password"
                placeholder=" Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="btn">
              <button type="submit">Login</button>
            </div>
            {message && <p>{message}</p>}
            <p onClick={Singup}>Go to the register</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
