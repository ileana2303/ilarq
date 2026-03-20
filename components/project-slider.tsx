"use client";

import { useEffect, useRef, useState } from "react";
import { getProjectById } from "@/lib/projects";

type Props = {
    projectId: string;
};

export default function ProjectSlider({ projectId }: Props) {
    const project = getProjectById(projectId);
    const slides = project?.slides ?? [];
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [failedSlides, setFailedSlides] = useState<string[]>([]);
    const visibleSlides = slides.filter((src) => !failedSlides.includes(src));

    useEffect(() => {
        setFailedSlides([]);
    }, [projectId]);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        const getSlides = () => Array.from(container.querySelectorAll<HTMLElement>("[data-slide]"));

        const updateActiveIndex = () => {
            const slideElements = getSlides();

            if (slideElements.length === 0) {
                return;
            }

            const scrollLeft = container.scrollLeft;
            let closestIndex = 0;
            let closestDistance = Number.POSITIVE_INFINITY;

            slideElements.forEach((slide, index) => {
                const distance = Math.abs(slide.offsetLeft - scrollLeft);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        const handleWheel = (event: WheelEvent) => {
            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
                return;
            }

            event.preventDefault();
            container.scrollLeft += event.deltaY * 0.9;
        };

        setActiveIndex(0);
        container.scrollTo({ left: 0, behavior: "auto" });
        updateActiveIndex();
        container.addEventListener("scroll", updateActiveIndex, { passive: true });
        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            container.removeEventListener("scroll", updateActiveIndex);
            container.removeEventListener("wheel", handleWheel);
        };
    }, [projectId, visibleSlides.length]);

    if (!project || visibleSlides.length === 0) {
        return (
            <div className="grid h-full min-h-[50svh] place-items-center lg:min-h-0">
                <p className="text-sm uppercase tracking-[0.3em]">No slides available.</p>
            </div>
        );
    }

    return (
        <section className="relative h-full min-h-[50svh] text-white lg:min-h-0">
            <div
                ref={containerRef}
                className="flex h-full items-center gap-4 overflow-x-auto overflow-y-hidden px-0 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 sm:py-6"
            >
                {visibleSlides.map((src) => (
                    <figure
                        key={src}
                        data-slide
                        className="relative h-full min-w-full overflow-hidden sm:min-w-[82%] lg:min-w-[92%] xl:min-w-[60%]"
                    >
                        <img
                            src={src}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                            decoding="async"
                            draggable={false}
                            onError={(event) => {
                                event.currentTarget.style.display = "none";
                                setFailedSlides((current) =>
                                    current.includes(src) ? current : [...current, src]
                                );
                            }}
                        />
                    </figure>
                ))}
            </div>

            <div className="pointer-events-none absolute bottom-5 right-5 flex items-end justify-end text-[11px] uppercase tracking-[0.3em] text-white/80 sm:bottom-8 sm:right-8 sm:text-xs">
                <p>
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(visibleSlides.length).padStart(2, "0")}
                </p>
            </div>
        </section>
    );
}
