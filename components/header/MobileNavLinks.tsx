"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

type MobileNavLinksProps = {
    onClose: () => void;
};

export default function MobileNavLinks({ onClose }: MobileNavLinksProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(prev => (prev === name ? null : name));
        setOpenSubDropdown(null); // reset sub menu when switching main
    };

    const toggleSubDropdown = (name: string) =>
        setOpenSubDropdown(prev => (prev === name ? null : name));

    return (
        <nav className="flex flex-col w-full text-white">
            {/* HOME */}
            <Link
                href="/"
                onClick={onClose}
                className="px-4 py-3 uppercase font-medium hover:bg-white/10"
            >
                Home
            </Link>

            {/* PROFILE */}
            <button
                onClick={() => toggleDropdown("profile")}
                className="px-4 py-3 flex items-center justify-between uppercase font-medium hover:bg-white/10"
            >
                Profile
                <ChevronDown
                    size={18}
                    className={`transition-transform ${openDropdown === "profile" ? "rotate-180" : ""
                        }`}
                />
            </button>

            {openDropdown === "profile" && (
                <div className="bg-blue-900/80">
                    <Link href="/company-information" onClick={onClose} className="block px-8 py-2 hover:bg-white/10 uppercase">
                        Company Information
                    </Link>
                    <Link href="/mission-vision" onClick={onClose} className="block px-8 py-2 hover:bg-white/10 uppercase">
                        Mission & Vision
                    </Link>
                    <Link href="/code-of-conduct-policy" onClick={onClose} className="block px-8 py-2 hover:bg-white/10 uppercase">
                        Code of Conduct Policy
                    </Link>
                </div>
            )}

            {/* CORPORATE */}
            <button
                onClick={() => toggleDropdown("corporate")}
                className="px-4 py-3 flex items-center justify-between uppercase font-medium hover:bg-white/10"
            >
                Corporate
                <ChevronDown
                    size={18}
                    className={`transition-transform ${openDropdown === "corporate" ? "rotate-180" : ""
                        }`}
                />
            </button>

            {openDropdown === "corporate" && (
                <div className="bg-blue-900/80">
                    {/* GOVERNANCE */}
                    <button
                        onClick={() => toggleSubDropdown("governance")}
                        className="px-8 py-2 flex items-center justify-between uppercase hover:bg-white/10"
                    >
                        Governance
                        <ChevronDown
                            size={16}
                            className={`transition-transform ${openSubDropdown === "governance" ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {openSubDropdown === "governance" && (
                        <div className="bg-blue-900/70">
                            {[
                                ["corporate-governance", "Corporate Governance"],
                                ["board-director", "Board Of Director"],
                                ["management-profile", "Management Profile"],
                                ["share-holding", "Share Holding Pattern"],
                                ["company-auditor", "Auditor Of The Company"],
                                ["legal-advisor", "Legal Advisor"],
                            ].map(([href, label]) => (
                                <Link
                                    key={href}
                                    href={`/${href}`}
                                    onClick={onClose}
                                    className="block px-12 py-2 hover:bg-white/10 uppercase"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* INVESTOR */}
                    <button
                        onClick={() => toggleSubDropdown("investor")}
                        className="px-8 py-2 flex items-center justify-between uppercase hover:bg-white/10"
                    >
                        Investor Relation
                        <ChevronDown
                            size={16}
                            className={`transition-transform ${openSubDropdown === "investor" ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {openSubDropdown === "investor" && (
                        <div className="bg-blue-900/70">
                            {[
                                ["investor-relation", "Investor Relation"],
                                ["investor-information", "Investor Information"],
                                ["financial-reports", "Financial Reports"],
                                ["financial-results", "Financial Results"],
                                ["investor-disclosure", "Gender Pay Gap Disclosure"],
                                ["investor-notices", "Notices"],
                            ].map(([href, label]) => (
                                <Link
                                    key={href}
                                    href={`/${href}`}
                                    onClick={onClose}
                                    className="block px-12 py-2 hover:bg-white/10 uppercase"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    )}

                    <Link
                        href="/election-director"
                        onClick={onClose}
                        className="block px-8 py-2 hover:bg-white/10 uppercase"
                    >
                        Election of Director
                    </Link>
                </div>
            )}

            {/* PRODUCTS */}
            <Link
                href="/products"
                onClick={onClose}
                className="px-4 py-3 uppercase font-medium hover:bg-white/10"
            >
                Products
            </Link>
        </nav>
    );
}
