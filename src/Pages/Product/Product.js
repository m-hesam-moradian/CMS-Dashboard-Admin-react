import React from 'react'
import { Link } from 'react-router-dom';
import "./Product.css"
export default function Product() {
  return (
    <div className="Product">
      <h3>Product</h3>
      <Link to={"/Products"}>
        <button>Create</button>
      </Link>
    </div>
  );
}
