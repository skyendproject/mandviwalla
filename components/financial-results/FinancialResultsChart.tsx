"use client";

import { colors } from "@/lib/colors";
import { Info } from "lucide-react";
import Image from "next/image";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Dot,
} from "recharts";

const data = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 15 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 70 },
    { name: "Mai", value: 60 },
    { name: "Jun", value: 30 },
];


const resources = [
    { title: "Annual Results (PDF)", href: "#" },
    { title: "Quarterly Results (PDF)", href: "#" },
    { title: "Half-Yearly Results (PDF)", href: "#" },
    { title: "Ratio Analysis Sheet (PDF)", href: "#" },
    { title: "Summary Results (PDF)", href: "#" },
];


export default function FinancialResultsChart() {
    return (
        <section className="w-full py-12 px-4 md:px-0 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <div className="text-sm text-gray-600 mb-1 border-l-2 border-blue-700 inline-block pl-2">Financial Results</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Financial Results</h2>
                    <p className="mx-auto text-base md:text-base max-w-2xl" style={{ color: colors.gray.text }}>
                        Performance snapshots, key indicators, and year-wise financial highlights of Mandviwalla MAUSER Plastic Industries Limited.<br />
                        These results provide stakeholders a clear overview of the Company’s profitability, liquidity, and operational strength.
                    </p>
                </div>
                <div className="bg-white rounded-md border border-[#8F8F8F91] mx-auto" style={{ maxWidth: 900 }}>
                    <div className="flex items-start justify-between px-8 pt-8 pb-4">
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">FY 2023–2024 (Latest)</div>
                            <div className="text-3xl font-semibold" style={{ color: colors.primary.blue }}>5.987,37</div>
                        </div>
                        <div className="mt-2">
                            <Info size={22} className="text-gray-400" />
                        </div>
                    </div>
                    <div className="border-t border-gray-200" />
                    <div className="px-8 py-6">
                        <ResponsiveContainer width="100%" height={260}>
                            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                                <XAxis dataKey="name" tick={{ fontSize: 16 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 16 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke={colors.primary.orange}
                                    strokeWidth={2.5}
                                    dot={{ r: 4, fill: colors.primary.blue, stroke: colors.primary.orange, strokeWidth: 2 }}
                                    activeDot={{ r: 6, fill: colors.primary.orange, stroke: colors.primary.blue, strokeWidth: 2 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-24">
                <Image src="/financial-results-summary.png"
                    alt="Summary"
                    width={1052}
                    height={1069}
                    className="border border-[#8F8F8F91]"
                />
            </div>

            <div className="container mx-auto max-w-5xl mt-20">
                {/* Section Label */}
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-0.5 h-8 md:h-8" style={{ backgroundColor: colors.primary.blue }}></div>
                    <span className="text-base md:text-lg" style={{ color: colors.gray.tagColor }}>
                        Legal Documents (Downloads / Resources)
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-10 md:mb-8">
                    Legal & Governance Documents
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
            </div>{ }
        </section>
    );
}
