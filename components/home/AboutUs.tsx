"use client";

import { Check, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { colors } from "@/lib/colors";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function AboutUs() {
    return (
        <section className="w-full py-12 md:py-16 lg:py-16 xl:py-16 2xl:py-20 bg-white px-4 md:px-12 xl:px-16 2xl:px-20">
            <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-12 xl:gap-12 2xl:gap-16 items-center">

                {/* Left Image */}
                <div className="relative w-full max-w-[480px] mx-auto h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] xl:h-[500px] 2xl:h-[540px] rounded-xl shadow-lg">
                    <Image
                        src="/why-choose-us.jpeg"
                        alt="About Us Image"
                        fill
                        className="object-cover rounded-xl"
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
        md:w-[200px] lg:w-[220px] xl:w-[220px] 2xl:w-[240px]
        z-10
    "
                        style={{ backgroundColor: colors.primary.blue }}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-bold leading-none">
                                36
                            </span>

                            <div className="flex flex-col text-xs sm:text-sm md:text-base xl:text-base 2xl:text-lg uppercase tracking-wide leading-tight">
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

                    <p className="text-[#666666] leading-relaxed mb-4 md:mb-6 xl:mb-8 text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl">
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
                                <Check className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 mt-0.5 md:mt-1 flex-shrink-0" strokeWidth={2.5} style={{ color: colors.orange.dark }} />
                                <span className="text-[#666666] text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl">{item}</span>
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
