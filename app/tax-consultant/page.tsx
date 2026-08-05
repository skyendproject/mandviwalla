import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { colors } from "@/lib/colors";

export const metadata: Metadata = {
    title: "Tax Consultant",
};

export default function TaxConsultant() {
    return (
        <div>
            <Hero
                imagePath="/management-profile.jpg"
                heading="Tax Consultant"
                breadcrumbPath="Tax Consultant"
                path="Governance"
            />

            <section className="w-full py-8 md:py-12 lg:py-16 bg-white px-4 md:px-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                    <div className="text-center mb-8">
                        <div
                            className="text-sm md:text-base mb-1 border-l-2 inline-block pl-2"
                            style={{ color: colors.gray.tagColor, borderColor: colors.primary.blue }}
                        >
                            Tax Consultant
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Taxation Advisory & Statutory Compliance
                        </h2>
                        <p className="mx-auto text-base md:text-base" style={{ color: colors.gray.text }}>
                            The Company has appointed an independent Tax Consultant to provide taxation
                            advisory and compliance services in accordance with the applicable laws and
                            regulations of Pakistan. The consultant assists the Company in fulfilling its
                            statutory tax obligations while advising management on developments in the tax
                            and regulatory landscape.
                        </p>
                    </div>

                    <div
                        className="rounded-card p-6 md:p-10 border-l-4"
                        style={{ background: '#F9F9F9', borderColor: colors.primary.blue }}
                    >
                        <div
                            className="text-sm md:text-base font-semibold mb-2 uppercase tracking-wide"
                            style={{ color: colors.gray.tagColor }}
                        >
                            Tax Consultant
                        </div>
                        <div className="text-xl md:text-2xl font-bold mb-3 text-black">
                            F.A.K. Tax Consultant
                        </div>
                        <div
                            className="text-base font-semibold mb-6"
                            style={{ color: colors.primary.blue }}
                        >
                            Scope of Services
                        </div>
                        <ul
                            className="flex flex-col gap-3 list-disc pl-6 text-base md:text-lg leading-relaxed text-gray-700 marker:text-[color:var(--marker)]"
                            style={{ ["--marker" as string]: colors.orange.dark }}
                        >
                            <li>Preparation and filing of Income Tax Returns.</li>
                            <li>Preparation and filing of Sales Tax Returns and other applicable statutory filings.</li>
                            <li>Advisory on the Income Tax Ordinance, 2001, the Sales Tax Act, 1990, and other relevant tax laws.</li>
                            <li>Assistance during tax assessments, audits, and regulatory proceedings.</li>
                            <li>Representation before the Federal Board of Revenue (FBR), where applicable.</li>
                            <li>Monitoring amendments in tax legislation and advising management on their implications.</li>
                            <li>Supporting tax planning initiatives while ensuring compliance with applicable legal and regulatory requirements.</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-8 mt-10 lg:mt-14">
                    <div
                        className="text-sm md:text-base mb-1 border-l-2 inline-block pl-2"
                        style={{ color: colors.gray.tagColor, borderColor: colors.primary.blue }}
                    >
                        Commitment to Compliance
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Transparent & Responsible Tax Practices
                    </h2>
                    <p className="mx-auto text-base md:text-base" style={{ color: colors.gray.text }}>
                        The Company remains committed to maintaining strong corporate governance and
                        transparent tax practices. The Tax Consultant works closely with management to
                        support timely compliance, effective tax administration, and adherence to all
                        applicable statutory obligations.
                    </p>
                </div>
            </section>

            <AboveFooter />
            <Footer />
        </div>
    );
}
