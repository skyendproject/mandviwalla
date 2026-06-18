"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

// COLORS
const PRIMARY_BLUE = "#1338BE";

const BRAND_LOGOS = [
    { name: "Reliance", src: "/assets/brand-logo/reliance.jpg" },
    // { name: "Hascol", src: "/assets/brand-logo/hascol-logo.jpg" },
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

export default function ClientReviews() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const goPrev = () => {
        setActive((prev) => (prev - 1 + BRAND_LOGOS.length) % BRAND_LOGOS.length);
    };

    const goNext = () => {
        setActive((prev) => (prev + 1) % BRAND_LOGOS.length);
    };

    useEffect(() => {
        if (paused) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const interval = window.setInterval(() => {
            setActive((prev) => (prev + 1) % BRAND_LOGOS.length);
        }, 3500);

        return () => window.clearInterval(interval);
    }, [paused]);

    const getVisibleLogos = (count: number) => {
        return Array.from({ length: count }, (_, index) => {
            const logoIndex = (active + index) % BRAND_LOGOS.length;
            return BRAND_LOGOS[logoIndex];
        });
    };

    return (
        <section className="w-full py-8 md:py-10 lg:py-12 xl:py-12 2xl:py-14 px-4 md:px-12 xl:px-16 2xl:px-20 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* HEADER */}
                <SectionHeader
                    align="center"
                    eyebrow="Trusted By"
                    title="Our Clients & Partners"
                    accentColor={PRIMARY_BLUE}
                    titleClassName="font-bold"
                    className="mb-4 xl:mb-8 max-w-3xl xl:max-w-4xl mx-auto"
                />

                {/* LOGO CAROUSEL */}
                <Reveal>
                <div
                    className="relative flex items-center justify-center min-h-[200px] md:min-h-[220px] xl:min-h-[220px] 2xl:min-h-[240px] mt-6 md:mt-8 px-16 md:px-20 xl:px-24"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <button
                        type="button"
                        aria-label="Previous logo"
                        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-[#d6d6d6] bg-[#ececec] flex items-center justify-center hover:bg-white transition"
                        onClick={goPrev}
                    >
                        <ChevronLeft size={30} color="#9f9f9f" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next logo"
                        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-[#d6d6d6] bg-[#ececec] flex items-center justify-center hover:bg-white transition"
                        onClick={goNext}
                    >
                        <ChevronRight size={30} color="#9f9f9f" />
                    </button>

                    <div className="flex w-full justify-center md:hidden gap-10 items-center">
                        {getVisibleLogos(2).map((logo) => (
                            <div key={logo.src} className="relative h-28 w-[160px]">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    className="object-contain"
                                    sizes="160px"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:flex w-full justify-center gap-16 lg:gap-20 xl:gap-20 2xl:gap-24 items-center">
                        {getVisibleLogos(4).map((logo) => (
                            <div key={logo.src} className="group relative h-40 lg:h-44 xl:h-44 2xl:h-48 w-[260px] lg:w-[300px] xl:w-[300px] 2xl:w-[320px]">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    className="object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                                    sizes="(max-width: 1024px) 260px, (max-width: 1280px) 300px, (max-width: 1536px) 340px, 380px"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                </Reveal>

                {/* DOTS */}
                <div className="flex justify-center gap-3 mt-4 md:mt-5">
                    {BRAND_LOGOS.map((logo, idx) => (
                        <button
                            key={logo.src}
                            type="button"
                            className="w-2.5 h-2.5 rounded-full cursor-pointer transition-all"
                            style={{ backgroundColor: idx === active ? PRIMARY_BLUE : "#D1D5DB" }}
                            onClick={() => setActive(idx)}
                            aria-label={`Go to ${logo.name}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
