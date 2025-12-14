"use client";

import React from "react";
import { colors } from "@/lib/colors";

const valuesData = [
    {
        title: "Integrity",
        description: "We uphold the highest ethical standards in all business practices."
    },
    {
        title: "Quality",
        description: "Every product reflects global benchmarks in durability and safety."
    },
    {
        title: "Innovation",
        description: "We continuously improve with advanced technology and design."
    },
    {
        title: "Sustainability",
        description: "Focused on eco-friendly solutions to protect future generations."
    },
    {
        title: "Customer Commitment",
        description: "Building long-term partnerships through trust and excellence."
    }
];

const CoreValues = () => {
    return (
        <div className="container mx-auto px-4 md:px-20 py-8 md:py-16">
            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
                Core Values
            </h2>

            {/* Values Grid */}
            <div className="max-w-6xl mx-auto">
                {/* Top Row - 3 items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-10">
                    {valuesData.slice(0, 3).map((value, idx) => (
                        <div key={idx} className="text-center px-4">
                            <h3 
                                className="text-lg md:text-xl font-semibold mb-2 md:mb-3"
                                style={{ color: colors.gray.text }}
                            >
                                {value.title}
                            </h3>
                            <p 
                                className="text-sm md:text-base"
                                style={{ color: colors.gray.text }}
                            >
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Row - 2 items centered */}
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20">
                    {valuesData.slice(3, 5).map((value, idx) => (
                        <div key={idx} className="text-center px-4 md:w-80">
                            <h3 
                                className="text-lg md:text-xl font-semibold mb-2 md:mb-3"
                                style={{ color: colors.gray.text }}
                            >
                                {value.title}
                            </h3>
                            <p 
                                className="text-sm md:text-base"
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
