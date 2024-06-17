import React, { useState } from 'react';

const CartItem = ({ image, title, description, price }) => {
  const [quantity, setQuantity] = useState(1);
  const img = image || "https://d226b0iufwcjmj.cloudfront.net/gs1-products/1492/large/7290004131074-891671/7290004131074/2023-06-06T18-44-59-946Z.jpg";

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img className="w-full" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-red-500 text-xl mt-4">${price}</p>
        <div className="flex items-center mt-4">
          <button
            onClick={handleDecrement}
            className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            -
          </button>
          <span className="px-4 py-2 border-t border-b border-gray-200">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            +
          </button>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
          <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Remove
          </button>
          <button className="ml-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
