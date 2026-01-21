"use client";

import Image from "next/image";
import { colors } from "@/lib/colors";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientReviews() {
    const reviews = [
        {
            name: "Hannah Schmitt",
            role: "Businessman",
            image: "/hannah1.jpg",
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
        },
        {
            name: "Hannah Schmitt",
            role: "Businessman",
            image: "/hannah2.jpg",
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
        },
        {
            name: "Hannah Schmitt",
            role: "Businessman",
            image: "/hannah3.jpg",
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
        },
    ];

    return (
        <section className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="flex flex-col gap-4 items-center text-center mb-20 max-w-3xl mx-auto">
                    <div
                        className="border-l-4 pl-4"
                        style={{ borderColor: colors.primary.blue }}
                    >
                        <p className="text-sm md:text-base 2xl:text-lg font-semibold uppercase tracking-wide" style={{ color: colors.gray.tagColor}}>
                            WHAT CLIENTS SAY?
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Satisfied Clients
                    </h2>

                    <p
                        className="text-sm md:text-base leading-relaxed"
                        style={{ color: colors.gray.text }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.
                    </p>
                </div>

                {/* CAROUSEL AREA */}
                <div className="relative">

                    {/* ARROWS */}
                    <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20">
                        <ChevronLeft size={40} />
                    </button>
                    <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20">
                        <ChevronRight size={40} />
                    </button>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 md:gap-x-12 px-6 md:px-16">

                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className={`relative flex justify-center transition-all duration-300 ${index === 1
                                        ? "md:scale-110 z-20"
                                        : "md:scale-95 z-10"
                                    }`}
                            >
                                {/* BLUE BACK SHAPE */}
                                {index !== 1 && (
                                    <div
                                        className="absolute -z-10 w-[260px] h-[300px] rounded-[40px]"
                                        style={{
                                            backgroundColor: colors.primary.blue,
                                            transform:
                                                index === 0
                                                    ? "rotate(-6deg) translate(-18px, 14px)"
                                                    : "rotate(6deg) translate(18px, 14px)",
                                        }}
                                    />
                                )}

                                {/* WHITE CARD */}
                                <div
                                    className={`relative bg-white rounded-[40px] px-8 py-12 flex flex-col items-center text-center ${index === 1
                                            ? "shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                                            : "shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                                        }`}
                                >
                                    {/* PROFILE */}
                                    <div className="relative mb-6">
                                        <div
                                            className="absolute -top-1 -left-1 w-[92px] h-[92px] rounded-full"
                                            style={{
                                                border: `2px solid ${colors.primary.blue}`,
                                                transform: "rotate(-12deg)",
                                            }}
                                        />
                                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                                            <Image
                                                src={review.image}
                                                alt={review.name}
                                                width={80}
                                                height={80}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* NAME */}
                                    <h3 className="text-lg font-semibold mb-1">
                                        {review.name}
                                    </h3>

                                    {/* ROLE */}
                                    <p
                                        className="text-sm mb-4"
                                        style={{ color: colors.gray.text }}
                                    >
                                        {review.role}
                                    </p>

                                    {/* QUOTE */}
                                    <svg
                                        width="32"
                                        height="26"
                                        viewBox="0 0 40 32"
                                        fill="none"
                                        className="mb-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 18.6667C0 13.6 1.6 9.46667 4.8 6.26667C8 3.06667 12 1.06667 16.8 0.266666L17.6 4.26667C14.6667 5.06667 12.2667 6.66667 10.4 9.06667C8.53333 11.4667 7.6 14.2667 7.6 17.4667C9.06667 17.4667 10.4 17.9333 11.6 18.8667C12.8 19.8 13.6 21.0667 14 22.6667C14.4 24.2667 14.2667 25.8 13.6 27.2667C12.9333 28.7333 11.8667 29.8667 10.4 30.6667C8.93333 31.4667 7.33333 31.6 5.6 31.0667C3.86667 30.5333 2.53333 29.4667 1.6 27.8667C0.533333 26.1333 0 24.2667 0 22.2667V18.6667Z"
                                            fill={colors.primary.blue}
                                        />
                                    </svg>

                                    {/* TEXT */}
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: colors.gray.text }}
                                    >
                                        {review.review}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-3 mt-16">
                    {[0, 1, 2, 3, 4].map((dot) => (
                        <span
                            key={dot}
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                                backgroundColor:
                                    dot === 0
                                        ? colors.primary.blue
                                        : "#D1D5DB",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
