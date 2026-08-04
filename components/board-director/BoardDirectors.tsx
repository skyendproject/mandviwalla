import { colors } from "@/lib/colors";

const directors = [
    { name: "Mr. Abdul Qadir Shiwani", title: "Chairman" },
    { name: "Mr. Azeem H. Mandviwalla", title: "Chief Executive Officer" },
    { name: "Mr. Shamim Ahmed Khan", title: "Director" },
    { name: "Mr. S. Asghar Ali", title: "Director" },
    { name: "Mr. Tariq Mehmood", title: "Director" },
    { name: "Mrs. Huma Darugar", title: "Female Director" },
    { name: "Mr. Naseer Ahmed", title: "Independent Director" },
];

export default function BoardDirectors() {
    return (
        <div className="w-full py-12 md:py-16 px-4 md:px-20">
            <div className="container mx-auto max-w-7xl">
                {/* Section Label */}
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-0.5 h-6 md:h-6" style={{ backgroundColor: colors.primary.blue }}></div>
                    <span className="text-sm md:text-base  font-semibold" style={{ color: colors.gray.tagColor }}>
                        OUR DIRECTORS
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">
                    Board of Directors
                </h2>

                {/* Description */}
                <p className="text-sm md:text-base text-center mb-10 md:mb-12 max-w-4xl mx-auto" style={{ color: colors.gray.text }}>
                    At Mandviwalla Mauser Plastic Limited (MWMP), our leadership team drives innovation, sustainability, and long-term growth. Guided by deep industry and operational knowledge, the Board ensures that every decision reflects our values and stakeholders.
                </p>

                {/* Directors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {directors.map((director, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center py-3">
                            <div className="flex flex-col items-center gap-0.5">
                                <h3 className="text-lg md:text-xl font-semibold text-black text-center">
                                    {director.name}
                                </h3>
                                <p className="text-sm md:text-base text-center" style={{ color: colors.gray.text }}>
                                    {director.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
