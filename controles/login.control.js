const express = require("express");
const RegisterModel = require("../models/register.model");
const loginRout = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

loginRout.post("/", async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await RegisterModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign({ id: user._id, email: user.email }, "lokesh", {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "Login successful", token, user });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error logging in", error: error.message });
  }
});
module.exports = loginRout;
