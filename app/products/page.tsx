import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import ProductOverview from "@/components/products/ProductOverview";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Products",
        template: "%s | Mandviwalla Mauser Plastic Industries",
    },
    description:
        "Explore the complete range of plastic packaging and industrial products offered by Mandviwalla Mauser Plastic Industries Limited.",

};

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
            <AboveFooter />
            <Footer />
        </div>
    );
}
