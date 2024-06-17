import CartItem from "../components/CartItem"
import React from "react"
const ProductsPage = ({ productsArray }) => {

    let products = productsArray ? productsArray : [{}, {}, {}, {}, {}, {}, {}, {}]

    return (
        <>
            <div className="w-full">
                <div className="grid grid-cols-4 gap-4">
                    {products.map((product) => (
                        <CartItem product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductsPage