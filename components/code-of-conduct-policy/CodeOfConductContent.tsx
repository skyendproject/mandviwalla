import { colors } from "@/lib/colors";

const sections = [
    {
        title: "Introduction and Application",
        content: [
            {
                heading: "Code of Ethical Foundation",
                text: "Every MMPL employee and those representing us should conduct themselves in an ethical way. We adhere to the tenets of being caring and compassionate to all human beings, honesty in all dealings, being respectful of everyone's culture, role, responsibility, and contribution, and seeking to honor the fundamental humanity of everyone we work with and encounter in our day-to-day work."
            },
            {
                heading: "Scope and Applicability",
                text: "This code applies to everyone at all:",
                list: [
                    "Associates (including Accountants), and Consultants",
                    "Directors (including Non-Executive Directors)",
                    "Management and key senior personnel of MMM or partner companies",
                    "Third parties doing business with us on our behalf",
                    "The Code is accessible to all, and everyone is expected to read and apply its principles. More importantly, everyone should be accountable to the values that we exemplify."
                ]
            }
        ]
    },
    {
        title: "Integrity in Business and Financial Dealings",
        content: [
            {
                heading: "Regulations Compliance and Reputation",
                text: "All associates and suppliers shall be faithful to comply to all local laws and local rules, laws, regulatory, and requirements relating the companies do, and The company should conduct by legal matters in such a manner that it does not get associated with illegal behaviors, no crime, or improprieties."
            },
            {
                heading: "Anti-Corruption and Briberies",
                text: "MMPL prohibits any form of corrupt behavior-including bribes, kickbacks or any other method intended to undermine our integrity. Employees of MMPL are strictly required from doing such practices either making willingly or under any form. We also require that representatives of MMPL who contact directly on our behalf in our business, should be compliance of anti-bribery and anti-corruption policies."
            },
            {
                heading: "Integrity of Records and Books",
                text: "MMPL produces in accordance to the highest standards and laws, including the handling of all records and all other information shall be truthful, timely and appropriate. We commit to provide our stakeholders, and the public at large, with financial records and information reliable and precise and these which accurately describe the financial situation and the performance of all MMPL business units and activities."
            },
            {
                heading: "Fair Competition",
                text: "Companies conduct themselves in business with fairness towards competitors in all aspects and does not use fraud and corruption."
            }
        ]
    },
    {
        title: "Conflicts of Interest and Securities Trading",
        content: [
            {
                heading: "Conflicts of Interest (COI)",
                text: "A Conflict of Interest emerges when an individual's personal interests might conflict or be perceived to clash with the interests of MMPL or when there is chance for personal interests to be put above MMPL's interest. All employees and representatives should get out from any situation of conflict between their own and MMPL interests and should make known to the proper authorities whenever they discover such a situation or fact when it likely happens or exists during their working period. To maintain MMPL."
            },
            {
                heading: "Insider Trading and Confidentiality",
                list: [
                    "A Position or Owning: The material non-public information that you know about MMPL or suppliers or clients or other third parties, cannot be the basis of your investment in such companies and should not share this with any other party including family, friends or business partners.",
                    "Confidentiality: Any confidential information relating to the MMPL or any of its partner companies, to which employees, contractors or agents working with the company become privy, must be conserved and held in the strictest confidence and only used for business purposes of the company itself.",
                ]
            },
            {
                heading: "Protection of Confidential Information",
                text: "All employees and business associates of MMPL are expected to safeguard confidential company information, and against unauthorized use or disclosure. After leaving MMPL or at any time requested to be returned all confidential information."
            }
        ]
    },
    {
        title: "Social, Labor, and Environmental Responsibility",
        content: [
            {
                heading: "Workplace Environment and Human Rights",
                text: "MMPL is obligated to creating an environment of inclusiveness that facilitates dignity and trust. We promote initiatives where each employee matters and has an adequate setting at work, both mentally, physical, culturally, safe, secure and harmoniously so that they can operate optimally. We respect fundamental human rights of our employees; prohibit forced or child labor. MMPL does not discriminate anyone based on gender, race, ethnicity, religion, disability, age or any other protected reason that otherwise and we will conduct ourselves based on the principles of the UN Global Compact."
            },
            {
                heading: "Community Impact (CSR) and Manufacturing",
                text: "MMPL takes Corporate Social Responsibility (CSR) and manufacturing seriously, and how the manufacturing that MMPL does in addition to where being responsible of the community our operations contribute are key in ensuring sustainable operations; how we impact our larger stakeholders economically, socially, ecologically, and ethically. MMPL aims to continue to develop new forms of sustainable packaging, MMPL does so in genuine to maintain sustainability contributions to reduce our carbon footprint if applicable, and in other future sustainability activities. Life Skills improvement."
            },
            {
                heading: "Protection of Confidential Information",
                text: "All employees and business associates of MMPL are expected to safeguard confidential company information, and against unauthorized use or disclosure. After leaving MMPL or at any time requested to be returned all confidential information."
            }
        ]
    },
    {
        title: "Reporting Violations and Compliance",
        content: [
            {
                heading: "Duty to Report",
                text: "Everyone with knowledge or reasonable or even premature, who cannot take dispositions and interventions on instances where potential compliance violations, ethical issues or other concerning events happen should be reported to their direct supervisor."
            },
            {
                heading: "Non-Retaliation Mechanism",
                text: "MMPL encourages the reporting of violations and ensures it in good faith and in most transparent fashion for all those who report concerns without any retribution. Anyone who files a report in good faith will be protected and protected from the threat of any retaliation for reporting."
            },
            {
                heading: "Policy Violations Disclosure",
                text: "Violations of this code can be punished with employees discipline action (such as termination) and will also influence the termination of business partnerships, professional sanctions, or prosecution."
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
