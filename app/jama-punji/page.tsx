import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jama Punji",
};

export default function Page() {
    return (
        <>
            <Hero
                imagePath="/contact-hero.jpg"
                heading="Jama Punji"
                breadcrumbPath="Jama Punji"
                path="Home"
            />
            <section className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-12">
                <div className="container mx-auto max-w-5xl flex flex-col items-start gap-6">
                    <Image
                        src="/assets/jama-punji.jpeg"
                        alt="Jama Punji"
                        width={480}
                        height={140}
                        className="h-auto"
                        priority
                    />
                    <p className="text-lg md:text-xl">
                        Website:{" "}
                        <a
                            href="https://jamapunji.pk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 hover:underline"
                        >
                            https://jamapunji.pk/
                        </a>
                    </p>
                </div>
            </section>
            <AboveFooter />
            <Footer />
        </>
    );
}
