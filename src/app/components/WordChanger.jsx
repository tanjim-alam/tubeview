"use client"
// components/WordChanger.js

import { useEffect, useState } from 'react';

const WordChanger = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change word every 2 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [words.length]);

    return <div>{words[currentWordIndex]}</div>;
};

export default WordChanger;
