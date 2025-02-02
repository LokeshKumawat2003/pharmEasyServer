
import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-item">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          )}
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p className="dic">{product.description}</p>
          <button onClick={() => onEdit(product)}>Edit</button>
          <button onClick={() => onDelete(product._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
