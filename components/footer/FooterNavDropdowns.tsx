"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { colors } from "@/lib/colors";

type SubLink = { href: string; label: string };
type SubGroup = { key: string; label: string; href?: string; children?: SubLink[] };
type NavGroup = { key: string; label: string; href?: string; children?: SubGroup[] };

const GROUPS: NavGroup[] = [
    { key: "home", label: "Home", href: "/" },
    {
        key: "profile",
        label: "Profile",
        children: [
            { key: "company-information", label: "Company Information", href: "/company-information" },
            { key: "mission-vision", label: "Mission & Vision", href: "/mission-vision" },
            { key: "code-of-conduct-policy", label: "Code of Conduct Policy", href: "/code-of-conduct-policy" },
        ],
    },
    {
        key: "corporate",
        label: "Corporate",
        children: [
            {
                key: "governance",
                label: "Governance",
                children: [
                    { href: "/corporate-governance", label: "Corporate Governance" },
                    { href: "/board-director", label: "Board Of Director" },
                    { href: "/management-profile", label: "Management Profile" },
                    { href: "/share-holding", label: "Share Holding Pattern" },
                    { href: "/company-auditor", label: "Auditor Of The Company" },
                    { href: "/legal-advisor", label: "Legal Advisor" },
                ],
            },
            {
                key: "investor",
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
            { key: "election-director", label: "Election of Director", href: "/election-director" },
        ],
    },
    { key: "products", label: "Products", href: "/products" },
];

export default function FooterNavDropdowns() {
    const [openMain, setOpenMain] = useState<string | null>(null);
    const [openSub, setOpenSub] = useState<string | null>(null);

    const toggleMain = (key: string) => {
        setOpenMain((prev) => (prev === key ? null : key));
        setOpenSub(null);
    };

    const toggleSub = (key: string) => {
        setOpenSub((prev) => (prev === key ? null : key));
    };

    return (
        <div className="flex flex-col gap-1">
            {GROUPS.map((group) => {
                const hasChildren = !!group.children?.length;
                const isMainOpen = openMain === group.key;

                if (!hasChildren) {
                    return (
                        <Link
                            key={group.key}
                            href={group.href ?? "#"}
                            className="text-sm xl:text-base 2xl:text-lg uppercase font-medium py-1 hover:translate-x-1 transition-transform inline-block w-fit"
                        >
                            {group.label}
                        </Link>
                    );
                }

                return (
                    <div key={group.key} className="flex flex-col">
                        <button
                            type="button"
                            onClick={() => toggleMain(group.key)}
                            className="flex items-center justify-between gap-3 w-full text-left py-1"
                            aria-expanded={isMainOpen}
                        >
                            <span className="text-sm xl:text-base 2xl:text-lg uppercase font-medium">
                                {group.label}
                            </span>
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${isMainOpen ? "rotate-180" : ""}`}
                                style={{ color: colors.orange.dark }}
                            />
                        </button>

                        {isMainOpen && (
                            <div className="flex flex-col pl-3 mt-1 border-l border-white/20">
                                {group.children!.map((sub) => {
                                    const hasSubChildren = !!sub.children?.length;
                                    const isSubOpen = openSub === sub.key;

                                    if (!hasSubChildren) {
                                        return (
                                            <Link
                                                key={sub.key}
                                                href={sub.href ?? "#"}
                                                className="text-sm xl:text-base 2xl:text-base uppercase opacity-90 hover:opacity-100 hover:translate-x-1 transition-transform py-1"
                                            >
                                                {sub.label}
                                            </Link>
                                        );
                                    }

                                    return (
                                        <div key={sub.key} className="flex flex-col">
                                            <button
                                                type="button"
                                                onClick={() => toggleSub(sub.key)}
                                                className="flex items-center justify-between gap-3 w-full text-left py-1"
                                                aria-expanded={isSubOpen}
                                            >
                                                <span className="text-sm xl:text-base 2xl:text-base uppercase opacity-90">
                                                    {sub.label}
                                                </span>
                                                <ChevronDown
                                                    size={14}
                                                    className={`transition-transform duration-200 ${isSubOpen ? "rotate-180" : ""}`}
                                                    style={{ color: colors.orange.dark }}
                                                />
                                            </button>

                                            {isSubOpen && (
                                                <div className="flex flex-col pl-3 border-l border-white/15">
                                                    {sub.children!.map((leaf) => (
                                                        <Link
                                                            key={leaf.href + leaf.label}
                                                            href={leaf.href}
                                                            className="text-xs xl:text-sm 2xl:text-sm uppercase opacity-80 hover:opacity-100 hover:translate-x-1 transition-transform py-1"
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
                        )}
                    </div>
                );
            })}
        </div>
    );
}
