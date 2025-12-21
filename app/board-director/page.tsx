'use client'

import AboveFooter from "@/components/AboveFooter";
import BoardDirectors from "@/components/board-director/BoardDirectors";
import Committee from "@/components/board-director/Committee";
import CodeOfConductContent from "@/components/code-of-conduct-policy/CodeOfConductContent";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import OurBankers from "@/components/home/OurBankers";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/code-of-conduct-policy.jpg"
                heading="Board of Directors"
                breadcrumbPath="Board of Directors"
                path="Governance"
            />
            <BoardDirectors />
            <Committee />
            <OurBankers />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
