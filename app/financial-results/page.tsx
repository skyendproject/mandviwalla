import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import FinancialResultsChart from "@/components/financial-results/FinancialResultsChart";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Result"
};

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
            <AboveFooter />
            <Footer />
        </div>
    );
}
