import { colors } from "@/lib/colors";

const sections = [
    {
        title: "I. Introduction and Application",
        content: [
            {
                heading: "A. Core Ethical Foundation",
                text: "Mandviwalla Mauser Plastic Limited (MWMP) is founded on a strong ethical framework. This Code of Conduct (CoC) serves as a comprehensive guide for the ethical and professional behavior required of all personnel. The Code ensures that all business activities are carried out with the highest standards of integrity, transparency, and accountability."
            },
            {
                heading: "B. Scope and Applicability",
                text: "This Code applies universally to all:",
                list: [
                    "Directors (Executive, Non-Executive, and Independent).",
                    "Senior Management Officers.",
                    "All employees of MWMP, regardless of contract status or location.",
                    "Consultants, agents, and representatives acting on behalf of the Company."
                ],
                footer: "Any breach of this Code constitutes a serious violation and may lead to disciplinary action, including termination of employment or appointment."
            }
        ]
    },
    {
        title: "II. Integrity in Business and Financial Dealings",
        content: [
            {
                heading: "A. Compliance with Laws and Regulations",
                text: "All personnel must comply with all applicable national, local, and international trade laws, rules, regulations, and requirements, including the Companies Act, 2017, and the Listed Companies (Code of Corporate Governance) Regulation, 2019 (CCGR 2019)."
            },
            {
                heading: "B. Financial Integrity and Reporting",
                text: "MWMP mandates accurate and truthful financial reporting in accordance with recognized accounting standards. Falsification of financial records, banking information, or any other corporate document is strictly prohibited. The Company maintains reliable records and reports for full transparency."
            },
            {
                heading: "C. Anti-Corruption and Anti-Bribery",
                text: "MWMP maintains a zero-tolerance policy against corruption in any form, including the offering or acceptance of gifts, entertainment, or personal favors that could improperly influence or be perceived to influence business decisions. Personnel must not offer or accept bribes or unlawful incentives in dealings with business partners or government officials."
            },
            {
                heading: "D. Fair Competition",
                text: "The Company must conduct all business activities in rigorous accordance with all applicable anti-trust and unfair competition laws."
            }
        ]
    },
    {
        title: "III. Conflicts of Interest and Securities Trading",
        content: [
            {
                heading: "A. Conflicts of Interest (COI)",
                text: "All employees and Directors must actively avoid actual or perceived conflicts of interest and are expected to act solely in the best interest of MWMP, maintaining transparency in all professional dealings.",
                footer: "Every Director of the Company who is in any way interested in any contract or arrangement to be entered into by the Company is required to disclose the nature of his concern or interest to the Board and shall not take part in the discussion or decision-making process related to that matter."
            },
            {
                heading: "B. Insider Trading and Confidentiality",
                text: "MWMP strictly prohibits the misuse of unpublished price-sensitive information.",
                list: [
                    "Prohibition on Dealing: No person associated with the Company may deal in securities of MWMP on the basis of any unpublished price-sensitive information (insider knowledge), either on their own behalf or on behalf of any other person.",
                    "Prohibition on Tipping: No person shall communicate or counsel any other person to deal in securities based on such information, except when required in the ordinary course of business or under any law."
                ]
            },
            {
                heading: "C. Protection of Confidential Information",
                text: "Employees are required to maintain strict confidentiality over proprietary, technical, financial, customer, and employee data unless disclosure is duly authorized or legally required. This obligation continues even after the Director's term or employee's service is terminated."
            }
        ]
    },
    {
        title: "IV. Social, Labor, and Environmental Responsibility",
        content: [
            {
                heading: "A. Workplace Environment and Human Rights",
                text: "MWMP is committed to guaranteeing a safe and respectful workplace.",
                list: [
                    "Non-Discrimination and Harassment: The Company selects and treats employees equally and does not discriminate based on race, color, national origin, ethnic origin, gender, religion, political beliefs, sexual orientation, disability, age, or any other personal characteristic unrelated to job performance. Sexual harassment or any harsh and inhumane treatment, mental or physical coercion, or abuse are strictly prohibited.",
                    "Labor Standards: MWMP complies with all applicable laws on working hours, wages, and benefits. There is an absolute prohibition on the use of child labor, forced labor, slave labor, or any other type of involuntary labor. The rights of employees to freedom of association shall be respected.",
                    "Health, Safety, and Environment (HSE): The Company is committed to conducting business in a manner that protects public and occupational health, the environment, and ensures employee safety. MWMP strives to minimize accidents, reduce emissions, cut waste, and conserve energy."
                ]
            },
            {
                heading: "B. Responsible Supply Chain and Manufacturing",
                text: "Given the nature of the plastics industry, MWMP has specific ethical requirements for its supply chain:",
                list: [
                    "Conflict Minerals: The Company prohibits the sourcing or purchase of \"conflict minerals\" (including tin, tantalum, tungsten, or gold) that directly or indirectly benefit armed groups in the Democratic Republic of the Congo and adjoining countries.",
                    "Sanctioned Entities: MWMP commits not to use suppliers or service providers located in countries subject to international economic sanctions (e.g., those imposed by the United Nations, United States, or European Union)."
                ]
            }
        ]
    },
    {
        title: "V. Reporting Violations and Compliance",
        content: [
            {
                heading: "A. Duty to Report",
                text: "All personnel have a responsibility to seek guidance and report any suggestion(s) and observation(s) or concerns about potential misconduct, ethical issues, or violations of this Code."
            },
            {
                heading: "B. Whistleblowing Mechanism",
                text: "MWMP shall establish a formal, confidential, and anonymous Whistleblowing Policy to enable employees, suppliers, and third parties to report grievances, concerns, or potentially unlawful activities, including violations of this Code or fraud against shareholders."
            },
            {
                heading: "C. Policy Prohibiting Retaliation",
                text: "The Whistleblowing Policy must contain a mandatory, unequivocal anti-retaliation clause. No employee shall be discharged, demoted, suspended, harassed, or otherwise discriminated against for filing a complaint or exercising their rights under the CoC or the Whistleblowing Policy."
            }
        ]
    }
];

export default function CodeOfConductContent() {
    return (
        <div className="w-full py-12 md:py-16 px-4 md:px-20 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col gap-8 md:gap-10">
                    {sections.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="flex flex-col gap-4">
                            {/* Section Title */}
                            <div className="px-4 md:px-6 py-3 md:py-4 border-l-2" style={{ borderColor: colors.primary.blue, backgroundColor: colors.gray.lightgraybg }}>
                                <h2 className="text-lg md:text-4xl font-semibold text-black">
                                    {section.title}
                                </h2>
                            </div>

                            {/* Section Content */}
                            <div className="flex flex-col gap-6 px-2 md:px-4">
                                {section.content.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex flex-col gap-3">
                                        {item.heading && (
                                            <h3 className="text-base md:text-lg font-semibold text-black">
                                                {item.heading}
                                            </h3>
                                        )}
                                        {item.text && (
                                            <p className="text-sm md:text-base text-justify leading-snug" style={{ color: colors.gray.text }}>
                                                {item.text}
                                            </p>
                                        )}
                                        {item.list && (
                                            <ul className="flex flex-col gap-2 pl-4 md:pl-6">
                                                {item.list.map((listItem, listIdx) => (
                                                    <li key={listIdx} className="text-sm md:text-base text-justify leading-snug list-disc" style={{ color: colors.gray.text }}>
                                                        {listItem}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {item.footer && (
                                            <p className="text-sm md:text-base text-justify leading-snug" style={{ color: colors.gray.text }}>
                                                {item.footer}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
