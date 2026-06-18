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
        <section className="w-full py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-4 md:px-12 xl:px-24 2xl:px-32 bg-white">
            <div className="container mx-auto max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px]">
                {/* HEADER */}
                <div className="flex flex-col gap-4 items-center text-center mb-4 xl:mb-8 max-w-3xl xl:max-w-4xl mx-auto">
                    <div className="border-l-4 pl-4" style={{ borderColor: PRIMARY_BLUE }}>
                        <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl font-semibold uppercase tracking-wide" style={{ color: GRAY_TAG }}>
                            WHAT CLIENTS SAY?
                        </p>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-6xl 2xl:text-[64px] font-bold">Satisfied Clients</h2>
                    {/* <p className="text-sm md:text-base leading-relaxed" style={{ color: GRAY_TEXT }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p> */}
                </div>

                {/* LOGO CAROUSEL */}
                <div className="relative flex items-center justify-center min-h-[200px] md:min-h-[220px] xl:min-h-[260px] 2xl:min-h-[300px] mt-6 md:mt-8 px-16 md:px-20 xl:px-24">
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

                    <div className="hidden md:flex w-full justify-center gap-16 lg:gap-20 xl:gap-24 2xl:gap-28 items-center">
                        {getVisibleLogos(4).map((logo) => (
                            <div key={logo.src} className="relative h-40 lg:h-44 xl:h-52 2xl:h-60 w-[260px] lg:w-[300px] xl:w-[340px] 2xl:w-[380px]">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 1024px) 260px, (max-width: 1280px) 300px, (max-width: 1536px) 340px, 380px"
                                />
                            </div>
                        ))}
                    </div>
                </div>

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
