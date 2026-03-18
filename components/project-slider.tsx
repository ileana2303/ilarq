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

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        const getSlideWidth = () => {
            const firstSlide = container.querySelector<HTMLElement>("[data-slide]");
            return firstSlide ? firstSlide.offsetWidth + 32 : 0;
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
            <div className="grid h-full place-items-center">
                <p className="text-sm uppercase tracking-[0.3em]">No slides available.</p>
            </div>
        );
    }

    return (
        <section className="relative h-full text-white">
            <div
                ref={containerRef}
                className="flex h-full items-center gap-6 overflow-x-auto overflow-y-hidden px-0 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {slides.map((src, index) => (
                    <figure
                        key={src}
                        data-slide
                        className="relative h-full min-w-[92%] overflow-hidden border-y first:border-l last:border-r"
                    >
                        <img
                            src={src}
                            alt={`${project.title} image ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </figure>
                ))}
            </div>

            <div className="pointer-events-none absolute bottom-8 right-8 flex items-end justify-end text-xs uppercase tracking-[0.3em] text-white/80">
                <p>
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(slides.length).padStart(2, "0")}
                </p>
            </div>
        </section>
    );
}
