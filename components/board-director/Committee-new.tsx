import Image from "next/image";
import { colors } from "@/lib/colors";

const auditCommittee = [
    {
        name: "Mrs. Huma Darugar",
        title: "Chairperson",
        image: "/board-directors/huma-darugar-boardDir7.1.jpg",
    },
    {
        name: "Mr. Abdul Qadir Shiwani",
        title: "Member",
        image: "/board-directors/qadir-shiwani-boardDir8.jpg",
    },
    {
        name: "Mr. Shamim Ahmed Khan",
        title: "Member",
        image: "/board-directors/shamim-khan-boardDir9.jpg",
    }
];

const companySecretary = [
    {
        name: "Ms. Hina Ambreen",
        title: "Company Secretary",
        image: "/board-directors/hina-ambreen-boardDir10.jpg",
    }
];

export default function Committee() {
    return (
        <div className="w-full bg-white py-12 md:py-16 px-4 md:px-20">
            <div className="container mx-auto max-w-7xl">
                {/* Audit Committee Section */}
                <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-10 md:mb-12">
                    Audit Committee
                </h2>

                <div className="flex justify-center mb-16 md:mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl">
                        {auditCommittee.map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-full aspect-3/4 relative mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col items-center gap-0.5">
                                    <h3 className="text-lg md:text-xl font-semibold text-black text-center">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm md:text-base text-center" style={{ color: colors.gray.text }}>
                                        {member.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Company Secretary Section */}
                <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-10 md:mb-12">
                    Company Secretary
                </h2>

                <div className="flex justify-center">
                    <div className="max-w-xs">
                        {companySecretary.map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-full aspect-3/4 relative mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col items-center gap-0.5">
                                    <h3 className="text-lg md:text-xl font-semibold text-black text-center">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm md:text-base text-center" style={{ color: colors.gray.text }}>
                                        {member.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
