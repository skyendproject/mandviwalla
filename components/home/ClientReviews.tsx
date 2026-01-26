"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// COLORS
const PRIMARY_BLUE = "#1338BE";
const GRAY_TAG = "#727272";
const GRAY_TEXT = "#636363";




// Generic Card Component
interface CardProps {
    review: any;
    isCenter?: boolean;
}

const Card = ({ review, isCenter = false }: CardProps) => (
    <div
        className={`flex flex-col items-center justify-end transition-transform duration-300 ${isCenter ? "z-20 scale-120" : "z-10 scale-95"
            } overflow-hidden`}
        style={{ width: isCenter ? 400 : 350, minHeight: 390 }}
    >
        <div className="relative z-10 py-10 px-7 flex flex-col items-center text-center min-h-[335px]">
            <div className="absolute left-1/2 -top-11 -translate-x-1/2 z-20">
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden">
                    <Image
                        src={review.image}
                        alt={review.name}
                        width={72}
                        height={72}
                        className="w-full h-full rounded-full object-cover object-center"
                    />
                </div>
            </div>


            {/* Card Content */}
            <div className="rounded-md ml-4 pb-8 z-40">
                <h3 className="text-lg font-semibold mb-0.5">{review.name}</h3>
                <p className="text-xs mb-2" style={{ color: GRAY_TEXT }}>
                    {review.role}
                </p>
                <p className="text-xs leading-relaxed md:text-sm" style={{ color: GRAY_TEXT }}>
                    {review.review}
                </p>
            </div>
        </div>
    </div>
);


export default function ClientReviews() {
    const reviews = [
        { name: "Hannah Schmitt", role: "Businessman", image: "/hannah1.jpg", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim " },
        { name: "John Doe", role: "Designer", image: "/hannah2.jpg", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim " },
        { name: "Alice Smith", role: "Developer", image: "/hannah3.jpg", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim " },
        { name: "Bob Lee", role: "Manager", image: "/hannah1.jpg", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim " },
        // { name: "Jane Doe", role: "Entrepreneur", image: "/hannah2.jpg", review: "Faucibus venenatis felis id augue sit cursus." },
    ];

    const [active, setActive] = useState(0);

    const visible = () => {
        const len = reviews.length;
        const prev = (active - 1 + len) % len;
        const next = (active + 1) % len;
        return [
            { review: reviews[prev], isCenter: false },
            { review: reviews[active], isCenter: true },
            { review: reviews[next], isCenter: false },
        ];
    };

    return (
        <section className="w-full py-20 px-4 bg-[#fafbfc]">
            <div className="container mx-auto max-w-7xl">
                {/* HEADER */}
                <div className="flex flex-col gap-4 items-center text-center mb-16 max-w-3xl mx-auto">
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

                {/* CAROUSEL */}
                <div className="relative flex items-center">
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 z-20" onClick={() => setActive((prev) => (prev - 1 + reviews.length) % reviews.length)}>
                        <ChevronLeft size={36} color="#444" />
                    </button>
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 z-20" onClick={() => setActive((prev) => (prev + 1) % reviews.length)}>
                        <ChevronRight size={36} color="#444" />
                    </button>

                    <div className="flex justify-center items-stretch w-full gap-x-7">
                        {visible().map(({ review, isCenter }, idx) => (
                            <Card key={idx} review={review} isCenter={isCenter} />
                        ))}
                    </div>
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-3 mt-2">
                    {reviews.map((_, idx) => (
                        <span
                            key={idx}
                            className="w-2.5 h-2.5 rounded-full cursor-pointer transition-all"
                            style={{ backgroundColor: idx === active ? PRIMARY_BLUE : "#D1D5DB" }}
                            onClick={() => setActive(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
