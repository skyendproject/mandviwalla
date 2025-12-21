"use client";

import Image from "next/image";
import { colors } from "@/lib/colors";
import { Download } from "lucide-react";

const documents = [
    {
        image: "/investor-relation1.png",
        title: "PUCAR-PSX-Corporate-Breifing-Session-2023-2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
        button: {
            label: "GENDER–PAY–GAP–PDF.PDF",
            href: "#"
        }
    },
    {
        image: "/investor-relation2.png",
        title: "Notice-of-Annual-General-Meeting-2023-24",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
        button: {
            label: "GENDER–PAY–GAP–PDF.PDF",
            href: "#"
        }
    }
];

export default function InvestorRelationCards() {
    return (
        <div className="w-full py-8 md:py-12 lg:py-16 bg-white px-4 md:px-20">
            <div className="text-center mb-16">
                <div className="text-sm text-gray-600 mb-1 border-l-2 border-blue-700 inline-block pl-2">Pay Gap Statement (Half Year Ended: December 31, 2024)</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent. Compliant. Accessible.</h2>
                <p className=" mx-auto text-base md:text-base" style={{ color: colors.gray.text }}>
                    Mandviwalla MAUSER Plastic Industries Limited (MMPL) is committed to delivering timely, accurate, and transparent information to its shareholders, analysts, and the investment community. We ensure full compliance with PSX and SECP disclosure requirements.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start mt-4">
                {documents.map((doc, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-md mx-auto border border-gray-200">
                        <div className="w-full h-56 relative border-b border-gray-200 bg-gray-50">
                            <Image
                                src={doc.image}
                                alt={doc.title}
                                fill
                                className="object-contain object-top"
                                priority
                            />
                        </div>
                        <div className="flex flex-col gap-4 p-6 flex-1">
                            <div className="font-semibold text-lg text-gray-900 truncate" title={doc.title}>{doc.title}</div>
                            <div className="text-gray-600 text-sm line-clamp-2">{doc.description}</div>
                            <a
                                href={doc.button.href}
                                className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-white"
                                style={{ background: colors.primary.blue }}
                                download
                            >
                                <Download size={20} className="text-white" />
                                {doc.button.label}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
