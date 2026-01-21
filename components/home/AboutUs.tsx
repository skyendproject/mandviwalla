"use client";

import { Check, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { colors } from "@/lib/colors";

export default function AboutUs() {
    return (
        <section className="w-full py-8 md:py-12 lg:py-16 bg-white px-4 md:px-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

                {/* Left Image */}
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[430px] rounded-xl shadow-lg">
                    <Image
                        src="/assets/home-about.png"
                        alt="About Us Image"
                        fill
                        className="object-cover rounded-xl"
                    />

                    {/* Floating Blue Stats Box */}
                    <div
                        className="
        absolute 
        bottom-[-23%] sm:bottom-[-17%] right-[-2%] sm:right-[-10%] 
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
                    <h4 className="text-sm md:text-base 2xl:text-lg tracking-widest border-l-2 pl-2 mb-2 font-semibold" style={{ borderColor: colors.orange.dark, fontFamily: 'var(--font-lato)', color: colors.gray.tagColor }}>
                        About Us Section
                    </h4>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-[42px] font-semibold mb-3 md:mb-4 leading-snug">
                        Who We Are
                    </h2>

                    <p className="text-[#666666] leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                        Mandviwalla Mauser Plastic Industries Limited is Pakistan’s leading manufacturer of injection
                        and blow-moulded plastic products, with technical collaboration from Mauser Werke, Germany.
                        With decades of experience, advanced technology, and a strong commitment to quality, we serve
                        diverse industries including chemicals, food & beverages, pharmaceuticals, agriculture, and
                        household goods.
                    </p>

                    {/* List */}
                    <ul className="space-y-2 md:space-y-3 mb-6 md:mb-10">
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

            </div>
        </section>
    );
}
