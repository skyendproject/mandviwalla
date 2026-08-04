import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import InvestorRelationCards from "@/components/investor-relation/InvestorRelationCards";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Corporate Briefing Session",
};

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/investor-relation.jpg"
                heading="Corporate Briefing Session"
                breadcrumbPath=""
                path="Corporate Briefing Session"
            />
            <InvestorRelationCards />
            <AboveFooter />
            <Footer />
        </div>
    );
}
