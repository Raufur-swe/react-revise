import React from 'react'
import {useCart} from "../hooks/useCart"

const ProductCard = ({product}) => {
    const {addCart} = useCart()
  return (
    <div className="max-w-xs rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-300">
      <img
        src= {product.image}
        
        className="w-full h-56 object-cover"
      />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-xl font-bold text-indigo-600">
         ${product.price}
        </p>

        <button
          onClick={()=>addCart(product)}
          className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard