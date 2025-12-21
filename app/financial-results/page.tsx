'use client'

import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import FinancialResultsChart from "@/components/financial-results/FinancialResultsChart";
import Footer from "@/components/Footer";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/financial-results.jpg"
                heading="Financial Results"
                breadcrumbPath="Financial Results"
                path="Investor Relation"

            />
            <FinancialResultsChart />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
