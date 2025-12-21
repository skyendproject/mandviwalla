"use client";

import { colors } from "@/lib/colors";
import Image from "next/image";
import { Check } from "lucide-react";

const responsibilities = [
    "Providing an independent opinion on the company’s financial statements",
    "Ensuring compliance with International Financial Reporting Standards (IFRS)",
    "Assessing the accuracy and fairness of financial disclosures",
    "Reviewing internal control systems and financial risk areas",
    "Supporting transparency for shareholders and regulators"
];

const resources = [
    { title: "Audited Financial Statements (PDF)", href: "#" },
    { title: "Auditor’s Report (PDF)", href: "#" },
    { title: "Annual Report – Audit Section (PDF)", href: "#" },
];


export default function AuditorResponsibilities() {
    return (
        <section className="w-full py-8 md:py-12 lg:py-16 bg-white px-4 md:px-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="text-center mb-8">
                    <div className="text-sm text-gray-600 mb-1 border-l-2 border-blue-700 inline-block pl-2">
                        Auditor Responsibility Summary
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Role & Responsibilities of the Auditor
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="relative flex items-center justify-center w-[494px] h-[454px] max-w-full rounded-lg overflow-hidden bg-white">
                        <Image
                            src="/auditor-responsibility.jpg"
                            alt="Auditor Desk"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                    <div className="flex-1 flex flex-col justify-center h-[454px] rounded-lg p-6 md:p-4">
                        <ul className="space-y-5 mb-4">
                            {responsibilities.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-[54px] h-[54px] rounded-full" style={{ background: colors.primary.blue, minWidth: 54, minHeight: 54 }}>
                                        <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.8606 25.6838C17.152 25.6838 18.2574 24.63 18.2574 23.3407L18.2574 22.3707C18.2574 21.8855 18.0612 21.4445 17.8164 21.076C19.0322 20.9901 20.0574 19.9477 20.0574 18.7124L20.0574 17.7422C20.0574 17.2299 19.835 16.7725 19.5542 16.3868C20.5468 16.1548 21.3431 15.2404 21.3431 14.18L21.3431 13.1136C21.3431 12.6245 21.1487 12.201 20.907 11.8297L28.2595 11.8297C29.6774 11.8297 30.8574 10.781 30.8574 9.46036L30.8574 8.74216C30.8574 7.36182 29.6864 6.17022 28.3323 6.17022C21.312 6.16301 17.6202 6.15916 15.6634 6.16507L17.7375 5.0411C19.1227 4.3481 19.8633 3.02741 19.1358 1.6067L18.8303 1.06876C17.836 -0.510614 16.2777 0.0358144 15.3386 0.365472C14.9855 0.4961 6.64665 3.59159 2.97491 5.88941C2.27059 6.3299 0.000276217 7.9805 0.000276094 10.7967L0.000275745 18.7707C0.000275602 22.0457 2.51462 25.7136 5.91508 25.7136C14.8716 25.7136 12.6476 25.7226 15.8606 25.6838ZM5.91508 24.685C3.14848 24.685 1.02885 21.5031 1.02885 18.7707L1.02885 10.7967C1.02885 8.50919 2.92965 7.1309 3.52005 6.76113C7.10256 4.51961 15.6099 1.3619 15.6873 1.3331C17.0337 0.860986 17.5222 0.921929 17.9476 1.59641L18.2307 2.0945C18.6812 2.97701 18.1198 3.69959 17.2625 4.12901L13.3843 6.23039C12.8999 6.49293 13.1164 7.23144 13.663 7.1957C14.1156 7.18644 23.4293 7.19364 28.3318 7.19853C29.1153 7.19879 29.8289 7.9337 29.8289 8.74216L29.8288 9.46036C29.8288 10.3043 29.0016 10.8008 28.2595 10.8008C23.4211 10.8008 21.511 10.8008 16.9172 10.8008L16.8892 10.8008C16.2098 10.8008 16.2088 11.8294 16.8892 11.8294L16.9172 11.8294L19.0024 11.8294C19.7077 11.8297 20.3146 12.3792 20.3146 13.1136L20.3146 14.18C20.3146 14.849 19.7139 15.4191 19.0427 15.4191C16.0064 15.4191 18.9522 15.4191 15.6315 15.4191C14.9521 15.4191 14.9511 16.4477 15.6315 16.4477C16.3854 16.4477 16.9 16.4477 17.6606 16.4477C18.385 16.4477 19.0288 17.0198 19.0288 17.7422L19.0288 18.7124C19.0288 19.4313 18.3927 20.0423 17.6873 20.0559C16.3615 20.0559 15.4723 20.0559 14.1436 20.0559C13.4643 20.0559 13.4632 21.0845 14.1436 21.0845L15.8873 21.0845C16.6091 21.0845 17.2288 21.6469 17.2288 22.3707L17.2288 23.3407C17.2288 24.063 16.585 24.6552 15.8542 24.6552C12.6682 24.6935 14.6672 24.685 5.91508 24.685Z" fill="white" />
                                        </svg>

                                    </span>
                                    <span className="text-base md:text-base text-gray-800 leading-snug" style={{ color: colors.gray.text }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="text-gray-700 text-base md:text-base" style={{ color: colors.gray.text }}>
                            Their oversight strengthens investor confidence and ensures the company’s financial integrity.
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-5xl mt-20">
                {/* Section Label */}
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-0.5 h-8 md:h-8" style={{ backgroundColor: colors.primary.blue }}></div>
                    <span className="text-base md:text-lg" style={{ color: colors.gray.tagColor }}>
                        Audit-Related Documents
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-10 md:mb-12">
                    Audit-Related Documents
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
