import React, { useEffect, useState } from "react";
import "../componetnsStyle/search.css";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
// import { react } from "@vitejs/plugin-react";
// import ImageSlider from "./Slider";

const Search = () => {
  let email = localStorage.getItem("Email");
  const URL = "https://pharmeasyserver-adov.onrender.com";
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery) {
      alert("Please enter a search term");
      return;
    }
    try {
      const response = await axios.get(`https://pharmeasyserver-adov.onrender.com/productRout`, {
        params: { q: searchQuery },
      });

      const filteredResults = response.data.filter((el) =>
        el.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(filteredResults);
      console.log(searchResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };


const addTocart = async (el) => {
  alert(`your items is add ${el.name}`)
  let obj = {
    email:email,
    name: el.name,
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



  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="search">
        <div className="dot">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
        <div className="search-headr">
          <div className="headr">
            <p className="search-had">What are you looking for?</p>
            <p className="prescription">Order with prescription.</p>
          </div>
          <div className="search-box">
            <div className="inputBox">
              <CiSearch />
              <input
                type="text"
                placeholder="Search for"
                className="input2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>

      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <div key={index}>
                <img src={result.image} alt="" />
                <li>Product name {result.name}</li>
                <li>price{result.price}</li>
                <button onClick={()=>addTocart(result)}>Add to cart</button>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
