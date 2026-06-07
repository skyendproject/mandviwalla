import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import InvestorRelationCards from "@/components/investor-relation/InvestorRelationCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relation",
};

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
            <AboveFooter />
            <Footer />
        </div>
    );
}
