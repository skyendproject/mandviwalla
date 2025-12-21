'use client'

import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import FinancialResultsChart from "@/components/financial-results/FinancialResultsChart";
import Footer from "@/components/Footer";
import EqualityPolicyDetails from "@/components/investor-disclosure/EqualityPolicyDetails";
import InvestorDisclosure from "@/components/investor-disclosure/InvestorDisclosure";
import KeyInitiativesEquality from "@/components/investor-disclosure/KeyInitiativesEquality";

export default function CompanyInformation() {
    return (
        <div>
            <Hero
                imagePath="/investor-disclosure.jpg"
                heading="Gender Pay Gap Disclosure "
                breadcrumbPath="Gender Pay Gap Disclosure "
                path="Investor Relation"

            />
            <InvestorDisclosure />
            <KeyInitiativesEquality />
            <EqualityPolicyDetails />
            <AboveFooter variant="dark" />
            <Footer variant="dark" />
        </div>
    );
}
