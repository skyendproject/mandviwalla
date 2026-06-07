import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import About from "@/components/corporate-governance/About";
import DirectorEligibility from "@/components/election-director/DirectorEligibility";
import ElectionProcessOverview from "@/components/election-director/ElectionProcessOverview";
import RegulatoryCompliance from "@/components/election-director/RegulatoryCompliance";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Election Director",
};

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/election-director-hero.jpg"
                heading="Election of Director"
                breadcrumbPath="Election of Director"
                path="Home"
            />
            <RegulatoryCompliance />
            <ElectionProcessOverview />
            <DirectorEligibility />
            <Footer/>
        </div>
    );
}
