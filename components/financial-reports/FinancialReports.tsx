"use client";

import { colors } from "@/lib/colors";
import { Download } from "lucide-react";
import { useState } from "react";

type ReportGroup = {
    year: string;
    files: { label: string; href: string }[];
};

const annualReports: ReportGroup[] = [
    {
        year: "2023–2024",
        files: [
            { label: "ANNUAL REPORT 2024 (PDF)", href: "/annual-report-2024.pdf" },
        ],
    },
    {
        year: "2022–2023",
        files: [
            { label: "ANNUAL REPORT 2023 (PDF)", href: "/annual-report-2023.pdf" },
        ],
    },
    {
        year: "2021–2022",
        files: [
            { label: "ANNUAL REPORT 2022 (PDF)", href: "/annual-report-2022.pdf" },
        ],
    },
];

const quarterlyReports: ReportGroup[] = [
    {
        year: "Q3 2025 (March)",
        files: [
            { label: "QUARTERLY REPORT MARCH 2025 (PDF)", href: "/quarterly-report-march25.pdf" },
        ],
    },
    {
        year: "Q1 2025 (September)",
        files: [
            { label: "QUARTERLY REPORT SEPTEMBER 2024 (PDF)", href: "/quarterly-report-september24.pdf" },
        ],
    },
    {
        year: "Q1 2024 (August)",
        files: [
            { label: "QUARTERLY REPORT AUGUST 2024 (PDF)", href: "/quarterly-report-august24.pdf" },
        ],
    },
    {
        year: "Q1 2024 (September)",
        files: [
            { label: "QUARTERLY REPORT SEPTEMBER 2023 (PDF)", href: "/quarterly-report-september23.pdf" },
        ],
    },
];

const menu = [
    { key: "annual", label: "Annual Audited Financial Statements", heading: "Annual Audited Financial Statements" },
    { key: "quarterly", label: "Quarterly Financial Statements", heading: "Quarterly Financial Statements" },
];

export default function FinancialReports() {
    const [active, setActive] = useState<"annual" | "quarterly">("annual");
    const reports = active === "annual" ? annualReports : quarterlyReports;
    const activeItem = menu.find((m) => m.key === active)!;

    return (
        <section className="w-full py-8 pt-2 px-4 md:px-0 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <div className="text-sm md:text-base mb-1 mt-12 border-l-2 inline-block pl-2 font-semibold" style={{ borderColor: colors.primary.blue, color: colors.gray.tagColor }}>
                        Financial Reports
                    </div>
                    <h2 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-2">
                        Transparent, accurate, and timely financial disclosures.
                    </h2>
                    <p className="mx-auto text-base md:text-base max-w-3xl" style={{ color: colors.gray.text }}>
                        Mandviwalla Mauser Plastic Limited (MWMP) ensures complete compliance with PSX & SECP reporting standards by publishing audited annual financial statements and quarterly reports for investor review.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
                    <div className="flex-1 bg-[#F7F7F7] rounded-card p-8 min-w-[340px] max-w-2xl">

                        <div className="text-2xl font-bold mb-1">
                            {activeItem.heading}
                        </div>

                        <div className="text-gray-500 text-md mb-6">
                            (All reports available in downloadable PDF format)
                        </div>

                        {reports.map((report, idx) => (
                            <div key={idx} className="mb-8 last:mb-0">
                                <div
                                    className="text-md font-semibold mb-2 border-l-2 pl-2"
                                    style={{ borderColor: colors.primary.blue }}
                                >
                                    {report.year}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {report.files.map((file, fidx) => (
                                        <a
                                            key={fidx}
                                            href={file.href}
                                            className="flex items-center gap-2 px-4 py-3 rounded-md font-medium text-white justify-center text-sm whitespace-nowrap"
                                            style={{ background: colors.primary.blue, width: "100%" }}
                                            download
                                        >
                                            <Download size={18} className="text-white" />
                                            {file.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full md:w-[320px] flex flex-col gap-1">
                        {menu.map((item) => {
                            const isActive = active === item.key;
                            return (
                                <button
                                    key={item.key}
                                    type="button"
                                    onClick={() => setActive(item.key as "annual" | "quarterly")}
                                    className={`w-full text-left px-6 py-2.5 font-semibold border-none focus:outline-none transition-colors cursor-pointer ${isActive ? 'text-white' : ''}`}
                                    style={
                                        isActive
                                            ? { background: colors.primary.orange }
                                            : { background: colors.gray.lightgraybg, color: colors.gray.tagColor }
                                    }
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
