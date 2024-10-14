const express = require("express");
const RegisterModel = require("../models/register.model");
const bcrypt = require("bcrypt");
const RegisterRouter = express.Router();

RegisterRouter.get("/", async (req, res) => {
  const existingUser = await RegisterModel.find();
  res.send(existingUser);
});

RegisterRouter.post("/", async (req, res) => {
  const { name, email, number, password } = req.body;

  try {
    const existingUser = await RegisterModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already registered with this email",
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    let data = {
      name,
      email,
      number,
      password: hashedPassword,
    };
    const registerData = new RegisterModel(data);

    const savedData = await registerData.save();
    res.status(201).json({
      message: "User registered successfully",
      data: savedData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
});

module.exports = RegisterRouter;
