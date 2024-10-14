

const express = require("express");
const cartModel = require("../models/cart.model");
const CartRouter = express.Router();

CartRouter.get("/", async (req, res) => {
  try {
    let cartData = await cartModel.find();
    res.send(cartData);
  } catch (error) {
    res.status(500).send({ message: "Error fetching cart data", error });
  }
});


CartRouter.post("/", async (req, res) => {
  try {
    const cartItem = new cartModel(req.body);
    await cartItem.save();
    res.status(201).send({ message: "Product added to the cart" });
  } catch (error) {
    res.status(500).send({ message: "Error adding product to the cart", error });
  }
});


CartRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const updatedCartItem = await cartModel.findByIdAndUpdate(
      id,
      { quantity },
      { new: true } 
    );
    if (updatedCartItem) {
      res.send({ message: "Quantity updated successfully", updatedCartItem });
    } else {
      res.status(404).send({ message: "Cart item not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error updating cart item", error });
  }
});

CartRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCartItem = await cartModel.findByIdAndDelete(id);
    if (deletedCartItem) {
      res.send({ message: "Item removed from the cart" });
    } else {
      res.status(404).send({ message: "Cart item not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error removing item from cart", error });
  }
});

module.exports = CartRouter;
