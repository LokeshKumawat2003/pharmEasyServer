
const express = require('express');
const ProductModle = require('../models/product.modle');
const ProductRouter = express.Router();


ProductRouter.post('/', async (req, res) => {
  try {
    const newProduct = new ProductModle(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

ProductRouter.get('/', async (req, res) => {
  try {
    const products = await ProductModle.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

ProductRouter.get('/:id', async (req, res) => {
  try {
    const product = await ProductModle.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

ProductRouter.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await ProductModle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


ProductRouter.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await ProductModle.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = ProductRouter;
