import React from 'react';
import CartPage from "./CartPage"

export const generateMetadata = () => {
    return {
        title: "Cart -  GoFamy",
        description: "Cart -  GoFamy",
        alternates: {
            canonical: 'https://www.gofamy.com/cart',
        }
    }
}

function page() {
    return <CartPage />
}

export default page