"use client";

import { Check, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="w-full py-8 md:py-12 bg-white px-4 md:px-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                {/* Left Image */}
                <div className="relative w-full h-[350px] md:h-[430px] rounded-xl shadow-lg">
                    <Image
                        src="/assets/home-about.png"
                        alt="About Us Image"
                        fill
                        className="object-cover"
                    />

                    {/* Floating Blue Stats Box */}
                    <div
                        className="
        absolute 
        bottom-[-5%] right-[-2%] 
        bg-[#1338BE] 
        text-white 
        p-4 
        shadow-xl 
        w-[180px]
        md:w-[220px]
        z-10
    "
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-4xl md:text-5xl font-bold leading-none">
                                36
                            </span>

                            <div className="flex flex-col text-sm md:text-base uppercase tracking-wide leading-tight leading-none">
                                <span>Years</span>
                                <span>of</span>
                                <span>Experience</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Content */}
                <div className="relative">
                    <h4 className="text-sm md:text-base tracking-widest border-l-2 border-[#F28500] pl-2 mb-2">
                        About Us Section
                    </h4>

                    <h2 className="text-3xl md:text-[42px] font-semibold mb-4 leading-snug">
                        Who We Are
                    </h2>

                    <p className="text-[#666666] leading-snug mb-6 text-base">
                        Mandviwalla Mauser Plastic Industries Limited is Pakistan’s leading manufacturer of injection
                        and blow-moulded plastic products, with technical collaboration from Mauser Werke, Germany.
                        With decades of experience, advanced technology, and a strong commitment to quality, we serve
                        diverse industries including chemicals, food & beverages, pharmaceuticals, agriculture, and
                        household goods.
                    </p>

                    {/* List */}
                    <ul className="space-y-3 mb-10">
                        {[
                            "Established in 1988 as a Public Limited Company",
                            "Technical collaboration with Mauser Werke, Germany",
                            "Pioneer of industrial blow-moulded drums in Pakistan",
                            "Wide range of injection moulded & blow moulded products"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="text-[#F28500] w-5 h-5 mt-1" strokeWidth={2.5} />
                                <span className="text-[#666666] md:text-base">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Social Icons */}
                    <div className="absolute -bottom-5 right-0 flex items-center gap-3 mt-12">

                        <div className="border border-[#A7A7A7] rounded-full p-2 cursor-pointer hover:bg-gray-100 transition">
                            <Twitter className="w-5 h-5 text-[#A7A7A7]" />
                        </div>

                        <div className="border border-[#A7A7A7] rounded-full p-2 cursor-pointer hover:bg-gray-100 transition">
                            <Facebook className="w-5 h-5 text-[#A7A7A7]" />
                        </div>

                        <div className="border border-[#A7A7A7] rounded-full p-2 cursor-pointer hover:bg-gray-100 transition">
                            <Instagram className="w-5 h-5 text-[#A7A7A7]" />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
