"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const slides = [
    "/images/projects/hero.jpg",
    "/images/projects/project-1.jpg",
    "/images/projects/project-2.jpg",
];

export default function ProjectSlider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);

    // calculate width
    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.offsetWidth);
        }
    }, []);

    // animate to index
    useEffect(() => {
        controls.start({
            x: -index * width,
            transition: { type: "spring", stiffness: 80, damping: 20 },
        });
    }, [index, width, controls]);

    // wheel → horizontal
    const handleWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaY) > 30) {
            setIndex((prev) => {
                if (e.deltaY > 0) return Math.min(prev + 1, slides.length - 1);
                return Math.max(prev - 1, 0);
            });
        }
    };

    // keyboard
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                setIndex((prev) => Math.min(prev + 1, slides.length - 1));
            }
            if (e.key === "ArrowLeft") {
                setIndex((prev) => Math.max(prev - 1, 0));
            }
        };

        window.addEventListener("keydown", handleKey);
        window.addEventListener("wheel", handleWheel, { passive: true });

        return () => {
            window.removeEventListener("keydown", handleKey);
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <motion.div
                ref={containerRef}
                className="flex h-full cursor-grab active:cursor-grabbing"
                animate={controls}
                drag="x"
                dragConstraints={{ left: -((slides.length - 1) * width), right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                    const threshold = 100;

                    if (info.offset.x < -threshold) {
                        setIndex((prev) => Math.min(prev + 1, slides.length - 1));
                    } else if (info.offset.x > threshold) {
                        setIndex((prev) => Math.max(prev - 1, 0));
                    }
                }}
            >
                {slides.map((src, i) => (
                    <div key={i} className="min-w-full h-screen relative overflow-hidden">
                        <motion.img
                            src={src}
                            className="w-full h-full object-cover"
                            alt=""
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 6, ease: "easeOut" }}
                        />

                        {/* minimal caption */}
                        <div className="absolute bottom-6 left-6 text-white text-sm tracking-wide">
                            Project Name — Frame {i + 1}
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* progress indicator */}
            <div className="absolute bottom-6 right-6 text-white text-sm">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
            </div>
        </div>
    );
}