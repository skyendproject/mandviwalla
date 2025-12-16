import { Download } from "lucide-react";
import { colors } from "@/lib/colors";

const resources = [
    { title: "CODE OF CONDUCT (PDF)", href: "#" },
    { title: "GOVERNANCE FRAMEWORK (PDF)", href: "#" },
    { title: "ANNUAL REPORT (PDF)", href: "#" },
    { title: "CODE OF CONDUCT (PDF)", href: "#" },
    { title: "CODE OF CONDUCT (PDF)", href: "#" },
    { title: "GOVERNANCE ELECTION (PDF)", href: "#" }
];

export default function GovernanceResources() {
    return (
        <div className="w-full bg-gray-50 py-12 md:py-16 px-4 md:px-20">
            <div className="container mx-auto max-w-5xl">
                {/* Section Label */}
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-0.5 h-8 md:h-8" style={{ backgroundColor: colors.primary.blue }}></div>
                    <span className="text-base md:text-lg" style={{ color: colors.gray.tagColor }}>
                        Governance Documents
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-10 md:mb-12">
                    Corporate Governance Resources
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
                            <span>{resource.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
