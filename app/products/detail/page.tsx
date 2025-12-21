'use client'

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import products from '@/components/products/product-details';
import { Undo2, ChevronUp, ChevronDown, Heart, Share2 } from "lucide-react";
import { colors } from '@/lib/colors';
import React from "react";


export default function ProductDetailPage() {
    const params = useSearchParams();
    const router = useRouter();
    const id = Number(params?.get("id"));
    const product = products.find((p) => p.id === id) || products[0];
    const [mainImg, setMainImg] = React.useState(product.img);
    const [imgIdx, setImgIdx] = React.useState(0);

    // Related products (show 4, exclude current)
    const related = products.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <section className="w-full min-h-screen px-2 py-8 md:px-12 bg-[#F7F7F7] flex flex-col items-center">
            <div className="max-w-5xl w-full relative mt-8">
                {/* Back button placed outside the white card */}
                <button
                    className="absolute -top-12 left-0 flex items-center gap-1 text-xs font-semibold px-10 py-2 rounded-sm bg-[#F2F2F2]"
                    onClick={() => router.back()}
                >
                    <Undo2 size={18} style={{ color: colors.orange.dark }} /> BACK
                </button>

                <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
                    {/* Left: Main Image and Thumbnails with Carousel */}
                    <div className="flex-1 flex flex-col items-center relative">
                        <div className="relative w-48 h-[257px] mb-4 flex items-center justify-center">
                                <Image src={product.details.images[imgIdx]} alt={product.title} width={191.85} height={257.01} className="rounded-lg object-contain border" style={{ width: 191.85, height: 257.01 }} />
                                {/* Share/Like and Chevron controls placed to the right of the image (outside image box) */}
                                <div className="absolute right-[-46px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                                    <div className="flex flex-col gap-2 mb-20">
                                        <button className="bg-white rounded-full p-1 shadow" aria-label="share">
                                            <Share2 size={16} />
                                        </button>
                                        <button className="bg-white rounded-full p-1 shadow" aria-label="like">
                                            <Heart size={16} />
                                        </button>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button className="bg-white rounded shadow p-2" onClick={() => setImgIdx(i => i > 0 ? i - 1 : product.details.images.length - 1)}><ChevronUp size={16} /></button>
                                        <button className="bg-white rounded shadow p-2" onClick={() => setImgIdx(i => i < product.details.images.length - 1 ? i + 1 : 0)}><ChevronDown size={16} /></button>
                                    </div>
                                </div>
                            </div>
                        <div className="flex gap-2 mt-2">
                            {product.details.images.map((img, idx) => (
                                <Image key={idx} src={img} alt="thumb" width={48} height={64} className={`rounded border object-contain cursor-pointer ${imgIdx === idx ? 'border-blue-600' : 'border-gray-300'}`} onClick={() => { setImgIdx(idx); setMainImg(img); }} />
                            ))}
                        </div>
                    </div>
                    {/* Right: Details */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="text-2xl font-bold mb-2 leading-tight">{product.title}<br /><span className="font-normal text-lg text-gray-700">Durable & Easy-to-Use Packaging</span></h1>
                        <div className="mb-2">
                            <b>Description:</b>
                            <p className="text-sm text-gray-700 mt-1">{product.details.description}</p>
                        </div>
                        <div className="mb-2">
                            <b>Key Features:</b>
                            <ul className="list-disc pl-5 text-sm mt-1 mb-2">
                                {product.details.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-2">
                            <b>Available Sizes:</b>
                            <ul className="list-none pl-0 text-sm mt-1">
                                {product.details.sizes.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Related Products */}
                <div className="max-w-5xl w-full mt-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Related Product</h2>
                        <button className="text-xs font-semibold border-b-2 border-black">View All</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {related.map((rp) => (
                            <div key={rp.id} className="flex flex-col items-center bg-white rounded-lg shadow p-4">
                                <Image src={rp.img} alt={rp.title} width={191.85} height={257.01} className="mb-2 object-contain" style={{ width: 191.85, height: 257.01 }} />
                                <div className="text-center">
                                    <h3 className="text-sm font-bold mb-1">{rp.title}</h3>
                                    <p className="text-xs text-gray-600 mb-2">{rp.desc}</p>
                                    <button
                                        className="bg-[#2A3A8C] text-white text-xs font-semibold px-4 py-2 rounded w-full"
                                        onClick={() => router.push(`/products/detail?id=${rp.id}`)}
                                    >
                                        VIEW DETAILS
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
