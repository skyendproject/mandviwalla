import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { colors } from "@/lib/colors";

export const metadata: Metadata = {
    title: "Tax Consultant",
};

export default function TaxConsultant() {
    return (
        <div>
            <Hero
                imagePath="/management-profile.jpg"
                heading="Tax Consultant"
                breadcrumbPath="Tax Consultant"
                path="Governance"
            />

            <section className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-12">
                <div className="container mx-auto max-w-5xl flex flex-col gap-6">
                    <h2 className="text-2xl md:text-3xl font-bold pb-2 relative inline-block w-fit">
                        Tax Consultants
                        <span
                            className="absolute bottom-0 left-0 h-0.5 w-[60px]"
                            style={{ backgroundColor: colors.orange.dark }}
                        />
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                        F.A.K. Tax consultant
                    </p>
                </div>
            </section>

            <AboveFooter />
            <Footer />
        </div>
    );
}
