import { colors } from "@/lib/colors";

export default function About() {
    return (
        <div className="w-full bg-gray-50 py-12 md:pt-16 lg:pt-20 px-4 md:px-20">
            <div className="container mx-auto max-w-5xl text-center flex flex-col gap-6">
                <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-[42px] font-bold text-black">
                    Strong Governance. Ethical Leadership. Sustainable Growth.
                </h1>
                
                <div className="flex flex-col gap-4 text-sm md:text-base" style={{ color: colors.gray.text }}>
                    <p className="text-justify md:text-center leading-relaxed">
                        Mandviwalla Mauser Private Industries Limited (MMPL) is committed to providing the highest standards of corporate governance, transparency, and ethical management. Our governance framework ensures fairness, accountability, and responsible decision-making across all levels of the organization.
                    </p>
                    
                    <p className="text-justify md:text-center leading-relaxed">
                        We adhere to all applicable regulatory requirements and follow internationally recognized best practices to safeguard the interests of our shareholders, investors, employees, and stakeholders.
                    </p>
                </div>
            </div>
        </div>
    );
}
