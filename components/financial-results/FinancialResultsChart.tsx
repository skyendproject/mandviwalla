"use client";

import { colors } from "@/lib/colors";

const resources = [
    { title: "Q3 – March 2026 Results (PDF)", href: "/financial-result-march26.pdf" },
    { title: "Q2 – December 2025 Results (PDF)", href: "/financial-result-december25.pdf" },
    { title: "Q1 – September 2025 Results (PDF)", href: "/financial-result-september25.pdf" },
    // { title: "Q3 – March 2025 Results (PDF)", href: "/financial-result-march25.pdf" },
    // { title: "Q2 – December 2024 Results (PDF)", href: "/financial-result-december24.pdf" },
    // { title: "Q1 – September 2024 Results (PDF)", href: "/financial-result-september24.pdf" },
];


export default function FinancialResultsChart() {
    return (
        <section className="w-full py-12 px-4 md:px-0 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <div className="text-sm md:text-base mb-1 border-l-2 inline-block pl-2 font-semibold" style={{ color: colors.gray.tagColor, borderColor: colors.primary.blue }}>Financial Results</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Financial Results</h2>
                    <p className="mx-auto text-base md:text-base max-w-4xl" style={{ color: colors.gray.text }}>
                        Performance snapshots, key indicators, and year-wise financial highlights of Mandviwalla Mauser Plastic Industries Limited (MMPIL).<br />
                        These results provide stakeholders a clear overview of the Company’s profitability, liquidity, and operational strength.
                    </p>
                </div>
            </div>

            <div className="container mx-auto max-w-5xl mt-20">
                {/* Section Label */}
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-0.5 h-6 md:h-6" style={{ backgroundColor: colors.primary.blue }}></div>
                    <span className="text-sm md:text-base font-semibold" style={{ color: colors.gray.tagColor }}>
                        Legal Documents (Downloads / Resources)
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xlfont-semibold text-black text-center mb-10 md:mb-8">
                    Legal & Governance Documents
                </h2>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {resources.map((resource, idx) => (
                        <a
                            key={idx}
                            href={resource.href}
                            download
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
            </div>{ }
        </section>
    );
}
