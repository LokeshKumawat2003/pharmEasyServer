import React, { useEffect, useState } from "react";
import "../pageStyle/product.css"; 
import axios from "axios";

const ProductPage = () => {
  const URL = "https://pharmeasyserver-adov.onrender.com";
  const [product, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${URL}/productRout`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts(product);
  }, []);
  console.log(product);

  const userEmail = localStorage.getItem("Email");

  const addTocart = async (el) => {
    alert(`your items is add ${el.name}`)
    let obj = {
      name: el.name,
      email: userEmail,
      price: el.price,
      image: el.image,
      quantity: 1,
    };
    try {
      let res = await axios.post("https://pharmeasyserver-adov.onrender.com/cart", obj);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containers">
      {product.map((el, i) => {
        return (
          <div key={i} className="product-container">
            <div className="image-container">
              <img src={el.image} alt={el.name} className="image" />
            </div>

            <div className="details-container">
              <h1 className="title">Product Name {el.name}</h1>
              <p className="price">Price: ${el.price}</p>
              <p className="description"> About:{el.description}</p>

              <button className="button-cart" onClick={() => addTocart(el)}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;
