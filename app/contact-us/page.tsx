import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import ContactSection from "@/components/contact/ContactSection";
import MapSection from "@/components/contact/MapSection";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
};

export default function Page() {
    return (
        <>
            <Hero
                imagePath="/contact-hero.jpg"
                heading="Contact Us"
                breadcrumbPath="Contact Us"
                path="Home"

            />
            <ContactSection />
            <MapSection />
            <AboveFooter />
            <Footer />
        </>
    );
}