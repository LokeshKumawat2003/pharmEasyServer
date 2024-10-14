const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  number: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid 10-digit number!`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [4, "Password should be at least 4 characters long"],
  },
});

const RegisterModel = mongoose.model("RegisterData", registerSchema);
module.exports = RegisterModel;
