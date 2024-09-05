"use client"
import React, { useState } from 'react';
import NavItems from './NavItems';
import Link from 'next/link';

function NavLinks({ navLink, toggleMenu }) {
    const [activeId, setActiveId] = useState(null);
    function showNavLinks(id) {
        setActiveId(id === activeId ? null : id); // Toggle the active id
    }
    return (
        <>
            <li className="relative group hidden lg:block">
                <Link href={"#"} className='font-medium text-lg'>{navLink.name}</Link>
                <ul className="absolute left-[-50%] hidden group-hover:block bg-white shadow-lg mt-1 top-5 rounded-md w-[250px]">
                    {navLink.services.map((item, i) => <NavItems key={i} item={item} />)}
                </ul>
            </li>
            <li className="relative group w-full lg:hidden">
                <Link href={"#"} onClick={() => showNavLinks(navLink.id)} className='font-medium text-md text-white  w-full block py-1 px-3' style={{ backgroundColor: `${navLink.color}` }}>{navLink.name}</Link>
                <ul className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${navLink.id === activeId ? 'max-h-[500px]' : 'max-h-0'}`}>
                    {navLink.services.map((item, i) => (
                        <li key={i} onClick={toggleMenu} className="pl-4 py-2 text-lg font-medium text-black"><Link href={item.slug}>{item.title}</Link></li>
                    ))}
                </ul>
            </li>
        </>
    )
}

export default NavLinks