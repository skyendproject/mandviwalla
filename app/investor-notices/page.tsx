'use client'

import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import NoticesGrid from "@/components/investor-notices/NoticesGrid";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/notices/notices-hero.jpg"
                heading="Notices"
                breadcrumbPath="Notices"
                path="Investor Relation"
            />
            <NoticesGrid />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
