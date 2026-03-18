"use client";

import { projects } from "@/lib/projects";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = projects.map((project) => ({
    src: project.previewImage,
    href: project.href,
}));

export default function ImageLoop() {
    const [index, setIndex] = useState(0);
    const currentImage = images[index];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <Link
                href={currentImage.href}
                className="block h-full w-full cursor-pointer"
                aria-label="Open project"
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={currentImage.src}
                        alt=""
                        className="absolute h-full w-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </Link>
        </div>
    );
}
