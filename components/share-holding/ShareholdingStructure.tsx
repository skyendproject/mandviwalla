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
                        <p className="text-sm md:text-base  font-semibold" style={{ color: colors.gray.tagColor }}>
                            Shareholding Structure
                        </p>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                        Transparent Shareholding Structure
                    </h2>
                    <p className="text-base max-w-5xl mx-auto leading-snug" style={{ color: colors.gray.text }}>
                        MandviWalla Mauser Plastic Limited Industries(MWMP) maintains complete transparency in its shareholding structure in compliance with regulatory requirements. The following table represents the pattern of shareholding as of 31 June 2021, categorized based on the number of shares held by shareholders across different ranges.
                    </p>
                </div>

                {/* Shareholding Section */}
                <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-0.5 h-5" style={{ backgroundColor: colors.primary.blue }}></div>
                        <p className="text-sm md:text-base  font-semibold" style={{ color: colors.gray.tagColor }}>
                            Shareholding Disclosure Based on Share Ranges
                        </p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                        Shareholding Pattern by Number of Shares Held
                    </h3>
                    <p className="text-sm max-w-4xl mx-auto" style={{ color: colors.gray.text }}>
                        (Shown as directed by Securities and Exchange Commission in shareholding structure)
                    </p>
                </div>

                {/* Download Button */}
                <div className="flex justify-center mt-8">
                    <a
                        href="/shareholding-pattern.pdf"
                        download
                        className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-md text-white font-medium text-sm md:text-base transition-all hover:opacity-90"
                        style={{ backgroundColor: colors.primary.blue }}
                    >
                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 23.375H19.25V20.625H0M19.25 8.25H13.75V0H5.5V8.25H0L9.625 17.875L19.25 8.25Z" fill="white" />
                        </svg>
                        <span>Shareholding Pattern (PDF)</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ShareholdingStructure;
