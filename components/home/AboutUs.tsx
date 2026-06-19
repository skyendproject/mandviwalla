"use client";

import { Check, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { colors } from "@/lib/colors";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function AboutUs() {
    return (
        <section className="w-full py-14 md:py-20 bg-white px-4 md:px-8 lg:px-12">
            <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* Left Image */}
                <div className="relative w-full max-w-[480px] mx-auto h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] rounded-card shadow-card">
                    <Image
                        src="/why-choose-us.jpeg"
                        alt="About Us Image"
                        fill
                        className="object-cover rounded-card"
                        style={{ objectPosition: "center" }}
                    />

                    {/* Floating Blue Stats Box */}
                    <div
                        className="
        absolute 
        bottom-[-23%] sm:bottom-[-17%] right-[-2%] md:right-[-10%] 
        text-white 
        p-3 sm:p-4 
        shadow-xl 
        w-[150px] sm:w-[180px]
        md:w-[200px] lg:w-[220px]
        z-10
    "
                        style={{ backgroundColor: colors.primary.blue }}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold leading-none">
                                36
                            </span>

                            <div className="flex flex-col text-xs sm:text-sm md:text-base uppercase tracking-wide leading-tight">
                                <span>Years</span>
                                <span>of</span>
                                <span>Experience</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Content */}
                <div className="relative">
                    <SectionHeader
                        eyebrow="About Us"
                        title="Who We Are"
                        className="mb-3 md:mb-4 xl:mb-5"
                    />

                    <p className="text-[#666666] leading-relaxed mb-4 md:mb-6 xl:mb-8 text-sm md:text-base">
                        Mandviwalla Mauser Plastic Industries Limited is Pakistan’s leading manufacturer of injection
                        and blow-moulded plastic products, with technical collaboration from Mauser Werke, Germany.
                        With decades of experience, advanced technology, and a strong commitment to quality, we serve
                        diverse industries including chemicals, food & beverages, pharmaceuticals, agriculture, and
                        household goods.
                    </p>

                    {/* List */}
                    <ul className="space-y-2 md:space-y-3 xl:space-y-4 mb-6 md:mb-10">
                        {[
                            "Established in 1988 as a Public Limited Company",
                            "Technical collaboration with Mauser Werke, Germany",
                            "Pioneer of industrial blow-moulded drums in Pakistan",
                            "Wide range of injection moulded & blow moulded products"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2 md:gap-3">
                                <Check className="w-4 h-4 md:w-5 md:h-5 mt-0.5 md:mt-1 flex-shrink-0" strokeWidth={2.5} style={{ color: colors.orange.dark }} />
                                <span className="text-[#666666] text-sm md:text-base">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Social Icons */}
                    <div className="relative md:absolute -bottom-5 right-0 flex items-center justify-center md:justify-end gap-3 mt-6 md:mt-12">

                        <div className="border border-[#A7A7A7] rounded-full p-1.5 md:p-2 cursor-pointer hover:bg-gray-100 transition">
                            <Twitter className="w-4 h-4 md:w-5 md:h-5 text-[#A7A7A7]" />
                        </div>

                        <div className="border border-[#A7A7A7] rounded-full p-1.5 md:p-2 cursor-pointer hover:bg-gray-100 transition">
                            <Facebook className="w-4 h-4 md:w-5 md:h-5 text-[#A7A7A7]" />
                        </div>

                        <div className="border border-[#A7A7A7] rounded-full p-1.5 md:p-2 cursor-pointer hover:bg-gray-100 transition">
                            <Instagram className="w-4 h-4 md:w-5 md:h-5 text-[#A7A7A7]" />
                        </div>

                    </div>

                </div>

            </Reveal>
        </section>
    );
}
