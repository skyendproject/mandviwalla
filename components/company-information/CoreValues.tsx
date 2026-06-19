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
        <section className="w-full px-4 md:px-20 py-14 md:py-20">
            <div className="container mx-auto">
            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-black">
                Core Values
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {valuesData.map((value, idx) => (
                    <div
                        key={idx}
                        className="rounded-card border border-gray-200 border-l-4 bg-white shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition duration-300"
                        style={{ borderLeftColor: colors.primary.orange }}
                    >
                        <h3 className="text-lg md:text-xl font-semibold mb-2 text-ink">
                            {value.title}
                        </h3>
                        <p
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: colors.gray.text }}
                        >
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default CoreValues;
