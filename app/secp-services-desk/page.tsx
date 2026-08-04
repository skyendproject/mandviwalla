import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import ContactSection from "@/components/contact/ContactSection";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SECP – Services Desk",
};

export default function Page() {
    return (
        <>
            <Hero
                imagePath="/contact-hero.jpg"
                heading="SECP – Services Desk"
                breadcrumbPath="SECP – Services Desk"
                path="Home"
            />

            <ContactSection />

            <section className="w-full pb-12 md:pb-16 px-4 md:px-8 lg:px-12 bg-surface">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-white rounded-card shadow-card border border-gray-200 p-6 md:p-8 text-sm md:text-base leading-relaxed text-gray-800">
                        <p>
                            <strong>DISCLAIMER:</strong> In case your complaint has not been properly redressed by us, you may lodge your
                            complaint with the Securities and Exchange Commission of Pakistan (the SECP). However,
                            please note that SECP will entertain only those complaints which were at first directly requested
                            to be redressed by the company and the company has failed to redress the same. Further, the
                            complaints that are not relevant to SECP's regulatory domain/competence shall not be
                            entertained by the SECP.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full pb-16 md:pb-20 px-4 md:px-8 lg:px-12 bg-surface">
                <div className="container mx-auto max-w-5xl flex flex-col items-center gap-6">
                    <Image
                        src="/assets/secp-service-desk.jpeg"
                        alt="SECP Service Desk"
                        width={700}
                        height={220}
                        className="w-full max-w-3xl h-auto"
                    />
                    <Link
                        href="https://sdms.secp.gov.pk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg md:text-xl text-cyan-600 hover:underline"
                    >
                        Click Here for SECP Complaint Form
                    </Link>
                </div>
            </section>

            <AboveFooter />
            <Footer />
        </>
    );
}
