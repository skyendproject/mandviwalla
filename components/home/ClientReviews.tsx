"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// COLORS
const PRIMARY_BLUE = "#1338BE";
const GRAY_TAG = "#727272";
const GRAY_TEXT = "#636363";

const BRAND_LOGOS = [
    { name: "Reliance", src: "/assets/brand-logo/reliance.jpg" },
    { name: "Hascol", src: "/assets/brand-logo/hascol-logo.jpg" },
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

    const goPrev = () => {
        setActive((prev) => (prev - 1 + BRAND_LOGOS.length) % BRAND_LOGOS.length);
    };

    const goNext = () => {
        setActive((prev) => (prev + 1) % BRAND_LOGOS.length);
    };

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActive((prev) => (prev + 1) % BRAND_LOGOS.length);
        }, 2000);

        return () => window.clearInterval(interval);
    }, []);

    const getVisibleLogos = (count: number) => {
        return Array.from({ length: count }, (_, index) => {
            const logoIndex = (active + index) % BRAND_LOGOS.length;
            return BRAND_LOGOS[logoIndex];
        });
    };

    return (
        <section className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* HEADER */}
                <div className="flex flex-col gap-4 items-center text-center mb-4 max-w-3xl mx-auto">
                    <div className="border-l-4 pl-4" style={{ borderColor: PRIMARY_BLUE }}>
                        <p className="text-sm md:text-base 2xl:text-lg font-semibold uppercase tracking-wide" style={{ color: GRAY_TAG }}>
                            WHAT CLIENTS SAY?
                        </p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Satisfied Clients</h2>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: GRAY_TEXT }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* LOGO CAROUSEL */}
                <div className="relative flex items-center justify-center min-h-[360px] px-16 md:px-20">
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

                    <div className="flex w-full justify-center md:hidden gap-8 items-center">
                        {getVisibleLogos(2).map((logo) => (
                            <div key={logo.src} className="relative h-20 w-[120px]">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    className="object-contain"
                                    sizes="120px"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:flex w-full justify-center gap-20 lg:gap-24 items-center">
                        {getVisibleLogos(4).map((logo) => (
                            <div key={logo.src} className="relative h-32 w-[200px] lg:w-[220px]">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 1024px) 200px, 220px"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-3 mt-7">
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
