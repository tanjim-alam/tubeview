"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCartPlus, FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks"
import { useCart } from '../context/CartContext';
import navLinksData from "../constant/general/navlinksData.js"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinksDatas = navLinksData.slice(0, 7);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const { cartItems } = useCart();
    // console.log(cartItems);
    return (
        <>
            <div className='bg-white border-b sticky top-0 z-50 hidden lg:block h-[55px]'>
                <nav className='xl:w-[90%] 2xl:w-[80%] lg:w-[99%] m-auto flex justify-between items-center p-2'>
                    <div>
                        <Link href={"/"}>
                            <h4 className='text-3xl font-bold text-secondary'>Tube<span className='bg-primary text-white ml-0.5'>Views</span></h4>
                        </Link>
                    </div>
                    <div>
                        <ul className='flex xl:gap-10 gap-8'>
                            {
                                navLinksDatas.map((navLink, i) => <NavLinks key={i} navLink={navLink} />)
                            }
                        </ul>
                    </div>
                    <div>
                        <Link href={"/cart"} className=' p-1 relative text-black flex'>
                            <p className=' text-xl'><FaCartPlus /></p>
                            <span className=' absolute top-[-5px] right-[-4px]'>{cartItems.length || 0}</span>
                        </Link>
                    </div>
                </nav>
            </div>
            <div className='sticky top-0 z-50 lg:hidden block bg-white border-b'>
                <nav className='w-full md:w-[90%] m-auto flex flex-col justify-between'>
                    <div className='flex justify-between items-center p-2  w-full'>
                        <div>
                            <Link href={"/"}>
                                <h4 className='text-3xl font-bold text-secondary'>Tube<span className='bg-primary text-white ml-0.5'>Views</span></h4>
                            </Link>
                        </div>
                        <div className='flex justify-center gap-5 items-center'>
                            <div>
                                <Link href={"/cart"} className=' p-1 relative flex text-black'>
                                    <p className=' text-xl text-black'><FaCartPlus /></p>
                                    <span className=' absolute top-[-5px] right-[-4px] text-black'>{cartItems.length || 0}</span>
                                </Link>
                            </div>
                            <div>
                                <button onClick={toggleMenu} className='bg-primary p-2 text-white text-2xl'><FaBars /></button>
                            </div>
                        </div>
                    </div>
                    <div className={`fixed top-14 right-0  overflow-y-scroll h-full z-50 bg-white w-[96%] sm:w-[40%] transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <ul className='flex flex-col lg:gap-10 gap-2 py-2 w-full text-black'>
                            {navLinksData.map((navLink, i) => <NavLinks key={i} navLink={navLink} toggleMenu={toggleMenu} />)}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
