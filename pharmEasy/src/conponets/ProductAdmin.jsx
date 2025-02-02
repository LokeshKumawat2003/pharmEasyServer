import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import "../componetnsStyle/productadmin.css";
import axios from "axios";
const Url = "https://pharmeasyserver-adov.onrender.com";

const ProductAdmin = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${Url}/productRout`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (product) => {
    try {
      const response = await axios.post(`${Url}/productRout`, product);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleUpdateProduct = async (product) => {
    try {
      await axios.put(`${Url}/productRout/${product._id}`, product);
      setProducts(products.map((p) => (p._id === product._id ? product : p)));
      console.log(product);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = async (id) => {
    console.log(id);
    try {
      await axios.delete(`${Url}/productRout/${id}`);
      setProducts(products.filter((p) => p._id !== id));
      setEditingProduct(null);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Product Admin Page</h1>

        <ProductForm
          onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
          product={editingProduct}
        />
        <ProductList
          products={products}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      </div>
    </div>
  );
};

export default ProductAdmin;
