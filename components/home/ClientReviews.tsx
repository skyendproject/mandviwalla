"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const PRIMARY_BLUE = "#1338BE";

const BRAND_LOGOS = [
    { name: "Reliance", src: "/assets/brand-logo/reliance.jpg" },
    { name: "Act Polymers", src: "/assets/brand-logo/act-logo.jpg" },
    { name: "Matco Foods", src: "/assets/brand-logo/matco-logo.jpg" },
    { name: "Habib", src: "/assets/brand-logo/habib-logo.jpg" },
    { name: "IMG 1346 ARPL", src: "/assets/brand-logo/IMG1346ARPL.jpg" },
    { name: "OG", src: "/assets/brand-logo/og-logo.jpg" },
    { name: "Oleo", src: "/assets/brand-logo/oleo-logo.jpg" },
    { name: "PG", src: "/assets/brand-logo/pg-logo.jpg" },
    { name: "Prime", src: "/assets/brand-logo/prime-logo.jpg" },
    { name: "Tufail", src: "/assets/brand-logo/tufail-logo.jpg" },
];

const SPEED_PX_PER_SEC = 60;

export default function ClientReviews() {
    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const pausedRef = useRef(false);
    const touchStartX = useRef<number | null>(null);
    const lastTouchX = useRef<number | null>(null);

    useEffect(() => {
        const scroller = scrollerRef.current;
        const track = trackRef.current;
        if (!scroller || !track) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let rafId = 0;
        let lastTs = performance.now();

        const tick = (ts: number) => {
            const dt = (ts - lastTs) / 1000;
            lastTs = ts;
            if (!pausedRef.current) {
                scroller.scrollLeft += SPEED_PX_PER_SEC * dt;
            }
            const half = track.scrollWidth / 2;
            if (scroller.scrollLeft >= half) scroller.scrollLeft -= half;
            else if (scroller.scrollLeft < 0) scroller.scrollLeft += half;
            rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, []);

    const getStep = () => {
        const track = trackRef.current;
        if (!track) return 200;
        const child = track.firstElementChild as HTMLElement | null;
        if (!child) return 200;
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.columnGap || style.gap || "0");
        return child.offsetWidth + gap;
    };

    const goPrev = () => {
        const scroller = scrollerRef.current;
        const track = trackRef.current;
        if (!scroller || !track) return;
        scroller.scrollLeft -= getStep();
        const half = track.scrollWidth / 2;
        if (scroller.scrollLeft < 0) scroller.scrollLeft += half;
    };

    const goNext = () => {
        const scroller = scrollerRef.current;
        const track = trackRef.current;
        if (!scroller || !track) return;
        scroller.scrollLeft += getStep();
        const half = track.scrollWidth / 2;
        if (scroller.scrollLeft >= half) scroller.scrollLeft -= half;
    };

    const onTouchStart = (e: React.TouchEvent) => {
        pausedRef.current = true;
        touchStartX.current = e.touches[0].clientX;
        lastTouchX.current = e.touches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        const scroller = scrollerRef.current;
        const track = trackRef.current;
        if (!scroller || !track || lastTouchX.current === null) return;
        const x = e.touches[0].clientX;
        const delta = lastTouchX.current - x;
        lastTouchX.current = x;
        scroller.scrollLeft += delta;
        const half = track.scrollWidth / 2;
        if (scroller.scrollLeft >= half) scroller.scrollLeft -= half;
        else if (scroller.scrollLeft < 0) scroller.scrollLeft += half;
    };

    const onTouchEnd = () => {
        touchStartX.current = null;
        lastTouchX.current = null;
        pausedRef.current = false;
    };

    return (
        <section className="w-full py-14 md:py-20 px-4 md:px-12 bg-surface">
            <div className="container mx-auto max-w-7xl">
                <SectionHeader
                    align="center"
                    eyebrow="Trusted By"
                    title="Our Clients & Partners"
                    accentColor={PRIMARY_BLUE}
                    titleClassName="font-bold"
                    className="mb-4 xl:mb-8 max-w-3xl xl:max-w-4xl mx-auto"
                />

                <Reveal>
                    <div className="relative px-12 md:px-16">
                        <button
                            type="button"
                            aria-label="Previous logos"
                            onClick={goPrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#d6d6d6] bg-[#ececec] flex items-center justify-center hover:bg-white transition"
                        >
                            <ChevronLeft size={26} color="#9f9f9f" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next logos"
                            onClick={goNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#d6d6d6] bg-[#ececec] flex items-center justify-center hover:bg-white transition"
                        >
                            <ChevronRight size={26} color="#9f9f9f" />
                        </button>

                        <div
                            ref={scrollerRef}
                            className="w-full overflow-hidden mt-2 touch-pan-y select-none"
                            onPointerEnter={(e) => { if (e.pointerType === "mouse") pausedRef.current = true; }}
                            onPointerLeave={(e) => { if (e.pointerType === "mouse") pausedRef.current = false; }}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <div
                                ref={trackRef}
                                className="flex gap-16 md:gap-20 lg:gap-24 whitespace-nowrap items-center"
                                style={{ width: "max-content" }}
                            >
                                {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, idx) => (
                                    <div
                                        key={`${logo.src}-${idx}`}
                                        className="inline-flex items-center justify-center shrink-0 relative h-24 w-[140px] md:h-32 md:w-[200px] lg:h-36 lg:w-[240px]"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.name}
                                            fill
                                            sizes="(max-width: 768px) 140px, (max-width: 1024px) 200px, 240px"
                                            className="object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
                                            unoptimized
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
