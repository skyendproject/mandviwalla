import React from "react";
import Image from "next/image";

export default function ServiceSection() {
    const leftTilts = ["10deg", "-45deg", "40deg"];
    const rightTilts = ["-10deg", "45deg", "-40deg"];

    const cards = [
        {
            icon: <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2143 58.82C9.95258 55.2415 1 43.9161 1 30.5C1 14.2109 14.2109 1 30.5 1" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M38.7857 2.17993C51.0474 5.75841 60 17.0838 60 30.4999C60 46.7891 46.7891 59.9999 30.5 59.9999" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M18.9565 52.3044L22.8044 60H13.8261" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M42.0435 8.69565L38.1956 1H47.1739" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M30.4999 51.0214C41.8338 51.0214 51.0217 41.8336 51.0217 30.4997C51.0217 19.1659 41.8338 9.97797 30.4999 9.97797C19.1661 9.97797 9.9782 19.1659 9.9782 30.4997C9.9782 41.8336 19.1661 51.0214 30.4999 51.0214Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M30.5 51.0214C36.1669 51.0214 40.7609 41.8336 40.7609 30.4997C40.7609 19.1659 36.1669 9.97797 30.5 9.97797C24.8331 9.97797 20.2392 19.1659 20.2392 30.4997C20.2392 41.8336 24.8331 51.0214 30.5 51.0214Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M9.9782 30.5004H51.0217" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M11.9021 21.5216H49.0978" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M11.9021 39.4784H49.0978" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M30.5 9.97797V51.0214" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
            </svg>
            ,
            title: "Injection Moulding Products",
            description:
                "Automotive parts, rubbermaid items, plastic chairs, poultry equipment, household items, appliance components, battery containers.",
        },
        {
            icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51 18.3913H1L10.7826 1H41.2174L51 18.3913Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M51 18.3912H1.00003V50.9999H51V18.3912Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M45.5652 37.9562H30.3478V45.5649H45.5652V37.9562Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M33.6087 31.4347L26 27.0868L18.3913 31.4347V18.3912H33.6087V31.4347Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M30.3478 1H21.6522L18.3913 18.3913H33.6087L30.3478 1Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
            </svg>
            ,
            title: "Custom Plastic Solutions",
            description:
                "Tailored plastic solutions to meet diverse client needs.",
        },
        {
            icon: <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.69561 51C12.8978 51 16.3043 47.5935 16.3043 43.3913C16.3043 39.1891 12.8978 35.7826 8.69561 35.7826C4.49344 35.7826 1.08691 39.1891 1.08691 43.3913C1.08691 47.5935 4.49344 51 8.69561 51Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M6.52174 35.7826V6.43478C6.52174 3.43478 4.08696 1 1.08696 1H0" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M16.3044 45.5654H51.087L47.8261 51.0002" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M7.6087 43.3911H9.78262" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M31.5218 10.7828H16.3044V21.6523L23.9131 18.3915L31.5218 21.6523V10.7828Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M15.7283 45.5654H41.3043V10.7828H6.52173V36.3589" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M26.0869 41.2172H33.6956" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
                <path d="M26.0869 36.8695H38.0434" stroke="white" strokeWidth="2" strokeMiterlimit="10" stroke-linejoin="round" />
            </svg>
            ,
            title: "Blow Moulding Products",
            description:
                "210-liter industrial plastic drums manufactured with German technology under patented designs.",
        },
    ];

    return (
        <section className="relative bg-[#1338BE] py-8 px-4 md:px-20 overflow-hidden z-0 mb-4">
            {/* Background overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-100 pointer-events-none">
                <Image
                    src="/assets/circle-lines.png"
                    alt="Compress Line"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div className="container mx-auto relative z-10 mt-8">

                {/* Heading */}
                <div className="text-center mb-6 relative z-10">
                    <p className="text-white/80 text-sm md:text-base">
                        <span className="border-l-2 border-[#F28500] pl-2 inline-block">
                            Our Services / Products
                        </span>
                    </p>

                    <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 whitespace-normal md:whitespace-nowrap">
                        We Ensure High-Quality Plastic Manufacturing
                    </h2>

                    <p className="text-white/80 text-sm md:text-sm mt-3 text-center whitespace-normal max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>
                </div>

                {/* Left Containers - absolute */}
                <div className="absolute top-0 left-0 flex flex-col gap-12 z-10">
                    {[0, 1, 2].map((idx) => (
                        <div
                            key={idx}
                            className="w-20 md:w-16"
                            style={{ transform: `rotate(${leftTilts[idx]})` }}
                        >
                            <Image
                                src="/assets/services-container.png"
                                alt={`Container ${idx + 1}`}
                                width={70}
                                height={70}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Containers - absolute */}
                <div className="absolute top-0 right-0 flex flex-col gap-12 z-10">
                    {[0, 1, 2].map((idx) => (
                        <div
                            key={idx}
                            className="w-20 md:w-16"
                            style={{ transform: `rotate(${rightTilts[idx]})` }}
                        >
                            <Image
                                src="/assets/services-container.png"
                                alt={`Container ${idx + 4}`}
                                width={70}
                                height={70}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </div>

                {/* Cards */}
                <div className="flex justify-center gap-6 mt-16 relative z-10">
                    {cards.map((card, idx) => {
                        const isMiddle = idx === 1;
                        const cardBg = isMiddle ? "#F28500" : "white";
                        const iconBorder = isMiddle ? "#F28500" : "white";
                        const iconBg = "#2C3E50";
                        const textColor = isMiddle ? "text-white" : "text-gray-600";

                        return (
                            <div
                                key={idx}
                                className="relative rounded-lg pt-14 px-4 pb-4 flex flex-col items-center text-center shadow-md"
                                style={{ backgroundColor: cardBg, width: "220px" }}
                            >
                                <div
                                    className="absolute -top-10 rounded-full p-3 flex items-center justify-center"
                                    style={{ border: `2px solid ${iconBorder}`, backgroundColor: iconBg }}
                                >
                                    {card.icon}
                                </div>
                                <h4 className="text-xl font-semibold mb-1">{card.title}</h4>
                                <p className={`${textColor} text-sm leading-snug`}>
                                    {card.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>

    );
}
