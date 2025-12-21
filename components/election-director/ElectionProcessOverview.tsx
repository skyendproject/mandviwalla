"use client";

import { colors } from "@/lib/colors";

const steps = [
    {
        title: "Announcement",
        desc: "Notice of election published for shareholders."
    },
    {
        title: "Nomination of Candidates",
        desc: "Eligible shareholders may propose candidates."
    },
    {
        title: "Scrutiny",
        desc: "Company verifies nominations under SECP guidelines."
    },
    {
        title: "Voting",
        desc: "Election conducted during the General Meeting."
    },
    {
        title: "Result Declaration",
        desc: "Elected directors notified to SECP and shareholders."
    }
];

export default function ElectionProcessOverview() {
    return (
        <section className="w-full py-12 px-4 md:px-0">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Election Process Overview</h2>
                <ol className="relative">
                    {steps.map((step, idx) => (
                        <li key={idx} className="ml-4 flex items-start">
                            <div className="flex flex-col items-center mr-6">
                                <span
                                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                                    style={{ background: colors.orange.dark, opacity: 0.68 }}
                                >
                                    {/* <span className="text-xs font-bold text-white">STEP {idx + 1}</span> */}
                                </span>
                                {idx < steps.length - 1 && (
                                    <span
                                        className="w-1"
                                        style={{
                                            background: colors.orange.dark,
                                            height: '40px',
                                            marginTop: '12px',
                                            marginBottom: '12px',
                                            opacity: 0.4,
                                            display: 'block'
                                        }}
                                    />
                                )}
                            </div>
                            <div>
                                <div className="text-xs font-semibold mb-0.5 text-[#A8AABC]">STEP {idx + 1}</div>
                                <div className="text-base md:text-lg font-bold mb-1" style={{ color: colors.gray.tagColor}}>
                                    <span>{step.title}: </span>
                                    <span className="font-medium">{step.desc}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
