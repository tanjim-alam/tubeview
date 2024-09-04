'use client';
import React, { useState, useRef } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";


function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" rounded-sm shadow-[0_2px_2px_rgba(0,0,0,0.10)] bg-primary">
            <button
                className="flex justify-between text-white items-center w-full p-3 text-left focus:outline-none"
                onClick={toggleAccordion}
            >
                <span className="font-medium text-white text-lg lg:text-2xl">{title}</span>
                <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-max-height duration-500 ease-in-out"
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                }}
            >
                <div className="p-4 bg-white">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;