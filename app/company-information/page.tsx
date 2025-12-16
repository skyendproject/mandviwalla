'use client'

import AboveFooter from "@/components/AboveFooter";
import Cards from "@/components/company-information/Cards";
import CompanyInformationComponent from "@/components/company-information/CompanyInformation";
import CoreValues from "@/components/company-information/CoreValues";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/company-information.jpg"
                heading="Company Information"
                breadcrumbPath="Company Information"
                path="Profile"

            />
            <CompanyInformationComponent />
            <Cards />
            <CoreValues />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
