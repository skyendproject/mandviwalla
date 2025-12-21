import Image from "next/image";
import baseProducts from "./product-details";
import { useRouter } from "next/navigation";
import { products } from '@/components/products/product-details'
import { colors } from "@/lib/colors";
import { ArrowRight } from "lucide-react";


export default function ProductOverview() {
    const filterImages = [
        {
            src: "/products/product-filter-1.png",
            label: "OPEN TOP PLASTIC DRUMS"
        },
        {
            src: "/products/product-filter-2.png",
            label: "CLOSE TOP PLASTIC DRUMS"
        },
        {
            src: "/products/product-filter-3.png",
            label: "JERRYCANS"
        },
    ];
    // Generate 20 products in random order for the grid
    // Generate 20 products in a deterministic, repeating order for the grid
    const products = Array.from({ length: 20 }, (_, i) => {
        const base = baseProducts[i % baseProducts.length];
        return { ...base, key: `${base.id}-${i}` };
    });
    const router = useRouter();

    return (
        <section className="w-full px-2 py-8 md:px-8">
            {/* Top Filter Images */}
            <div className="flex justify-center gap-4 mb-4">
                {filterImages.map((filter, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <Image src={filter.src} alt={filter.label} width={237} height={246.31} className="rounded-lg shadow mb-2 object-contain" style={{ width: 237, height: 246.31 }} />
                        <button className="bg-[#2A3A8C] text-white text-[11px] font-semibold px-2 py-3 rounded w-full mb-2 tracking-wide" style={{ minWidth: 120, backgroundColor: colors.neutral.darkGray }}>{filter.label}</button>
                    </div>
                ))}
            </div>

            {/* Product Grid */}
            <h2 className="text-center text-[15px] font-semibold mb-2">Reliable, Durable, Certified Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
                {products.map((product) => (
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