'use client'

import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import LegalAdvisor from "@/components/legal-advisor/LegalAdvisor";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/legal-advisor-hero.jpg"
                heading="Legal Advisor"
                breadcrumbPath="Legal Advisor"
                path="Governance"

            />
            <LegalAdvisor />
            <AboveFooter />
            <Footer/>
        </div>
    );
}
