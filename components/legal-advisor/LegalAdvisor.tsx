"use client";

import Image from "next/image";
import { colors } from "@/lib/colors";

const resources = [
    { title: "Legal Advisory Agreement (PDF)", href: "#" },
    { title: "Regulatory Compliance Report (PDF)", href: "#" },
    { title: "Corporate Governance Policy (PDF)", href: "#" },
];

export default function LegalAdvisor() {
    return (
        <section className="w-full py-8 md:py-12 lg:py-16 bg-white px-4 md:px-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="text-center mb-8">
                    <div className="text-sm text-gray-600 mb-1 border-l-2 border-blue-700 inline-block pl-2">Legal Advisor</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted Legal Guidance & Corporate Compliance</h2>
                    <p className=" mx-auto text-base md:text-base" style={{ color: colors.gray.text }}>
                        At Mandviwalla Mauser Plastic Industries Limited (MMPL), ensuring full legal compliance and ethical corporate conduct is a top priority. Our external legal advisors are independent and experienced professionals, providing expert counsel in corporate law, regulatory compliance, and litigation. Their guidance supports our commitment to transparent governance, risk management, and long-term business sustainability.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-stretch mt-20">
                    <div className="relative w-full max-w-xs h-64 md:h-72 shrink-0 md:h-auto flex-1 md:max-w-md" style={{ minHeight: '280px' }}>
                        <Image
                            src="/legal-advisor.jpg"
                            alt="Auditor"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                        {/* Decorative blue squares */}
                        <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-700 rounded-tr-lg" />
                        <div className="absolute top-0 right-0 w-6 h-6 bg-blue-700 rounded-bl-lg" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center rounded-lg p-6 md:p-10" style={{ background: '#F9F9F9', minHeight: '280px' }}>
                        <div className="text-lg font-semibold mb-2" style={{ color: colors.gray.tagColor }}>Current Legal Advisor:</div>
                        <div className="text-base font-semibold mb-4" style={{ color: colors.gray.tagColor }}>Mohsin Tayebaly & Co. (Advocates & Corporate Consultants)</div>
                        <div className="italic text-gray-700 text-base md:text-lg font-semibold leading-snug" style={{ color: colors.gray.text }}>
                            Specializes in corporate law, regulatory compliance, contract drafting, and corporate governance advisory
                        </div>
                        <div className="italic text-gray-700 text-base md:text-lg font-semibold leading-snug mt-12" style={{ color: colors.gray.text }}>
                            Provides legal representation in corporate filings, AGM matters, and regulatory proceedings
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mb-8 mt-24">
                <div className="text-sm text-gray-600 mb-1 border-l-2 border-blue-700 inline-block pl-2">Commitment to Compliance</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ensuring Legal & Ethical Integrity</h2>
                <p className=" mx-auto text-base md:text-base" style={{ color: colors.gray.text }}>
                    MMPL ensures that all its legal dealings are fully compliant with applicable national and industry regulations. Our legal advisor helps us navigate complex corporate laws and regulatory environments, ensuring that decisions are made with full legal oversight and responsibility.
                </p>
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-10 md:mb-12">
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
            </div>

        </section>
    );
}
