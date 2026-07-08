import React from 'react';
import Image from 'next/image';
import { colors } from '@/lib/colors';

const OurBankers = () => {
  const bankers = [
    {
      name: 'United Bank Limited',
      logo: '/ubl-bank.png',
      description: '',
      width: 220,
      height: 95
    },
    {
      name: 'Meezan Bank',
      logo: '/meezan-bank.png',
      description: '',
      width: 220,
      height: 95
    },
    {
      name: 'Bank Al Habib',
      logo: '/bank-al-habib.jpeg',
      description: '',
      width: 220,
      height: 95
    },
    {
      name: 'Soneri Bank',
      logo: '/soneri-bank.jpeg',
      description: '',
      width: 220,
      height: 95
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 pt-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: colors.neutral.darkGray }}>
          Our Bankers
        </h2>

        {/* Bankers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              {/* <p className="text-base leading-relaxed" style={{ color: colors.gray.text }}>
                {banker.description}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBankers;
