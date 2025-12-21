'use client'

import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import About from "@/components/corporate-governance/About";
import FinancialReports from "@/components/financial-reports/FinancialReports";
import Footer from "@/components/Footer";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/financial-reports.jpg"
                heading="Corporate Governance"
                breadcrumbPath="Corporate Governance"
                path="Governance"
            />
            <FinancialReports />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
