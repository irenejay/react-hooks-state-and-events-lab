import React, { useState } from "react";

const Item = ({ id, name, category }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    // Toggle the isInCart state when the button is clicked
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      {name} - {category}
      <button onClick={handleAddToCart}>
  {isInCart ? "Remove from Cart" : "Add to Cart"}
</button>

    </li>
  );
};

export default Item;
