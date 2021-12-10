import React from "react";
import "./CheckoutProduct.css";
import { AiFillStar } from "react-icons/ai";

import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="image" src={image} alt="" />
      <div className="info">
        <p className="title">{title}</p>
        <p className="price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <AiFillStar className="star" />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
