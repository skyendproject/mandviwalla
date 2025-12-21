"use client";

import Image from "next/image";
import { colors } from "@/lib/colors";

export default function CompanyAuditor() {
    return (
        <section className="w-full py-8 md:py-12 lg:py-16 bg-white px-4 md:px-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="text-center mb-8">
                    <div className="text-sm text-gray-600 mb-1 border-l-2 border-blue-700 inline-block pl-2">Auditors of the Company</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Independent Audit & Financial Transparency</h2>
                    <p className=" mx-auto text-base md:text-base" style={{ color: colors.gray.text }}>
                        Mandviwalla Mauser Plastic Industries Limited (MMPL) is committed to maintaining the highest standards of financial transparency, accountability, and regulatory compliance. To ensure the integrity and accuracy of our financial reporting, the company appoints independent external auditors who conduct annual audits in accordance with the applicable auditing and accounting standards.
                    </p>
                    <p className="mx-auto mt-2 text-base md:text-base" style={{ color: colors.gray.text }}>
                        Our external auditors provide unbiased oversight of our financial statements, internal controls, and compliance frameworks.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-stretch">
                    <div className="relative w-full max-w-xs h-64 md:h-72 shrink-0 md:h-auto flex-1 md:max-w-md" style={{ minHeight: '280px' }}>
                        <Image
                            src="/auditor.jpg"
                            alt="Auditor"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                        {/* Decorative blue squares */}
                        <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-700 rounded-tr-lg" />
                        <div className="absolute top-0 right-0 w-6 h-6 bg-blue-700 rounded-bl-lg" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center rounded-lg p-6 md:p-10" style={{ background: '#F9F9F9', minHeight: '280px' }}>
                        <div className="text-lg font-semibold mb-2" style={{ color: colors.gray.tagColor }}>Current Auditor:</div>
                        <div className="text-base font-semibold mb-4" style={{ color: colors.gray.tagColor }}>Shinewing Hameed Chaudhri & Co. Chartered Accountants</div>
                        <div className="italic text-gray-700 text-base md:text-lg font-semibold leading-snug" style={{ color: colors.gray.text }}>
                            The company’s statutory financial statements are audited by an independent, registered firm of chartered accountants, appointed in accordance with the Companies Act, regulatory requirements, and best corporate practices.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
