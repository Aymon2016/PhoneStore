import { createContext, useEffect, useState } from "react";

import { useRouter } from 'next/router'


export const Context = createContext()

const AppContext = ({ children }) => {

    const router = useRouter()


    const [categories, setCategories] = useState()
    const [products, setProducts] = useState()
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState()
    const [cartSubTotal, setCartSubTotal] = useState()

    const [user, setUser] = useState(null)



    useEffect(() => {

        let count = 0;
        cartItems.map((item) => (count += item.attributes.quantity))
        setCartCount(count)

        let subtotal = 0;
        cartItems.map(item => subtotal += item.attributes.Price * item.attributes.quantity)
        setCartSubTotal(subtotal)
    }, [cartItems])

    const handleAddToCart = (product, quantity) => {

        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id)
        if (index !== -1) {
            product.attributes.quantity = quantity;
            items[index].attributes.quantity += quantity;
        } else {

            items = [...items, product]
        }
        setCartItems(items)
    }

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter((p) => p.id !== product.id)
        setCartItems(items)
    }

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id)
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === 'dec') {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items)
    }



    return (

        <Context.Provider
            value={
                {
                    categories,
                    setCategories,
                    products,
                    setProducts,
                    cartItems,
                    setCartItems,
                    cartCount,
                    setCartCount,
                    cartSubTotal,
                    setCartSubTotal,
                    handleAddToCart,
                    handleRemoveFromCart,
                    handleCartProductQuantity,
                    user,
                    setUser,

                }
            }
        >
            {children}
        </Context.Provider>
    )
}
export default AppContext



