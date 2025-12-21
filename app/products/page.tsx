'use client'

import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import ProductOverview from "@/components/products/ProductOverview";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/assets/home-banner.jpg"
                heading="Products"
                breadcrumbPath="Products"
                path="Home"
            />
            <ProductOverview />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
