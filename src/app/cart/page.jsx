import React from 'react';
import CartPage from "./CartPage"

export const generateMetadata = () => {
    return {
        title: "Cart -  GoFamy",
        description: "Cart -  GoFamy"
    }
}

function page() {
    return <CartPage />
}

export default page