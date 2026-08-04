import { colors } from "@/lib/colors";

const auditCommittee = [
    { name: "Mr. Naseer Ahmed", title: "Chairman" },
    { name: "Mr. Tariq Mehmood", title: "Member" },
    { name: "Mr. Shamim Ahmed Khan", title: "Member" },
];

const companySecretary = [
    { name: "Ms. Hina Ambreen", title: "Company Secretary" },
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
                            <div key={idx} className="flex flex-col items-center justify-center py-3">
                                <div className="flex flex-col items-center gap-1">
                                    <h3 className="text-lg md:text-xl font-semibold text-black text-center">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm md:text-base text-center mb-2" style={{ color: colors.gray.text }}>
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
                            <div key={idx} className="flex flex-col items-center justify-center py-3">
                                <div className="flex flex-col items-center gap-1">
                                    <h3 className="text-lg md:text-xl font-semibold text-black text-center">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm md:text-base text-center mb-2" style={{ color: colors.gray.text }}>
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
