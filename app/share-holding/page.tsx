'use client'

import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import ShareholdingStructure from "@/components/share-holding/ShareholdingStructure";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/share-holding.jpg"
                heading="Share Holding Pattern"
                breadcrumbPath="Share Holding Pattern"
                path="Governance"
            />
            <ShareholdingStructure />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
