"use client";

import { colors } from "@/lib/colors";
import { useMemo } from "react";

function SemiCircularProgress({ value, color }: { value: number; color: string }) {
    // value: -1 to 1 (for -100% to 100%)
    const angle = useMemo(() => 180 * Math.abs(value), [value]);
    const isNegative = value < 0;
    return (
        <svg width="180" height="90" viewBox="0 0 180 90" fill="none">
            <path
                d="M20 80 A70 70 0 0 1 160 80"
                stroke="#FFFFFF"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="M20 80 A70 70 0 0 1 160 80"
                stroke={color}
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="220"
                strokeDashoffset={220 - (angle / 180) * 220}
                style={{ transition: 'stroke-dashoffset 0.8s' }}
            />
        </svg>
    );
}

export default function InvestorDisclosure() {
    return (
        <section className="w-full py-12 px-4 md:px-0 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Gender Pay Gap Disclosure</h2>
                    <p className="mx-auto text-base max-w-5xl text-gray-600 mb-2">
                        At Mandviwalla Mauser Plastic Industries Limited (MMPL), we are deeply committed to gender equality and women’s empowerment, in alignment with Sustainable Development Goal (SDG) 5. We foster a workplace culture built on dignity, respect, and fairness for all employees.
                    </p>
                    <div className="text-md text-gray-900 border-l-2 inline-block pl-2 mb-2" style={{ borderColor: '#0A84FF' }}>
                        Pay Gap Statement (Half Year Ended: December 31, 2024)
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
                    {/* Left Box */}
                    <div className="flex-1 max-w-md bg-[#F6F6F6] rounded-lg p-8 flex flex-col items-center shadow-inner">
                        <SemiCircularProgress value={-0.406} color="#FF7171" />
                        <div className="text-3xl font-bold text-gray-900 mt-[-18px]">-40.6%</div>
                        <div className="text-xl font-semibold text-gray-900 mt-2 mb-2">Mean Gender Pay Gap: -40.6%</div>
                        <div className="text-gray-600 text-center text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</div>
                    </div>
                    {/* Gradient Circle */}
                    <div>
                        <div style={{
                            width: 90,
                            height: 90,
                            borderRadius: '50%',
                            background: 'radial-gradient(closest-side, #FFFFFF 30%, #0A84FF 250%)',
                            boxShadow: '0px 16px 32px 0px #0A84FF1A',
                            border: '2px solid #0A84FF',
                            filter: 'blur(0.5px)'
                        }} />
                    </div>
                    {/* Right Box */}
                    <div className="flex-1 max-w-md bg-[#F6F6F6] rounded-lg p-8 flex flex-col items-center shadow-inner">
                        <SemiCircularProgress value={0.1633} color="#1146F5" />
                        <div className="text-3xl font-bold text-gray-900 mt-[-18px]">16.33%</div>
                        <div className="text-xl font-semibold text-gray-900 mt-2 mb-2">Median Gender Pay Gap: 16.33%</div>
                        <div className="text-gray-600 text-center text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
