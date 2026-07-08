"use client";

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
                    <div className="text-sm md:text-base  mb-1 border-l-2 inline-block pl-2" style={{ color: colors.gray.tagColor, borderColor: colors.primary.blue }}>Legal Advisor</div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted Legal Guidance & Corporate Compliance</h2>
                    <p className=" mx-auto text-base md:text-base" style={{ color: colors.gray.text }}>
                        At MandviWalla Mauser Plastic Limited Industries(MWMP), ensuring full legal compliance and ethical corporate conduct is a top priority. Our external legal advisors are independent and experienced professionals, providing expert counsel in corporate law, regulatory compliance, and litigation. Their guidance supports our commitment to transparent governance, risk management, and long-term business sustainability.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-20">
                    {/* Legal Advisor */}
                    <div className="relative flex flex-col justify-center rounded-card p-6 md:p-10 border-l-4" style={{ background: '#F9F9F9', borderColor: colors.primary.blue, minHeight: '280px' }}>
                        <div className="text-sm md:text-base font-semibold mb-2 uppercase tracking-wide" style={{ color: colors.gray.tagColor }}>Legal Advisor</div>
                        <div className="text-xl md:text-2xl font-bold mb-3 text-black">
                            Tasawur Ali Hashmi
                        </div>
                        <div className="text-base font-semibold mb-4" style={{ color: colors.primary.blue }}>Advocate</div>
                        <div className="italic text-base md:text-lg leading-snug" style={{ color: colors.gray.text }}>
                            Provides legal representation and advisory on litigation, contract matters, and general legal affairs of the Company.
                        </div>
                    </div>

                    {/* Corporate Advisor */}
                    <div className="relative flex flex-col justify-center rounded-card p-6 md:p-10 border-l-4" style={{ background: '#F9F9F9', borderColor: colors.primary.blue, minHeight: '280px' }}>
                        <div className="text-sm md:text-base font-semibold mb-2 uppercase tracking-wide" style={{ color: colors.gray.tagColor }}>Corporate Advisor</div>
                        <div className="text-xl md:text-2xl font-bold mb-3 text-black">
                            M/S Hussain Advisors
                        </div>
                        <div className="text-base font-semibold mb-4" style={{ color: colors.primary.blue }}>Islamabad</div>
                        <div className="italic text-base md:text-lg leading-snug" style={{ color: colors.gray.text }}>
                            Provides corporate advisory services covering regulatory compliance, corporate filings, AGM matters, and corporate governance.
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mb-8 mt-10 lg:mt-14">
                <div className="text-sm md:text-base  mb-1 border-l-2 inline-block pl-2" style={{ color: colors.gray.tagColor, borderColor: colors.primary.blue }}>Commitment to Compliance</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ensuring Legal & Ethical Integrity</h2>
                <p className=" mx-auto text-base md:text-base" style={{ color: colors.gray.text }}>
                    MWMP ensures that all its legal dealings are fully compliant with applicable national and industry regulations. Our legal advisor helps us navigate complex corporate laws and regulatory environments, ensuring that decisions are made with full legal oversight and responsibility.
                </p>
            </div>

            <div className="container mx-auto max-w-5xl mt-10 lg:mt-14 pt-8">
                {/* Section Label */}
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-0.5 h-6 md:h-6" style={{ backgroundColor: colors.primary.blue }}></div>
                    <span className="text-sm md:text-base mb-1 inline-block" style={{ color: colors.gray.tagColor }}>
                        Legal Documents (Downloads / Resources)
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-black text-center mb-10 md:mb-12">
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
