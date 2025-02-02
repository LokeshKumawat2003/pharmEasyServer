import React, { useEffect, useState } from "react";
import "../pageStyle/cart.css";
import axios from "axios";

const SimpleCartPage = () => {
  let email = localStorage.getItem("Email");
  const URL = `https://pharmeasyserver-adov.onrender.com`;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${URL}/cart`);
        let userData = response.data;
        let data = userData.filter((el, i) => el.email === email);
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const updateQuantity = async (id, newQuantity) => {
    try {
      await axios.put(`${URL}/cart/${id}`, { quantity: newQuantity });
      setCartItems(
        cartItems.map((item) =>
          item._id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`${URL}/cart/${id}`);
      setCartItems(cartItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

  };
  const Total =(price)=>{
   alert(`your total product price is ${price}`)
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>${item.price}</p>

                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn-cart"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total Rs:- {calculateTotal().toFixed(2)}</h2>
            <button className="checkout-button" onClick={()=>Total(calculateTotal())}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleCartPage;
