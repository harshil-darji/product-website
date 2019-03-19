import React from "react";

function Product(props) {
  return (
    <div className="product col-lg-3 col-md-6 col-sm-12 col-xs-12">
      <figure>
        <img src={props.imgUrl} alt={props.name} />
        <figcaption>{props.name}</figcaption>
        <span className="price-strike">₹{props.oldPrice}</span>
        <span className="price">₹{props.newPrice}</span>
        <a href="#" className="button">
          Buy Now
        </a>
      </figure>
    </div>
  );
}

export default Product;
