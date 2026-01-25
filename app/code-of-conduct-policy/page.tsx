'use client'

import AboveFooter from "@/components/AboveFooter";
import CodeOfConductContent from "@/components/code-of-conduct-policy/CodeOfConductContent";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";

export default function CompanyInformation() {
    return (
        <div>
            <Hero 
                imagePath="/code-of-conduct-policy.jpg"
                heading="Code of Conduct Policy"
                breadcrumbPath="Code of Conduct Policy"
                path="Profile"
            />
            <CodeOfConductContent />
            <AboveFooter />
            <Footer />
        </div>
    );
}
