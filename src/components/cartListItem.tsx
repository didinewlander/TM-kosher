import React from "react";

const CartListItem = ({ image = "", name = "מוצר", amount = "100", price = "20" }) => {
    return (
        <div className="flex gap-2 justify-between items-center">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <div className="font-heebo font-extrabold">{name}</div>
                <div className="font-heebo font-extrathin text-xs">{amount} יחידות</div>
            </div>

            <div>
                <div className="font-heebo font-extrabold">{price}₪</div>
            </div>
            <div>
                <button className="border-red-500 border-2 border-solid text-red-600 px-2 py-1 text-sm font-heebo rounded">הסר</button>
            </div>
        </div>
    )
}

export default CartListItem;