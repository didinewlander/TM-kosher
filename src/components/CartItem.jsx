import React, { useState } from 'react';

const CartItem = ({ image, title, description, price }) => {
  // סטאטים לכמות המוצרים בעגלה ולכמות שמשתמש הזין בידנית
  const [quantity, setQuantity] = useState(0);
  const [inputQuantity, setInputQuantity] = useState(quantity);

  // כתובת התמונה של המוצר, אם אין תמונה אז תמונת ברירת המחדל
  const img = image || "https://d226b0iufwcjmj.cloudfront.net/gs1-products/1492/large/7290004131074-891671/7290004131074/2023-06-06T18-44-59-946Z.jpg";

  // פונקציות להוספה והסרה של כמות המוצרים בעגלה
  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setInputQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setInputQuantity(quantity - 1);
    }
  };

  // פונקציה לשינוי הכמות המוצגת על ידי המשתמש
  const handleChange = (event) => {
    const { value } = event.target;
    if (value >= 0) {
      setQuantity(parseInt(value));
      setInputQuantity(parseInt(value));
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      {/* תמונת המוצר */}
      <img className="w-full" src={img} alt={title} />
      <div className="px-6 py-4 text-center">
        {/* שם המוצר */}
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* תיאור המוצר */}
        <p className="text-gray-700 text-base mb-2">{description}</p>
        {/* מחיר המוצר עם סמל הדולר */}
        <div className="flex items-center justify-center text-xl mb-2">
          <p className="text-gray-900 text-bm">TNUVA milk 3%</p>
        </div>
        <div className="flex items-center justify-center mb-2">
          <p className="text-red-500 text-xl font-bold mr-2">$3.5{price}</p>
        </div>
        {/* פאנל של כפתורים להוספה והסרה של כמות המוצרים */}
        <div className="flex items-center justify-center mb-4">
 
          {/* כפתור הורדה */}
          <button
            onClick={handleDecrement}
            className={`bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l ${quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={quantity === 0}
          >
            -
          </button>
          {/* קלט להצגת כמות המוצרים */}
          <input
            
            value={inputQuantity}
            onChange={handleChange}
            className="px-4 py-2 border-t border-b border-gray-200 text-center w-16"
          />
          {/* כפתור הוספה */}
          <button
            onClick={handleIncrement}
            className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            +
          </button>
        </div>
        {/* כפתור הוספה לעגלה, מוגבל כשאין כמות */}
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ${quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={quantity === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
