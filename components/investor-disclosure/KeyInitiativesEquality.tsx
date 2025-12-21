"use client";

import Image from "next/image";
import { colors } from "@/lib/colors";
import { Check } from "lucide-react";

const initiatives = [
    "Zero-Tolerance Policy Against Harassment",
    "Equal Opportunity Employment Practices",
    "Leadership Development Programs for Women",
    "Representation of Women at Senior Management & Board Levels",
];

export default function KeyInitiativesEquality() {
    return (
        <section className="w-full py-12 px-4 md:px-0 bg-[#F6F6F6]">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
                    <div className="text-sm text-gray-600 mb-1 border-l-2 border-blue-700 pl-2 font-semibold uppercase">Why Choose Us</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Initiatives Driving Equality</h2>
                    <ul className="mb-8 space-y-3">
                        {initiatives.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-lg text-gray-900">
                                <Check style={{ color: colors.blue.secondary }} />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-md font-semibold text-white text-base"
                        style={{ background: colors.primary.blue }}
                        download
                    >
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="white" d="M10 2a.75.75 0 01.75.75v9.19l2.72-2.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 111.06-1.06l2.72 2.72V2.75A.75.75 0 0110 2z" /><path fill="white" d="M3.75 17a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z" /></svg>
                        GENDER-PAY-GAP-PDF.PDF
                    </a>
                </div>
                {/* Overlapping Images */}
                <div className="flex-1 flex items-center justify-center relative min-w-[420px] min-h-[420px] mb-10 -mt-4">
                    {/* Left (Document) Image */}
                    <div className="absolute left-0 top-8 z-10 w-[370px] h-[480px]">
                        <Image
                            src="/investor-disclosure-1.png"
                            alt="Document"
                            fill
                            className="rounded-lg shadow-md"
                            priority
                        />
                    </div>
                    {/* Right (Illustration) Image, overlapping and above, starts at 70% of 1st image */}
                    <div
                        className="absolute top-[120px] z-20 w-[340px] h-[260px]"
                        style={{ left: '259px' }} // 70% of 370px (first image width)
                    >
                        <Image
                            src="/investor-disclosure-2.png"
                            alt="Illustration"
                            fill
                            className="object-contain rounded-lg shadow-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="text-center mt-24">
                <div className="text-md text-gray-900 border-l-2 inline-block pl-2 mb-2" style={{ borderColor: colors.primary.blue }}>
                    Our Commitment
                </div>
                <p className="mx-auto text-base max-w-2xl text-gray-600">
                    We reaffirm our dedication to advancing gender equality and empowering women across every level of our organization.
                </p>
            </div>
        </section>
    );
}
