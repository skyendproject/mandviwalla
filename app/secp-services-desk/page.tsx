import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
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
            <section className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-12">
                <div className="container mx-auto max-w-5xl flex flex-col items-center gap-8">
                    <Image
                        src="/assets/secp-service-desk.jpeg"
                        alt="SECP Service Desk"
                        width={700}
                        height={220}
                        className="w-full max-w-3xl h-auto"
                        priority
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
