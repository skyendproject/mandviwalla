import React from 'react';
import Image from 'next/image';
import { colors } from '@/lib/colors';

const OurBankers = () => {
  const bankers = [
    {
      name: 'Habib Metropolitan Bank Limited',
      logo: '/habib-bank.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      width: 190,
      height: 95
    },
    {
      name: 'SILK Bank Limited',
      logo: '/silk-bank.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      width: 378,
      height: 88
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: colors.neutral.darkGray }}>
          Our Bankers
        </h2>

        {/* Bankers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bankers.map((banker, index) => (
            <div
              key={index}
              className="p-8 rounded-lg text-center"
              style={{ backgroundColor: colors.gray.lightgraybg }}
            >
              {/* Bank Logo */}
              <div className="flex justify-center">
                <div className="relative" style={{ width: `${banker.width}px`, height: `${banker.height}px` }}>
                  <Image
                    src={banker.logo}
                    alt={banker.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bank Name */}
              <h3 className="text-xl font-bold mb-4 mt-2" style={{ color: colors.neutral.darkGray }}>
                {banker.name}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed" style={{ color: colors.gray.text }}>
                {banker.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBankers;
