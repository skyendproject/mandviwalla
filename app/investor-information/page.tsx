import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import AnnualReports from "@/components/investor-information/AnnualReports";
import InvestorFAQ from "@/components/investor-information/InvestorFAQ";
import { colors } from "@/lib/colors";
import { MapPin, Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "About Us",
        template: "%s | Mandviwalla Mauser Plastic Industries",
    },
    description:
        "Explore the complete range of plastic packaging and industrial products offered by Mandviwalla Mauser Plastic Industries Limited.",

};
export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/investor-information.jpg"
                heading="Investor Information"
                breadcrumbPath="Investor Information"
                path="Investor Relation"

            />
            {/* <InvestorFAQ /> */}

            {/* Registrar */}
            <section className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-12">
                <div className="container mx-auto max-w-5xl flex flex-col gap-6">
                    <div className="text-center flex flex-col">
                        <div
                            className="text-sm md:text-base mb-1 border-l-2 inline-block pl-2 font-semibold mx-auto"
                            style={{
                                color: colors.gray.tagColor,
                                borderColor: colors.primary.blue,
                            }}
                        >
                            Investor Information
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold pb-2 relative inline-block w-fit mx-auto">
                            Our Registrar
                            {/* <span
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-[60px]"
                                style={{ backgroundColor: colors.orange.dark }}
                            /> */}
                        </h2>
                    </div>

                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                        <strong>THK Associates (Pvt.) Limited</strong> serves as the Share
                        Registrar and Transfer Agent for Mandviwalla Mauser Plastic Industries
                        Limited. They handle all shareholder services including share
                        transfers, dividend disbursements, and maintenance of the members&apos;
                        register.
                    </p>

                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex items-start gap-3">
                            <MapPin
                                size={22}
                                className="flex-shrink-0 mt-1"
                                style={{ color: colors.orange.dark }}
                            />
                            <p className="text-base md:text-lg text-gray-700">
                                Plot No. 32-C, Jami Commercial Street 2, D.H.A. Phase VII,
                                Karachi, Pakistan
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Globe
                                size={22}
                                className="flex-shrink-0"
                                style={{ color: colors.orange.dark }}
                            />
                            <a
                                href="https://www.thk.com.pk/index.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base md:text-lg underline"
                                style={{ color: colors.orange.dark }}
                            >
                                https://www.thk.com.pk/index.php
                            </a>
                        </div>
                    </div>

                    <div className="mt-4 w-full overflow-hidden rounded-card border border-gray-200 shadow-sm">
                        <iframe
                            src="https://www.google.com/maps?q=THK+Group,+Plot+No.+32-C,+Jami+Commercial+Street+2,+DHA+Phase+VII,+Karachi&output=embed"
                            width="100%"
                            height="320"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="THK Associates (Pvt.) Limited - Location"
                            allowFullScreen
                        />
                        <div className="px-4 py-2 text-sm">
                            <a
                                href="https://www.google.com/maps/place/THK+Group/@24.8305607,67.0729565,17z/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                                style={{ color: colors.orange.dark }}
                            >
                                View larger map
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <AnnualReports /> */}


            <AboveFooter />
            <Footer />
        </div>
    );
}
