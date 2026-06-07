import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import NoticesGrid from "@/components/investor-notices/NoticesGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Notices",
};

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
            <AboveFooter />
            <Footer />
        </div>
    );
}
