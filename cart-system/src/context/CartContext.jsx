import { createContext, useState } from "react";



const CartContext = createContext()


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addCart = (product) => {

        setCart((prev) => {
            const exit = prev.find((item) => item.id === product.id)

            if (exit) {
                return prev.map((item) => item.id === product.id ?
                    { ...item, quantity: item.quantity + 1 } : item)
            } return [...prev, { ...product, quantity: 1 }]
        })
    }

    const incressCart = (id) => {
        setCart((prev) =>
            prev.map((item) => item.id === id ?
                { ...item, quantity: item.quantity + 1 } : item)
        )
    }

    const decressCart = (id) => {
        setCart((prev) =>
            prev.map((item) => item.id === id ?
                { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0)
        )
    }

    const totalPrice = cart.reduce(
        (total, item) => total + item.quantity * item.price , 0
    )

    return (
        <CartContext.Provider value={{cart , addCart , incressCart , decressCart , totalPrice}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext