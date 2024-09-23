import Link from 'next/link'
import React from 'react'

function NavItems({ item }) {
    return (
        <li><Link href={item.slug} className="block px-4 py-2 text-black hover:bg-primary hover:text-white">{item.title}</Link></li>
    )
}

export default NavItems