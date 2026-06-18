"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import baseProducts from "./product-details";
import { useRouter } from "next/navigation";
import { colors } from "@/lib/colors";
import { ArrowRight } from "lucide-react";


export default function ProductOverview() {
    const [activeFilter, setActiveFilter] = useState<"all" | "open-top" | "close-top" | null>(null);

    const filterImages: Array<{ src: string; label: string; value: "open-top" | "close-top" }> = [
        {
            src: baseProducts.find((p) => p.type === "open-top")?.img ?? "/products/open-top-1.png",
            label: "OPEN TOP PLASTIC DRUMS",
            value: "open-top",
        },
        {
            src: baseProducts.find((p) => p.type === "close-top")?.img ?? "/products/blue-1.png",
            label: "CLOSE TOP PLASTIC DRUMS",
            value: "close-top",
        },
    ];
    const visibleProducts = useMemo(() => {
        if (!activeFilter) return [];
        return baseProducts
            .filter((product) => activeFilter === "all" || product.type === activeFilter)
            .map((product) => ({ ...product, key: product.id }));
    }, [activeFilter]);

    const zoomIds = new Set([3, 5, 6, 7]);
    const router = useRouter();

    return (
        <section className="w-full px-2 py-8 md:px-8">
            {/* Top Filter Images */}
            <div className={`flex flex-wrap justify-center mb-4 transition-all ${activeFilter ? "gap-4" : "gap-6 md:gap-10"}`}>
                {filterImages.map((filter, idx) => {
                    const isSelected = activeFilter === filter.value;
                    const enlarged = !activeFilter;
                    const tileWidth = enlarged ? 360 : 237;
                    const tileHeight = enlarged ? 374 : 246.31;
                    return (
                        <div key={idx} className="flex flex-col items-center">
                            <button
                                type="button"
                                onClick={() => setActiveFilter(filter.value)}
                                className="mb-2 transition-transform rounded-lg shadow overflow-hidden flex items-center justify-center bg-white"
                                style={{ width: tileWidth, height: tileHeight }}
                            >
                                <Image
                                    src={filter.src}
                                    alt={filter.label}
                                    width={tileWidth}
                                    height={tileHeight}
                                    className="object-contain transition-all"
                                    style={{
                                        width: tileWidth,
                                        height: tileHeight,
                                        opacity: isSelected || enlarged ? 1 : 0.88,
                                        transform: filter.value === "close-top" ? "scale(1.35)" : "scale(1)",
                                        transformOrigin: "center",
                                    }}
                                />
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveFilter(filter.value)}
                                className={`text-white font-semibold rounded mb-2 tracking-wide transition ${enlarged ? "text-sm px-4 py-3" : "text-[11px] px-2 py-3"}`}
                                style={{ minWidth: enlarged ? 200 : 120, backgroundColor: isSelected ? colors.neutral.darkGray : "#2A3A8C" }}
                            >
                                {filter.label}
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Product Grid */}
            {activeFilter && (
                <>
                    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-[42px] my-8 font-semibold">Reliable, Durable, Certified Products</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
                        {visibleProducts.map((product) => {
                            const zoomed = product.type === "close-top" && zoomIds.has(product.id);
                            return (
                                <div key={product.key} className="flex flex-col items-center bg-white rounded-lg shadow p-2 pt-4 pb-4">
                                    <div className="mb-2 overflow-hidden flex items-center justify-center" style={{ width: 191.85, height: 257.01 }}>
                                        <Image
                                            src={product.img}
                                            alt={product.title}
                                            width={191.85}
                                            height={257.01}
                                            className="object-contain"
                                            style={{
                                                width: 191.85,
                                                height: 257.01,
                                                transform: zoomed ? "scale(1.35)" : "scale(1)",
                                                transformOrigin: "center",
                                            }}
                                        />
                                    </div>
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
                            );
                        })}
                    </div>
                </>
            )}
        </section>
    );
}