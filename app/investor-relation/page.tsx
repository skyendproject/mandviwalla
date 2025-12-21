'use client'

import AboveFooter from "@/components/AboveFooter";
import AuditorResponsibilities from "@/components/company-auditor/AuditorResponsibilities";
import CompanyAuditor from "@/components/company-auditor/CompanyAuditor";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import InvestorRelationCards from "@/components/investor-relation/InvestorRelationCards";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/investor-relation.jpg"
                heading="Investor Relation"
                breadcrumbPath=""
                path="Investor Relation"

            />
            <InvestorRelationCards />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
