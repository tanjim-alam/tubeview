import React from 'react';
import CartPage from "./CartPage"

export const generateMetadata = () => {
    return {
        title: "Cart -  Tubeviews",
        description: "Cart -  Tubeviews"
    }
}

function page() {
    return <CartPage />
}

export default page