"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    // localStorage.setItem('cartItems', JSON.stringify(cartItems));
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));

        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        calculateTotalPrice();
    }, [cartItems]);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const calculateTotalPrice = () => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
    };

    const removeItemFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, totalPrice, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
