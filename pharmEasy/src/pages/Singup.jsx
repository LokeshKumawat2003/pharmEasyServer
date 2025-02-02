import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pageStyle/singup.css";

const Singup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "https://pharmeasyserver-adov.onrender.com/register",
        formData
      );
      alert("user register")

      if (response.status === 201) {
        setMessage("User registered successfully!");
        navigate("/login");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error registering user");
      console.log(error);
    }
  };

  const Login = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="singup-box">
        <div className="singup-input">
          <form onSubmit={handleSubmit}>
            <div className="img-singup">
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=360x0"
                alt=""
              />
            </div>

            <div className="emai">
              <p>Enter Name</p>
              <input
                type="text"
                name="name"
                placeholder=" Enter name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="emai">
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

            <div className="emai">
              <p>Enter Number</p>
              <input
                type="text"
                name="number"
                placeholder=" Enter number"
                value={formData.number}
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
              <button type="submit">Signup</button>
            </div>
            {message && <p>{message}</p>}
            <p onClick={() => Login()}>Go to the login</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
