import { ShoppingCart } from "lucide-react"
import React from "react"
import CartListItem from "./cartListItem"

function Cart() {
    const items = []




    return (
        <div className="w-80" >
            <div className="shadow-md rounded-lg">
                <div className={`flex ${items.length == 0 ? 'blur-sm' : ""} select-none rounded-b-3xl rounded-t-xl bg-gradient-to-b from-yellow-300 to-yellow-500 h-8 items-center justify-center text-white drop-shadow-xl font-heebo font-bold`}>
                    עגלת מוצרים
                </div>
                {items.length ? (<div>
                    <div>
                        <div dir="rtl" className="flex flex-col p-3 gap-3">
                            {items.map((item, index) => (
                                <div key={index}>
                                    <CartListItem />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div>
                        <div className="flex w-full pt-6">

                            <button className="flex justify-center gap-2 bg-blue-500 text-white p-2 w-full font-heebo rounded">
                                לתשלום
                                <ShoppingCart />
                            </button>
                        </div>
                    </div>
                </div>) : (<div>
                    <div className="flex justify-center items-center h-screen">
                        <p className="text-gray-500">Cart is empty</p>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Cart