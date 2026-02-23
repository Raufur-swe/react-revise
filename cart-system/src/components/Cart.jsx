import React from 'react'
import { useCart } from '../hooks/useCart'

const Cart = () => {
    const { cart, incressCart, decressCart, totalPrice } = useCart()
    return (
        <div>

            <h2>
                Cart
            </h2>
            <div>
                {cart.map((item) => (
                    <div key={item} >

                        <p>
                            {item.title} : ${item.price} X {item.quantity}
                        </p>
                <button onClick={()=> incressCart(item.id)}  className=' bg-green-300 p-2 rounded-full mr-4'>+</button>
                <button onClick={()=> decressCart(item.id)} className=' bg-red-300 p-2 rounded-full mr-4' >-</button>
                     
                    </div>
                ))}
                <h3>
                    total = ${totalPrice}
                </h3>
            </div>
        </div>
    )
}

export default Cart