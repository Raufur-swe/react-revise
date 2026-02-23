import React from 'react'
import { products } from "./data/products"
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className=' min-h-screen p-5 grid grid-cols-2  ' >
      <div className=' bg-amber-400 p-10 gap-5 ' >

        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}

      </div>
      <div className=' bg-amber-600'>
        <Cart />

      </div>
    </div>
  )
}

export default App