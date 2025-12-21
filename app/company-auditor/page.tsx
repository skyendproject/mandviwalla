'use client'

import AboveFooter from "@/components/AboveFooter";
import AuditorResponsibilities from "@/components/company-auditor/AuditorResponsibilities";
import CompanyAuditor from "@/components/company-auditor/CompanyAuditor";
import Cards from "@/components/company-information/Cards";
import CompanyInformationComponent from "@/components/company-information/CompanyInformation";
import CoreValues from "@/components/company-information/CoreValues";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/company-auditor.jpg"
                heading="Auditor of the Company "
                breadcrumbPath="Auditor of the Company "
                path="Governance"

            />
            <CompanyAuditor />
            <AuditorResponsibilities />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
