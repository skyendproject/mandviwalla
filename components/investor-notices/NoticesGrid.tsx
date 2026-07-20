"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { colors } from "@/lib/colors";

const notices = [
    {
        image: "/notices/agm-notice-2025.png",
        title: "AGM Notice 2025",
        href: "/AGM-notice-2025.pdf",
        button: "AGM Notice 2025",
    },
    {
        image: "/notices/public-announcement-2025.png",
        title: "Publication of Public Announcement of Offer (06-02-2025)",
        href: "/Publication-of-Public-Announcement-of-Offer-06-02-2025.pdf",
        button: "Public Announcement Offer",
    },
    {
        image: "/notices/agm-2023-english.png",
        title: "AGM Notice 2023 (English)",
        href: "/AGM-Mandviwala-2023-English.pdf",
        button: "AGM Notice 2023 English",
    },
    {
        image: "/notices/agm-2023-urdu.png",
        title: "AGM Notice 2023 (Urdu)",
        href: "/AGM-Mandviwala-2023-Urdu.pdf",
        button: "AGM Notice 2023 Urdu",
    },
];

export default function NoticesGrid() {
    return (
        <section className="w-full py-12 px-4 md:px-0 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <div
                        className="text-sm md:text-base mb-1 border-l-2 inline-block pl-2"
                        style={{ color: colors.gray.tagColor, borderColor: colors.primary.blue }}
                    >
                        Notices
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Notices & Announcements</h2>
                    <p className="mx-auto text-sm md:text-base max-w-4xl" style={{ color: colors.gray.text }}>
                        Timely corporate notices, regulatory disclosures and shareholder announcements.
                        <br />
                        MandviWalla Mauser Plastic Limited Industries (MWMP) posts all statutory notices,
                        AGM/EGM invitations, corporate briefings and other regulatory announcements here.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {notices.map((notice, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-card shadow-card overflow-hidden flex flex-col w-full max-w-md mx-auto border border-gray-200"
                        >
                            <div className="w-full h-64 relative border-b border-[#000000] bg-gray-50">
                                <Image
                                    src={notice.image}
                                    alt={notice.title}
                                    fill
                                    className="object-contain object-top"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col gap-4 p-6 flex-1">
                                <div
                                    className="font-semibold text-lg text-gray-900 line-clamp-2"
                                    title={notice.title}
                                >
                                    {notice.title}
                                </div>
                                <a
                                    href={notice.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-white"
                                    style={{ background: colors.primary.blue }}
                                    download
                                >
                                    <Download size={20} className="text-white" />
                                    {notice.button}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
