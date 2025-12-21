import React from 'react';
import Image from 'next/image';
import { colors } from '@/lib/colors';

const ShareholdingStructure = () => {
    return (
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-0.5 h-5" style={{ backgroundColor: colors.primary.blue }}></div>
                        <p className="text-base font-semibold" style={{ color: colors.gray.text }}>
                            Shareholding Structure
                        </p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                        Transparent Shareholding Structure
                    </h2>
                    <p className="text-base max-w-5xl mx-auto leading-snug" style={{ color: colors.gray.text }}>
                        Mandviwalla Mauser Plastic Industries Limited (MMPIL) maintains complete transparency in its shareholding structure in compliance with regulatory requirements. The following table represents the pattern of shareholding as of 31 June 2021, categorized based on the number of shares held by shareholders across different ranges.
                    </p>
                </div>

                {/* Shareholding Section */}
                <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-0.5 h-5" style={{ backgroundColor: colors.primary.blue }}></div>
                        <p className="text-base font-semibold" style={{ color: colors.gray.text }}>
                            Shareholding Disclosure Based on Share Ranges
                        </p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black">
                        Shareholding Pattern by Number of Shares Held
                    </h3>
                    <p className="text-sm max-w-4xl mx-auto" style={{ color: colors.gray.text }}>
                        (Shown as directed by Securities and Exchange Commission in shareholding structure)
                    </p>
                </div>

                {/* Document Image */}
                <div className="w-full max-w-5xl mx-auto">
                    <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                        <Image
                            src="/shareholding-file.png"
                            alt="Shareholding Pattern Document"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShareholdingStructure;
