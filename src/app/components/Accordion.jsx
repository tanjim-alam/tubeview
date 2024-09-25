'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import PropTypes from 'prop-types';

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(true);
    const [maxHeight, setMaxHeight] = useState('0px');
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        }
    }, []);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    return (
        <div className="rounded-sm shadow-[0_2px_2px_rgba(0,0,0,0.10)] bg-primary">
            <button
                className="flex justify-between items-center w-full p-3 text-left focus:outline-none"
                onClick={toggleAccordion}
            >
                <span className="font-medium text-white text-lg lg:text-2xl">{title}</span>
                <span className='text-white'>{isOpen ? <FaMinus /> : <FaPlus />}</span>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-max-height duration-500 ease-in-out"
                style={{
                    maxHeight: maxHeight,
                }}
            >
                <div className="p-4 bg-white">
                    <p className="text-black">{content}</p>
                </div>
            </div>
        </div>
    );
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Accordion;
