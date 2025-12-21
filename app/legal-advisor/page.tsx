'use client'

import AboveFooter from "@/components/AboveFooter";
import AuditorResponsibilities from "@/components/company-auditor/AuditorResponsibilities";
import CompanyAuditor from "@/components/company-auditor/CompanyAuditor";
import Cards from "@/components/company-information/Cards";
import CompanyInformationComponent from "@/components/company-information/CompanyInformation";
import CoreValues from "@/components/company-information/CoreValues";
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
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
