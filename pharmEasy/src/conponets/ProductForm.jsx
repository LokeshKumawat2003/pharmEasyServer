
import React, { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, product }) => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: "",
    description: "",
  });
  
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (product) {
      setFormData(product);
      setImagePreview(product.image); 
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "image") {
      setImagePreview(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.price < 0) {
      alert("Price must be a positive number");
      return;
    }

    onSubmit(formData);
    setFormData({ image: "", name: "", price: "", description: "" });
    setImagePreview(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input
        type="text"
        name="image"
        placeholder="Product image URL"
        value={formData.image}
        onChange={handleChange}
        required
      />
      {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100%', height: 'auto', margin: '10px 0' }} />}
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Product</button>
    </form>
  );
};

export default ProductForm;
