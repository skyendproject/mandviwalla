"use client";

import { colors } from "@/lib/colors";
import Image from "next/image";
import { Check } from "lucide-react";

const responsibilities = [
    "Identify and assess the risks of material misstatement of the financial statements, whether due to fraud or error, and design and perform audit procedures responsive to those risks.",
    "Obtain an understanding of internal control relevant to the audit in order to design audit procedures that are appropriate in the circumstances.",
    "Evaluate the appropriateness of accounting policies used and the reasonableness of accounting estimates and related disclosures made by management.",
    "Conclude on the appropriateness of management’s use of the going concern basis of accounting and, based on the audit evidence obtained, whether a material uncertainty exists.",
    "Evaluate the overall presentation, structure and content of the financial statements, including the disclosures, and whether they represent the underlying transactions and events in a manner that achieves fair presentation."
];

const resources = [
    // { title: "Audited Financial Statements (PDF)", href: "#" },
    { title: "Auditor’s Report (PDF)", href: "/company-auditor.pdf" },
    // { title: "Annual Report – Audit Section (PDF)", href: "#" },
];


export default function AuditorResponsibilities() {
    return (
        <section className="w-full py-8 md:py-12 lg:py-16 bg-white px-4 md:px-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="text-center mb-8">
                    <div className="text-sm md:text-base  mb-1 border-l-2 border-blue-700 inline-block pl-2" style={{ color: colors.gray.tagColor }}>
                        Auditor Responsibility Summary
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Role & Responsibilities of the Auditor
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="relative w-full md:w-[494px] md:max-w-[494px] min-h-[300px] md:min-h-0 rounded-card overflow-hidden bg-white shrink-0">
                        <Image
                            src="/auditor-responsibility.jpg"
                            alt="Auditor Desk"
                            fill
                            className="object-cover rounded-card"
                            priority
                        />
                    </div>
                    <div className="flex-1 flex flex-col justify-center rounded-card p-6 md:p-4">
                        <ul className="space-y-5 mb-4">
                            {responsibilities.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-[54px] h-[54px] rounded-full" style={{ background: colors.primary.blue, minWidth: 54, minHeight: 54 }}>
                                        <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.8606 25.6838C17.152 25.6838 18.2574 24.63 18.2574 23.3407L18.2574 22.3707C18.2574 21.8855 18.0612 21.4445 17.8164 21.076C19.0322 20.9901 20.0574 19.9477 20.0574 18.7124L20.0574 17.7422C20.0574 17.2299 19.835 16.7725 19.5542 16.3868C20.5468 16.1548 21.3431 15.2404 21.3431 14.18L21.3431 13.1136C21.3431 12.6245 21.1487 12.201 20.907 11.8297L28.2595 11.8297C29.6774 11.8297 30.8574 10.781 30.8574 9.46036L30.8574 8.74216C30.8574 7.36182 29.6864 6.17022 28.3323 6.17022C21.312 6.16301 17.6202 6.15916 15.6634 6.16507L17.7375 5.0411C19.1227 4.3481 19.8633 3.02741 19.1358 1.6067L18.8303 1.06876C17.836 -0.510614 16.2777 0.0358144 15.3386 0.365472C14.9855 0.4961 6.64665 3.59159 2.97491 5.88941C2.27059 6.3299 0.000276217 7.9805 0.000276094 10.7967L0.000275745 18.7707C0.000275602 22.0457 2.51462 25.7136 5.91508 25.7136C14.8716 25.7136 12.6476 25.7226 15.8606 25.6838ZM5.91508 24.685C3.14848 24.685 1.02885 21.5031 1.02885 18.7707L1.02885 10.7967C1.02885 8.50919 2.92965 7.1309 3.52005 6.76113C7.10256 4.51961 15.6099 1.3619 15.6873 1.3331C17.0337 0.860986 17.5222 0.921929 17.9476 1.59641L18.2307 2.0945C18.6812 2.97701 18.1198 3.69959 17.2625 4.12901L13.3843 6.23039C12.8999 6.49293 13.1164 7.23144 13.663 7.1957C14.1156 7.18644 23.4293 7.19364 28.3318 7.19853C29.1153 7.19879 29.8289 7.9337 29.8289 8.74216L29.8288 9.46036C29.8288 10.3043 29.0016 10.8008 28.2595 10.8008C23.4211 10.8008 21.511 10.8008 16.9172 10.8008L16.8892 10.8008C16.2098 10.8008 16.2088 11.8294 16.8892 11.8294L16.9172 11.8294L19.0024 11.8294C19.7077 11.8297 20.3146 12.3792 20.3146 13.1136L20.3146 14.18C20.3146 14.849 19.7139 15.4191 19.0427 15.4191C16.0064 15.4191 18.9522 15.4191 15.6315 15.4191C14.9521 15.4191 14.9511 16.4477 15.6315 16.4477C16.3854 16.4477 16.9 16.4477 17.6606 16.4477C18.385 16.4477 19.0288 17.0198 19.0288 17.7422L19.0288 18.7124C19.0288 19.4313 18.3927 20.0423 17.6873 20.0559C16.3615 20.0559 15.4723 20.0559 14.1436 20.0559C13.4643 20.0559 13.4632 21.0845 14.1436 21.0845L15.8873 21.0845C16.6091 21.0845 17.2288 21.6469 17.2288 22.3707L17.2288 23.3407C17.2288 24.063 16.585 24.6552 15.8542 24.6552C12.6682 24.6935 14.6672 24.685 5.91508 24.685Z" fill="white" />
                                        </svg>

                                    </span>
                                    <span className="text-base md:text-base text-gray-800 leading-snug" style={{ color: colors.gray.text }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="text-gray-700 text-base md:text-base" style={{ color: colors.gray.text }}>
                            Their oversight strengthens investor confidence and ensures the company’s financial integrity.
                        </div>
                    </div>
                </div>
            </div>

            {/* Annual Report Excerpt - Pages 40/41 */}
            <div className="container mx-auto max-w-5xl mt-20 px-4">
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-0.5 h-8" style={{ backgroundColor: colors.primary.blue }}></div>
                    <span className="text-sm md:text-base font-semibold" style={{ color: colors.gray.tagColor }}>
                        Annual Report
                    </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-black text-center mb-10">
                    Auditor’s Responsibilities for the Audit of the Financial Statements
                </h2>

                <div className="flex flex-col gap-8 text-sm md:text-base text-justify leading-relaxed" style={{ color: colors.gray.text }}>
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Material Uncertainty Relating to Going Concern</h3>
                        <p>
                            The financial statements for the year ended June 30, 2025 have been prepared on going concern assumption. The Company accumulated losses amounting to Rs 285.078 million (2023 Rs 346.302 million) as on June 30, 2025. These conditions, along with other matters as set forth in note 1.1 indicate the existence of material uncertainty which may cast significant doubt about the company’s ability to continue as going concern therefore the company may be unable to realize its asset and discharge its liabilities in the normal course of the business. Our opinion is not modified in respect of this matter.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Key Audit Matters</h3>
                        <p className="mb-3">
                            Key audit matters are those matters that, in our professional judgment, were of most significance in our audit of the financial statements of the current year. These matters were addressed in the context of our audit of the financial statements as a whole, and in forming our opinion thereon, and we do not provide a separate opinion on these matters.
                        </p>
                        <p>
                            In addition to the matters described in Basis for Qualified Opinion section and in the Material Uncertainty Related to Going Concern Section we have determined the matters described below to be the key audit matters to be communicated in our report:
                        </p>

                        <div className="mt-4 border rounded-md overflow-x-auto" style={{ borderColor: '#E5E7EB' }}>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="p-3 border-b" style={{ borderColor: '#E5E7EB' }}>S No</th>
                                        <th className="p-3 border-b" style={{ borderColor: '#E5E7EB' }}>Key audit matter</th>
                                        <th className="p-3 border-b" style={{ borderColor: '#E5E7EB' }}>How the matter was addressed in our audit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="align-top">
                                        <td className="p-3 border-b" style={{ borderColor: '#E5E7EB' }}>1</td>
                                        <td className="p-3 border-b" style={{ borderColor: '#E5E7EB' }}>
                                            <p className="font-semibold mb-2 text-black">Revenue Recognition</p>
                                            <p className="mb-2">Refer 4.12 and note 23 to the financial statements.</p>
                                            <p className="mb-2">The company is engaged in the production and sale of Plastic Barrels. The company recognized gross revenue of Rs. 1,317 million.</p>
                                            <p>We considered revenue recognition as a key audit matter due to the revenue being one of the key performance indicators of the company. Large number of revenue transactions with a large number of customers majorly in Karachi, inherent risk of material misstatements.</p>
                                        </td>
                                        <td className="p-3 border-b" style={{ borderColor: '#E5E7EB' }}>
                                            <p className="mb-2">Our audit procedures in relation to the matter, amongst others, included:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Understood and evaluated management controls over revenue and checked their validation;</li>
                                                <li>Performed verification of sample of revenue transactions with underlying documentation including dispatch documents and sales invoices;</li>
                                                <li>Performed cut-off procedures on sample basis to ensure revenue has been recognized in the correct period;</li>
                                                <li>Performed recalculation of sales incentive as per company’s policy on test basis;</li>
                                                <li>Performed analytical procedures to analyze variation in the price and quantity sold during the year;</li>
                                                <li>Tested journal entries relating to revenue recognized during the year based on identified risk criteria; and</li>
                                                <li>Assessed the appropriateness of disclosures made in the financial statements related to revenue.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Information Other than the Financial Statements and Auditor’s Report Thereon</h3>
                        <p className="mb-3">
                            Management is responsible for the other information. The other information comprises the information included in the annual report, but does not include the financial statements and our auditor’s report thereon.
                        </p>
                        <p className="mb-3">
                            Our opinion on the financial statements does not cover the other information and we do not express any form of assurance conclusion thereon.
                        </p>
                        <p className="mb-3">
                            In connection with our audit of the financial statements, our responsibility is to read the other information and, in doing so, consider whether the other information is materially inconsistent with the financial statements or our knowledge obtained in the audit or otherwise appears to be materially misstated.
                        </p>
                        <p>
                            If, based on the work we have performed, we conclude that there is a material misstatement of this other information, we are required to report that fact. We have nothing to report in this regard.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Responsibilities of Management and Board of Directors for the Financial Statements</h3>
                        <p className="mb-3">
                            Management is responsible for the preparation and fair presentation of the financial statements in accordance with the accounting and reporting standards as applicable in Pakistan and the requirements of Companies Act, 2017 (XIX of 2017) and for such internal control as management determines is necessary to enable the preparation of financial statements that are free from material misstatement, whether due to fraud or error.
                        </p>
                        <p className="mb-3">
                            In preparing the financial statements, management is responsible for assessing the Company’s ability to continue as a going concern, disclosing, as applicable, matters related to going concern and using the going concern basis of accounting unless management either intends to liquidate the Company or to cease operations, or has no realistic alternative but to do so.
                        </p>
                        <p>
                            Board of Directors are responsible for overseeing the Company’s financial reporting process.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Auditor’s Responsibilities for the Audit of the Financial Statements</h3>
                        <p>
                            Our objectives are to obtain reasonable assurance about whether the financial statements as a whole are free from material misstatement, whether due to fraud or error, and to issue an auditor’s report that includes our opinion. Reasonable assurance is a high level of assurance, but is not a guarantee that an audit conducted in accordance with ISAs as applicable in Pakistan will always detect a material misstatement when it exists. Misstatements can arise from fraud or error and are considered material if, individually or in the aggregate, they could reasonably be expected to influence the economic decisions of users taken on the basis of these financial statements.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-5xl mt-20">
                {/* Section Label */}
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-0.5 h-8 md:h-8" style={{ backgroundColor: colors.primary.blue }}></div>
                    <span className="text-sm md:text-base  font-semibold" style={{ borderColor: colors.primary.blue, color: colors.gray.tagColor }}>
                        Audit-Related Documents
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-black text-center mb-10 md:mb-12">
                    Audit-Related Documents
                </h2>

                {/* Resources Grid */}
                <div className="flex justify-center">
                    {resources.map((resource, idx) => (
                        <a
                            key={idx}
                            href={resource.href}
                            download
                            className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-md text-white font-medium text-sm md:text-base transition-all hover:opacity-90"
                            style={{ backgroundColor: colors.primary.blue }}
                        >
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 23.375H19.25V20.625H0M19.25 8.25H13.75V0H5.5V8.25H0L9.625 17.875L19.25 8.25Z" fill="white" />
                            </svg>
                            <span className="text-sm">{resource.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
