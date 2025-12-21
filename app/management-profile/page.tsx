'use client'

import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import OurDirectors from "@/components/management-profile/OurDirectors";

export default function ManagementProfile() {
    return (
        <div>
            <Hero
                imagePath="/management-profile.jpg"
                heading="Management Profile"
                breadcrumbPath="Management Profile"
                path="Governance"
            />
            <OurDirectors />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
