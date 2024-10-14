const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
  email: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, require: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const cartModle = mongoose.model("CartItem", cartSchema);
module.exports = cartModle;
