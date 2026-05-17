"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import baseProducts from "./product-details";
import { useRouter } from "next/navigation";
import { colors } from "@/lib/colors";
import { ArrowRight } from "lucide-react";


export default function ProductOverview() {
    const [activeFilter, setActiveFilter] = useState<"all" | "open-top" | "close-top">("all");

    const filterImages: Array<{ src: string; label: string; value: "open-top" | "close-top" }> = [
        {
            src: "/products/product-filter-1.png",
            label: "OPEN TOP PLASTIC DRUMS",
            value: "open-top",
        },
        {
            src: "/products/product-filter-3.png",
            label: "CLOSE TOP PLASTIC DRUMS",
            value: "close-top",
        },
        // {
        //     src: "/products/product-filter-3.png",
        //     label: "JERRYCANS"
        // },
    ];
    const visibleProducts = useMemo(() => {
        return baseProducts
            .filter((product) => activeFilter === "all" || product.type === activeFilter)
            .map((product) => ({ ...product, key: product.id }));
    }, [activeFilter]);
    const router = useRouter();

    return (
        <section className="w-full px-2 py-8 md:px-8">
            {/* Top Filter Images */}
            <div className="flex justify-center gap-4 mb-4">
                {filterImages.map((filter, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <button type="button" onClick={() => setActiveFilter(filter.value)} className="mb-2">
                            <Image src={filter.src} alt={filter.label} width={237} height={246.31} className="rounded-lg shadow object-contain" style={{ width: 237, height: 246.31, opacity: activeFilter === filter.value ? 1 : 0.88 }} />
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveFilter(filter.value)}
                            className="text-white text-[11px] font-semibold px-2 py-3 rounded w-full mb-2 tracking-wide transition"
                            style={{ minWidth: 120, backgroundColor: activeFilter === filter.value ? colors.neutral.darkGray : "#2A3A8C" }}
                        >
                            {filter.label}
                        </button>
                    </div>
                ))}
            </div>

            {/* Product Grid */}
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-[42px] my-8 font-semibold">Reliable, Durable, Certified Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
                {visibleProducts.map((product) => (
                    <div key={product.key} className="flex flex-col items-center bg-white rounded-lg shadow p-2 pt-4 pb-4">
                        <Image src={product.img} alt={product.title} width={191.85} height={257.01} className="mb-2 object-contain" style={{ width: 191.85, height: 257.01 }} />
                        <div className="flex flex-col items-center w-full" style={{ maxWidth: 180 }}>
                            <h3 className="text-[11px] font-bold mb-1 tracking-wide text-center" style={{ minHeight: 32 }}>{product.title}</h3>
                            <p className="text-[10px] text-gray-600 mb-2 text-center" style={{ minHeight: 28 }}>{product.desc}</p>
                            <button
                                className="bg-[#2A3A8C] text-white text-[11px] font-semibold px-2 py-3 rounded w-full flex items-center justify-center gap-1"
                                style={{ minHeight: 28, maxWidth: 160, margin: '0 auto', backgroundColor: colors.neutral.darkGray }}
                                onClick={() => router.push(`/products/detail?id=${product.id}`)}
                            >
                                VIEW DETAILS <ArrowRight size={14} className="ml-2" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}