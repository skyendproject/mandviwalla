import Image from "next/image";
import { colors } from "@/lib/colors";

export default function VisionStatement() {
    return (
        <section className="w-full py-14 md:py-20 px-4 md:px-20 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
                    {/* Left Image */}
                    <div className="relative w-full h-auto md:w-[570px] md:h-[400px] bg-blue-600 rounded-card shadow-card overflow-hidden order-2 lg:order-1">
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
                            <span className="text-sm md:text-base" style={{ color: colors.gray.tagColor }}>
                                Vision Statement
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-black">
                            Vision Statement
                        </h2>

                        {/* Description */}
                        <p className="text-base text-justify" style={{ color: colors.gray.text }}>
                            To diversify and expand in other related sectors where quality plastic products are not available and fill the gaps in these fields. Increase awareness of our Company and the international quality standards being met nationally and internationally. Further improve whenever possible and identify areas which can be better managed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
