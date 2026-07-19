"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { colors } from "@/lib/colors";

type Leaf = { href: string; label: string };
type Item =
    | { kind: "link"; href: string; label: string }
    | { kind: "dropdown"; key: string; label: string; href?: string; children: Leaf[] };

type Section = {
    key: string;
    heading: string;
    items: Item[];
};

const WHO_WE_ARE: Section = {
    key: "who-we-are",
    heading: "Who We Are",
    items: [
        { kind: "link", href: "/about", label: "About Us" },
        {
            kind: "dropdown",
            key: "company-profile",
            label: "Company Profile",
            children: [
                { href: "/company-information", label: "Company Information" },
                { href: "/mission-vision", label: "Mission & Vision" },
                { href: "/code-of-conduct-policy", label: "Code of Conduct Policy" },
            ],
        },
    ],
};

const PRODUCTS_SERVICES: Section = {
    key: "products-services",
    heading: "Products & Services",
    items: [
        { kind: "link", href: "/products", label: "Our Products" },
    ],
};

const CORPORATE_GOVERNANCE: Section = {
    key: "corporate-governance",
    heading: "Corporate Governance",
    items: [
        {
            kind: "dropdown",
            key: "governance",
            label: "Governance",
            children: [
                { href: "/corporate-governance", label: "Corporate Governance" },
                { href: "/board-director", label: "Board Of Director" },
                { href: "/management-profile", label: "parent-company" },
                { href: "/share-holding", label: "Share Holding Pattern" },
                { href: "/company-auditor", label: "Auditor Of The Company" },
                { href: "/legal-advisor", label: "Legal Advisor" },
            ],
        },
        {
            kind: "dropdown",
            key: "investor-relation",
            label: "Investor Relation",
            children: [
                { href: "/investor-relation", label: "Investor Relation" },
                { href: "/investor-information", label: "Investor Information" },
                { href: "/financial-reports", label: "Financial Reports" },
                { href: "/financial-results", label: "Financial Results" },
                { href: "/investor-disclosure", label: "Gender Pay Gap Disclosure" },
                { href: "/investor-notices", label: "Notices" },
            ],
        },
        { kind: "link", href: "/election-director", label: "Election of Director" },
    ],
};

const SUPPORT: Section = {
    key: "support",
    heading: "Support",
    items: [
        { kind: "link", href: "/faqs", label: "FAQs" },
        { kind: "link", href: "/contact-us", label: "Contact Us" },
    ],
};

const COLUMNS: Section[][] = [
    [WHO_WE_ARE, SUPPORT],
    [PRODUCTS_SERVICES, CORPORATE_GOVERNANCE],
];

function SectionBlock({
    section,
    open,
    setOpen,
}: {
    section: Section;
    open: string | null;
    setOpen: (v: string | null) => void;
}) {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 pb-2 relative">
                {section.heading}
                <span
                    className="absolute bottom-0 left-0 h-0.5 w-[30%]"
                    style={{ backgroundColor: colors.orange.dark }}
                />
            </h4>

            {section.items.map((item) => {
                if (item.kind === "link") {
                    return (
                        <Link
                            key={item.href + item.label}
                            href={item.href}
                            className="flex gap-3 items-center hover:translate-x-1 transition-transform"
                        >
                            <ArrowRight size={18} style={{ color: colors.orange.dark }} />
                            <span className="text-sm xl:text-base 2xl:text-lg">{item.label}</span>
                        </Link>
                    );
                }

                const isOpen = open === item.key;
                return (
                    <div key={item.key} className="flex flex-col">
                        <button
                            type="button"
                            onClick={() => setOpen(isOpen ? null : item.key)}
                            className="flex items-center justify-between gap-2 w-full text-left"
                            aria-expanded={isOpen}
                        >
                            <span className="flex items-center gap-3">
                                <ArrowRight size={18} style={{ color: colors.orange.dark }} />
                                <span className="text-sm xl:text-base 2xl:text-lg">{item.label}</span>
                            </span>
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                style={{ color: colors.orange.dark }}
                            />
                        </button>

                        {isOpen && (
                            <div className="flex flex-col gap-2 pl-7 mt-2 border-l border-white/20 ml-2">
                                {item.children.map((leaf) => (
                                    <Link
                                        key={leaf.href + leaf.label}
                                        href={leaf.href}
                                        className="text-xs xl:text-sm 2xl:text-base opacity-90 hover:opacity-100 hover:translate-x-1 transition-transform py-0.5"
                                    >
                                        {leaf.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default function FooterNavDropdowns() {
    const [open, setOpen] = useState<string | null>(null);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 w-full">
            {COLUMNS.map((col, i) => (
                <div key={i} className="flex flex-col gap-8">
                    {col.map((section) => (
                        <SectionBlock
                            key={section.key}
                            section={section}
                            open={open}
                            setOpen={setOpen}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
