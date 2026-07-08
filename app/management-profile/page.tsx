import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import OurDirectors from "@/components/management-profile/OurDirectors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management Profile",
};

export default function ManagementProfile() {
    return (
        <div>
            <Hero
                imagePath="/management-profile.jpg"
                heading="Parent Company"
                breadcrumbPath="Parent Company"
                path="Governance"
            />
            <OurDirectors />
            <AboveFooter />
            <Footer />
        </div>
    );
}
