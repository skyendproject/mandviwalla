import Image from "next/image";
import { Check } from "lucide-react";
import { colors } from "@/lib/colors";

const standards = [
    "Corporate and securities laws",
    "Environmental and industrial regulations",
    "Transparent reporting and auditing practices",
    "Health, safety, and quality certifications"
];

export default function ComplianceReporting() {
    return (
        <div className="w-full bg-white py-12 md:py-16 px-4 md:px-20">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left - Image */}
                    <div className="w-full">
                        <Image
                            src="/compliance-reporting.jpg"
                            alt="Compliance and Reporting"
                            width={570}
                            height={400}
                            className="w-full h-auto object-cover rounded-lg"
                            quality={100}
                        />
                    </div>

                    {/* Right - Content */}
                    <div className="flex flex-col gap-4">
                        {/* Section Label */}
                        <div className="flex items-center justify-start gap-3 mb-3">
                            <div className="w-0.5 h-8 md:h-8" style={{ backgroundColor: colors.primary.blue }}></div>
                            <span className="text-base md:text-lg" style={{ color: colors.gray.tagColor }}>
                                Compliance & Reporting
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black">
                            Compliance & Reporting Standards
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-base text-justify leading-relaxed" style={{ color: colors.gray.text }}>
                            Mandviwalla Mauser adheres to strict compliance standards related to:                        </p>

                        {/* Standards List */}
                        <ul className="flex flex-col gap-2 md:gap-2.5 pl-4 md:pl-6">
                            {standards.map((standard, idx) => (
                                <li key={idx} className="flex items-start gap-3 leading-snug">
                                    <Check
                                        className="shrink-0 mt-0.5"
                                        size={20}
                                        style={{ color: colors.primary.blue }}
                                    />
                                    <span className="text-sm md:text-base" style={{ color: colors.gray.text }}>
                                        {standard}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Footer Text */}
                        <p className="text-sm md:text-base text-justify leading-snug" style={{ color: colors.gray.text }}>
                            We regularly monitor, evaluate, and update our compliance framework to align with evolving industry standards.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
