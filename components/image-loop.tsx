"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "images/home/1.jpg",
    "images/home/2.jpg",
    "images/home/3.jpg",
];

export default function ImageLoop() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt=""
                    className="absolute w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </AnimatePresence>
        </div>
    );
}