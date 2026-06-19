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
        <section className="w-full py-14 md:py-20 px-4 md:px-20">
            <div className="container mx-auto">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
                    Company Information
                </h2>

                {/* Description */}
                <p className="text-sm md:text-base text-center max-w-5xl mx-auto mb-12 md:mb-16 leading-relaxed" style={{ color: colors.gray.text }}>
                    Mandviwalla Mauser Plastic Industries Limited is a Public Limited Company established in 1988, with technical collaboration from Mauser Werke GmbH, Germany. Headquartered in Karachi, Pakistan, we are the country's pioneer in industrial blow-moulded plastic drums and a leading manufacturer of injection and blow-moulded plastic products across multiple sectors.
                </p>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center rounded-card border border-gray-200 bg-white shadow-card px-4 py-6 md:py-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-xs md:text-sm font-medium text-gray-600">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Office Image */}
                <div className="w-full aspect-[16/6] md:aspect-[16/5] rounded-card overflow-hidden bg-gray-100 shadow-card">
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
