"use client";

import { colors } from "@/lib/colors";
import Image from "next/image";

export default function RegulatoryCompliance() {
    return (
        <section className="w-full py-12 pb-0 px-4 md:px-0 bg-[#F6F6F6]">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1 flex flex-col justify-center mt-8 md:-mt-12">
                    <div className="text-sm md:text-base 2xl:text-lg mb-1 border-l-2 pl-2 font-semibold " style={{ color: colors.gray.tagColor, borderColor: colors.primary.blue }}>Introduction</div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-[42px] font-bold mb-2">Regulatory Compliance</h2>
                    <p className="text-gray-700 text-sm md:text-base 2xl:text-lg max-w-xl">
                        Ensuring all election processes and disclosures adhere to SECP and PSX regulations, providing transparency and accountability for all stakeholders.
                    </p>
                </div>
                <div className="flex-1 flex items-center justify-center relative min-w-[397px] min-h-[439px]">
                    {/* Main Compliance Hammer Image */}
                    <div className="absolute left-0 top-0 z-10 w-full md:w-[297px] h-[360px]">
                        <Image
                            src="/compliane-hammer.jpg"
                            alt="Regulatory Compliance"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Overlay Compliance-2 Image, 30% from right */}
                    <div
                        className="hidden lg:flex absolute z-20 w-[318px] h-[307px]"
                        style={{ left: '200px', top: '26px' }}
                    >
                        <Image
                            src="/compliance-2.jpg"
                            alt="Compliance Stamp"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
