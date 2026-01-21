"use client";

import React from "react";
import { colors } from "@/lib/colors";

const valuesData = [
    { title: "Integrity", description: "We uphold the highest ethical standards in all business practices." },
    { title: "Quality", description: "Every product reflects global benchmarks in durability and safety." },
    { title: "Innovation", description: "We continuously improve with advanced technology and design." },
    { title: "Sustainability", description: "Focused on eco-friendly solutions to protect future generations." },
    { title: "Customer Commitment", description: "Building long-term partnerships through trust and excellence." }
];

const CoreValues = () => {
    return (
        <div className="container mx-auto px-4 md:px-20 py-8 md:py-16">
            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-12 text-black">
                Core Values
            </h2>

            <div className="max-w-6xl mx-auto">
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-6 md:mb-10">
                    {valuesData.slice(0, 3).map((value, idx) => (
                        <div
                            key={idx}
                            className="text-center px-2 md:px-4 max-w-sm mx-auto"
                        >
                            <h3
                                className="text-lg md:text-xl font-semibold mb-1 md:mb-3"
                                style={{ color: colors.gray.text }}
                            >
                                {value.title}
                            </h3>
                            <p
                                className="text-sm md:text-base leading-relaxed text-left"
                                style={{ color: colors.gray.text }}
                            >
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-20">
                    {valuesData.slice(3, 5).map((value, idx) => (
                        <div
                            key={idx}
                            className="text-center px-2 md:px-4 max-w-sm mx-auto md:w-80"
                        >
                            <h3
                                className="text-lg md:text-xl font-semibold mb-1 md:mb-3"
                                style={{ color: colors.gray.text }}
                            >
                                {value.title}
                            </h3>
                            <p
                                className="text-sm md:text-base leading-relaxed text-left"
                                style={{ color: colors.gray.text }}
                            >
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
