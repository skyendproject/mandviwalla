import Image from "next/image";
import { colors } from "@/lib/colors";

export default function CompanyInformationComponent() {
    const stats = [
        {
            number: "250+",
            label: "Products & Variants"
        },
        {
            number: "100+",
            label: "Satisfied Clients across industries"
        },
        {
            number: "125K",
            label: "Contract Signed"
        },
        {
            number: "35+",
            label: "Years of Manufacturing Excellence"
        }
    ];

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-20">
            <div className="container mx-auto">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-6">
                    Company Information
                </h2>

                {/* Description */}
                <p className="text-sm md:text-base text-center max-w-5xl mx-auto mb-12 md:mb-16 leading-relaxed" style={{ color: colors.gray.text }}>
                    Mandviwalla Mauser Plastic Industries Limited is a Public Limited Company established in 1988, with technical collaboration from Mauser Werke GmbH, Germany. Headquartered in Karachi, Pakistan, we are the country's pioneer in industrial blow-moulded plastic drums and a leading manufacturer of injection and blow-moulded plastic products across multiple sectors.
                </p>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-xs md:text-sm font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Office Image */}
                <div className="w-full aspect-[16/6] md:aspect-[16/5] rounded-lg overflow-hidden bg-gray-100">
                    <Image
                        src="/company-information.jpg"
                        alt="Company Office"
                        width={1200}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
