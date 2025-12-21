'use client'

import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import AnnualReports from "@/components/investor-information/AnnualReports";
import InvestorFAQ from "@/components/investor-information/InvestorFAQ";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/investor-information.jpg"
                heading="Investor Information"
                breadcrumbPath="Investor Information"
                path="Investor Relation"

            />
            <InvestorFAQ />
            <AnnualReports />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
