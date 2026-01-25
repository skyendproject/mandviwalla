'use client'

import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import About from "@/components/corporate-governance/About";
import ComplianceReporting from "@/components/corporate-governance/ComplianceReporting";
import GovernanceFramework from "@/components/corporate-governance/GovernanceFramework";
import GovernanceResources from "@/components/corporate-governance/GovernanceResources";
import Footer from "@/components/Footer";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/corporate-governance.jpg"
                heading="Corporate Governance"
                breadcrumbPath="Corporate Governance"
                path="Governance"
            />
            <About />
            <GovernanceFramework/>
            <ComplianceReporting />
            <GovernanceResources />
            <AboveFooter/>
            <Footer/>
        </div>
    );
}
