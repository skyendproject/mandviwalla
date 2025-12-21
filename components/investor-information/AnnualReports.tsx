"use client";

import Image from "next/image";
import { colors } from "@/lib/colors";
import { Check } from "lucide-react";

const years = [2024, 2023, 2022, 2021];

const resources = [
    { title: "Half-Yearly & Quarterly Reports", href: "#" },
    { title: "Half-Yearly Reports", href: "#" },
    { title: "Quarterly Financial Statements", href: "#" },
];

export default function AnnualReports() {
    return (
        <section className="w-full py-12 px-4 md:px-0 bg-[#F6F6F6]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
                <div className="relative w-[420px] h-[340px] rounded-lg overflow-hidden shrink-0 bg-white">
                    <Image
                        src="/annual-report.jpg"
                        alt="Annual Reports"
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>
                <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
                    <div className="text-md text-gray-600 mb-1 border-l-2 border-blue-700 pl-2">Annual Reports</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Annual Reports</h2>
                    <p className="text-gray-700 mb-4 text-base md:text-base">
                        Access complete annual performance reports, audited financial statements, and director reports.<br />
                        <span className="font-semibold">Available Years:</span>
                    </p>
                    <ul className="space-y-4 mt-2">
                        {years.map((year) => (
                            <li key={year} className="flex items-center gap-3 text-lg text-gray-900">
                                <Check style={{ color: colors.blue.secondary }} width={25} height={17} />
                                <span style={{ color: colors.gray.text }} className="text-md">{year}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container mx-auto max-w-5xl mt-20">
                {/* Section Label */}
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-0.5 h-8 md:h-8" style={{ backgroundColor: colors.primary.blue }}></div>
                    <span className="text-base md:text-lg" style={{ color: colors.gray.tagColor }}>
                        Key Investor Documents
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-10 md:mb-8">
                    Key Investor Documents
                </h2>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {resources.map((resource, idx) => (
                        <a
                            key={idx}
                            href={resource.href}
                            className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-md text-white font-medium text-sm md:text-base transition-all hover:opacity-90"
                            style={{ backgroundColor: colors.primary.blue }}
                        >
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 23.375H19.25V20.625H0M19.25 8.25H13.75V0H5.5V8.25H0L9.625 17.875L19.25 8.25Z" fill="white" />
                            </svg>
                            <span className="text-sm">{resource.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
