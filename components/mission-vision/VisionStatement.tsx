import Image from "next/image";
import { colors } from "@/lib/colors";
import { Check } from "lucide-react";

const aims = [
    "Introduce innovative product lines",
    "Maintain international quality benchmarks",
    "Enhance global and national recognition of our brand",
    "Continuously improve operations by identifying areas of growth"
];

export default function VisionStatement() {
    return (
        <section className="w-full py-12 md:py-16 px-4 md:px-20 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
                    {/* Left Image */}
                    <div className="relative w-full h-auto md:w-[570px] md:h-[400px] bg-blue-600 rounded-lg overflow-hidden order-2 lg:order-1">
                        <Image
                            src="/vision-statement.jpg"
                            alt="Vision Statement"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col gap-4 order-1 lg:order-2">
                        {/* Label with blue line */}
                        <div className="flex items-center gap-3">
                            <div className="w-0.5 h-8 md:h-6" style={{ backgroundColor: colors.primary.blue }}></div>
                            <span className="text-sm md:text-base 2xl:text-lg" style={{ color: colors.gray.tagColor }}>
                                Vision Statement
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-4xl 2xl:text-[42px] font-semibold text-black">
                            Vision Statement
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-md" style={{ color: colors.gray.text }}>
                            Our vision is to expand and diversify into sectors where high-quality plastic products are limited or unavailable.
                            <br />
                            We aim to:
                        </p>

                        {/* Checklist */}
                        <div className="flex flex-col gap-2 md:gap-2.5">
                            {aims.map((aim, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Check 
                                        className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5" 
                                        style={{ color: colors.primary.blue }}
                                        strokeWidth={3}
                                    />
                                    <span className="text-base md:text-md" style={{ color: colors.gray.text }}>
                                        {aim}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Closing paragraph */}
                        <p className="text-base md:text-md" style={{ color: colors.gray.text }}>
                            We strive to bridge industry gaps with reliable, sustainable, and advanced plastic manufacturing solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
