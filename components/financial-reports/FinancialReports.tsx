"use client";

import { colors } from "@/lib/colors";
import { Download } from "lucide-react";

const reports = [
    {
        year: "2023–2024",
        files: [
            { label: "ANNUAL REPORT 2024 (PDF)", href: "#" },
            { label: "AUDITED FINANCIAL STATEMENTS (PDF)", href: "#" },
            { label: "DIRECTORS’ REPORT (PDF)", href: "#" },
            { label: "AUDITORS’ REPORT (PDF)", href: "#" },
        ],
    },
    {
        year: "2022–2023",
        files: [
            { label: "ANNUAL REPORT 2023 (PDF)", href: "#" },
            { label: "AUDITED FINANCIAL STATEMENTS (PDF)", href: "#" },
        ],
    },
    {
        year: "2022–2023",
        files: [
            { label: "ANNUAL REPORT 2022 (PDF)", href: "#" },
        ],
    },
];

const menu = [
    "Annual Audited Financial Statements",
    "Quarterly Financial Statements",
    "Directors’ Reports",
    "Auditors’ Reports",
    "Statement of Financial Position",
    "Statement of Profit or Loss",
    "Statement of Cash Flows",
    "Financial Highlights",
    "Archived Financial Reports",
    "Investor Relations Contact",
];

export default function FinancialReports() {
    return (
        <section className="w-full py-8 pt-2 px-4 md:px-0 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <div className="text-md text-gray-600 mb-1 mt-12 border-l-2 inline-block pl-2" style={{ borderColor: colors.primary.blue }}>
                        Financial Reports
                    </div>
                    <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
                        Transparent, accurate, and timely financial disclosures.
                    </h2>
                    <p className="mx-auto text-base md:text-base max-w-3xl" style={{ color: colors.gray.text }}>
                        Mandviwalla Mauser Plastic Industries Limited ensures complete compliance with PSX & SECP reporting standards by publishing audited annual financial statements and quarterly reports for investor review.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
                    <div className="flex-1 bg-[#F7F7F7] rounded-lg p-8 min-w-[340px] max-w-2xl">
                        {reports.map((report, idx) => (
                            <div key={idx} className="mb-8 last:mb-0">
                                <div className="text-md font-semibold mb-2 border-l-2 pl-2" style={{ borderColor: colors.primary.blue }}>
                                    {report.year}
                                </div>
                                {idx === 0 && (
                                    <>
                                        <div className="text-2xl font-bold mb-1">Annual Audited Financial Statements</div>
                                        <div className="text-gray-500 text-md mb-4">(All reports available in downloadable PDF format)</div>
                                    </>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {report.files.map((file, fidx) => (
                                        <a
                                            key={fidx}
                                            href={file.href}
                                            className="flex items-center gap-2 px-4 py-3 rounded-md font-medium text-white justify-center text-sm whitespace-nowrap"
                                            style={{ background: colors.primary.blue, width: '100%' }}
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
                        {menu.map((item, idx) => (
                            <button
                                key={idx}
                                className={`w-full text-left px-6 py-2.5 font-semibold border-none focus:outline-none transition-colors ${idx === 0 ? 'text-white' : ''}`}
                                style={
                                    idx === 0
                                        ? { background: colors.primary.orange }
                                        : { background: colors.gray.lightgraybg, color: colors.gray.tagColor }
                                }
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
