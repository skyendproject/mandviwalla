import React from 'react';
import Image from 'next/image';
import { colors } from '@/lib/colors';

const OurDirectors = () => {
    const directors = [
        {
            title: 'Chief Executive Officer (CEO)',
            name: 'Person Name here',
            description: 'Leads financial planning, budgeting, reporting, and investment stability. Maintains transparency and compliance with financial regulations. Supports cost optimization, and manages corporate financial stability.',
            image: '/board-directors/director-1.png'
        },
        {
            title: 'Chief Operating Officer (COO)',
            name: 'Person Name here',
            description: 'Responsible for day-to-day operations, ensuring efficient production and effective cost supply chain management. Ensures that all manufacturing processes comply with industry regulations, latest safety and quality standards.',
            image: '/board-directors/director-2.png'
        },
        {
            title: 'Chief Financial Officer (CFO)',
            name: 'Person Name here',
            description: 'Leads financial planning, budgeting, reporting, and investment stability. Maintains transparency and compliance with financial regulations. Supports cost optimization, and manages corporate financial stability.',
            image: '/board-directors/director-3.png'
        },
        {
            title: 'Head of Manufacturing',
            name: 'Person Name here',
            description: 'Oversees factory operations, production planning, quality testing, machine optimization, and workforce management. Ensures compliant production output, safety protocols, and timely delivery of products.',
            image: '/board-directors/director-4.png'
        },
        {
            title: 'Head of Sales & Marketing',
            name: 'Person Name here',
            description: 'Drives business growth by building customer relationships, expanding into new markets, and promoting brand visibility. Develops branding, product positioning, and customer satisfaction.',
            image: '/board-directors/director-5.png'
        },
        {
            title: 'Head of Supply Chain & Procurement',
            name: 'Person Name here',
            description: 'Manages procurement of raw materials, supplier relationships, logistics, and inventory control. Ensures material availability, cost efficiency, and timely delivery operations.',
            image: '/board-directors/director-6.png'
        }
    ];

    return (
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-0.5 h-5" style={{ backgroundColor: colors.primary.blue }}></div>
                        <p className="text-base font-semibold" style={{ color: colors.gray.text }}>
                            OUR DIRECTORS
                        </p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.neutral.darkGray }}>
                        Experienced Leadership Driving Operational Excellence
                    </h2>
                    <p className="text-base max-w-5xl mx-auto leading-relaxed" style={{ color: colors.gray.text }}>
                        Habib Islamic Mauser Plastic Industries Limited (HIMPL) is led by a highly skilled and experienced management team responsible for ensuring operational efficiency, quality manufacturing, financial discipline, and strategic growth. Each member of our leadership team brings decades of experience in manufacturing, engineering, operations, supply chain, finance, and corporate governance. Their combined expertise ensures that PIC company maintains the highest performance-driven, packaging solutions.
                    </p>
                </div>

                {/* Directors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {directors.map((director, index) => (
                        <div key={index} className="flex gap-4 p-4 rounded-lg border" style={{ borderColor: '#EAEAEA' }}>
                            {/* Profile Image */}
                            <div className="flex-shrink-0">
                                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                                    <Image
                                        src={director.image}
                                        alt={director.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: colors.neutral.darkGray }}>
                                    {director.title}
                                </h3>
                                <p className="text-sm font-semibold mb-2" style={{ color: colors.gray.text }}>
                                    {director.name}
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: colors.gray.text }}>
                                    {director.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                        Leadership Committed to Growth, Quality & Innovation
                    </h3>
                    <p className="text-base max-w-4xl mx-auto leading-snug" style={{ color: colors.gray.text }}>
                        Our management team works relentlessly to ensure operational excellence, sustainable growth, regulatory compliance, and continuous improvement. Their dedication forms the backbone of Mandviwalla Mauser's success among emerging innovation into plastic manufacturing industry.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurDirectors;
