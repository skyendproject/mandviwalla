import AboveFooter from "@/components/AboveFooter";
import Hero from "@/components/company-information/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";
import { colors } from "@/lib/colors";

export const metadata: Metadata = {
    title: "Parent Company",
};

export default function ParentCompany() {
    return (
        <div>
            <Hero
                imagePath="/management-profile.jpg"
                heading="Parent Company"
                breadcrumbPath="Parent Company"
                path="Governance"
            />

            <section className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-12">
                <div className="container mx-auto max-w-5xl flex flex-col gap-10">

                    {/* Logo */}
                    <div className="flex justify-center md:justify-start">
                        <Image
                            src="/assets/meskay-&-femtee.jpeg"
                            alt="Meskay & Femtee Trading Company"
                            width={380}
                            height={120}
                            className="h-auto w-auto max-w-[380px]"
                            priority
                        />
                    </div>

                    {/* Company Intro */}
                    <div className="flex flex-col gap-4">
                        <h2
                            className="text-2xl md:text-3xl font-bold pb-2 relative inline-block w-fit"
                        >
                            Meskay and Femtee Trading Company Private Limited
                            <span
                                className="absolute bottom-0 left-0 h-0.5 w-[60px]"
                                style={{ backgroundColor: colors.orange.dark }}
                            />
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Meskay and Femtee Trading Company (MFTC) has been a trusted name and a
                            leading rice mill in Pakistan since 1936. With decades of expertise, we
                            specialize in the growing, milling, processing, and global export of
                            agricultural products, including premium rice, wheat, corn, sesame seeds,
                            and guar gum. Our diverse business operations also encompass trading in
                            agricultural food items, agricultural machinery, and providing dedicated
                            farming services. Backed by a strong supply network, we are committed to
                            delivering consistent, international-standard products to wholesalers,
                            retailers, and distributors worldwide.
                        </p>
                    </div>

                    {/* Acquisition */}
                    <div className="flex flex-col gap-4">
                        <h2
                            className="text-2xl md:text-3xl font-bold pb-2 relative inline-block w-fit"
                        >
                            Acquisition of Mandviwalla Mauser Plastic Industries Limited (MMPIL)
                            <span
                                className="absolute bottom-0 left-0 h-0.5 w-[60px]"
                                style={{ backgroundColor: colors.orange.dark }}
                            />
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            In a strategic conglomerate merger, MFTC expanded its business portfolio
                            by acquiring a majority controlling stake in Mandviwalla Mauser Plastic
                            Industries Limited (MMPIL), a company that manufactures industrial
                            plastic products such as barrels, drums, chairs, and handling crates.
                        </p>

                        <ul className="flex flex-col gap-4 mt-2 list-disc pl-6 text-base md:text-lg leading-relaxed text-gray-700 marker:text-[color:var(--marker)]"
                            style={{ ["--marker" as string]: colors.orange.dark }}
                        >
                            <li>
                                MFTC successfully acquired 21,391,485 ordinary shares from
                                Mr. Azeem H. Mandviwalla. This accounted for 74.41% of MMPIL&apos;s
                                issued and paid-up capital. The shares were acquired under a Share
                                Purchase Agreement at a negotiated price of PKR 5.0534 per share,
                                for a total consideration of PKR 108,100,000.
                            </li>
                            <li>
                                In compliance with takeover laws, MFTC subsequently made a public
                                offer to acquire up to the remaining 25.59% of the share capital,
                                which amounted to 7,356,648 ordinary shares. The offer price was
                                determined at PKR 13.47 per share based on the company&apos;s net
                                asset value.
                            </li>
                            <li>
                                By the close of the acceptance period in April 2025, 7 public
                                shareholders participated, tendering a total of 1,600 shares. MFTC
                                accepted and processed all 1,600 tendered shares.
                            </li>
                            <li>
                                The transaction was formally authorized by the Competition
                                Commission of Pakistan (CCP). All post-acceptance formalities and
                                regulatory obligations were officially completed and reported to the
                                Securities and Exchange Commission of Pakistan (SECP).
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <AboveFooter />
            <Footer />
        </div>
    );
}
