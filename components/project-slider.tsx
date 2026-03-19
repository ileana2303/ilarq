"use client";

import Image from "next/image";
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

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        const getSlideWidth = () => {
            const firstSlide = container.querySelector<HTMLElement>("[data-slide]");

            if (!firstSlide) {
                return 0;
            }

            const gap = Number.parseFloat(window.getComputedStyle(container).columnGap || "0");
            return firstSlide.offsetWidth + gap;
        };

        const updateActiveIndex = () => {
            const slideWidth = getSlideWidth();

            if (slideWidth <= 0) {
                return;
            }

            setActiveIndex(
                Math.min(
                    slides.length - 1,
                    Math.max(0, Math.round(container.scrollLeft / slideWidth))
                )
            );
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
    }, [projectId, slides.length]);

    if (!project || slides.length === 0) {
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
                {slides.map((src, index) => (
                    <figure
                        key={src}
                        data-slide
                        className="relative h-full min-w-full overflow-hidden border-y sm:min-w-[82%] lg:min-w-[92%] xl:min-w-[60%]"
                    >
                        <Image
                            src={src}
                            alt={`${project.title} image ${index + 1}`}
                            fill
                            sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 92vw, (min-width: 640px) 82vw, 100vw"
                            className="object-cover"
                        />
                    </figure>
                ))}
            </div>

            <div className="pointer-events-none absolute bottom-5 right-5 flex items-end justify-end text-[11px] uppercase tracking-[0.3em] text-white/80 sm:bottom-8 sm:right-8 sm:text-xs">
                <p>
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(slides.length).padStart(2, "0")}
                </p>
            </div>
        </section>
    );
}
