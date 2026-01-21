import Image from "next/image";
import Link from "next/link";
import { colors } from "@/lib/colors";
import { Check } from "lucide-react";

const practices = [
    "Product research & development",
    "Manufacturing technology",
    "Operations management",
    "Materials and procurement processes",
    "Financial systems",
    "Information management"
];

export default function MissionStatement() {
    return (
        <section className="w-full py-12 md:py-16 px-4 md:px-20 bg-[#F6F6F6]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 lg:py-8">
                        {/* Label with blue line */}
                        <div className="flex items-center gap-3">
                            <div className="w-0.5 h-8 md:h-6" style={{ backgroundColor: colors.primary.blue }}></div>
                            <span className="text-sm md:text-base 2xl:text-lg" style={{ color: colors.gray.tagColor }}>
                                Mission Statement
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-4xl 2xl:text-[42px] font-semibold text-black">
                            Mission Statement
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-lg" style={{ color: colors.gray.text }}>
                            Our mission is to exceed customer expectations by producing high-quality plastic products with efficiency, precision, and consistency.
                            <br />
                            We achieve this by adopting international best practices across:
                        </p>

                        {/* Checklist */}
                        <div className="flex flex-col gap-2 md:gap-2.5">
                            {practices.map((practice, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Check
                                        className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5"
                                        style={{ color: colors.primary.blue }}
                                        strokeWidth={3}
                                    />
                                    <span className="text-base md:text-lg" style={{ color: colors.gray.text }}>
                                        {practice}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <Link
                            href="/contact"
                            className="px-6 py-3 text-white font-semibold rounded transition flex items-center justify-center gap-2 text-sm md:text-base w-fit mt-4"
                            style={{ backgroundColor: colors.primary.blue }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.orange.dark}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.blue}
                        >
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 5C3.75 3.67392 4.27678 2.40215 5.21447 1.46447C6.15215 0.526784 7.42392 0 8.75 0C10.0761 0 11.3479 0.526784 12.2855 1.46447C13.2232 2.40215 13.75 3.67392 13.75 5C13.75 6.32608 13.2232 7.59785 12.2855 8.53553C11.3479 9.47322 10.0761 10 8.75 10C7.42392 10 6.15215 9.47322 5.21447 8.53553C4.27678 7.59785 3.75 6.32608 3.75 5ZM0 18.8398C0 14.9922 3.11719 11.875 6.96484 11.875H10.5352C14.3828 11.875 17.5 14.9922 17.5 18.8398C17.5 19.4805 16.9805 20 16.3398 20H1.16016C0.519531 20 0 19.4805 0 18.8398ZM23.8008 20H18.4141C18.625 19.6328 18.75 19.207 18.75 18.75V18.4375C18.75 16.0664 17.6914 13.9375 16.0234 12.5078C16.1172 12.5039 16.207 12.5 16.3008 12.5H18.6992C22.1797 12.5 25 15.3203 25 18.8008C25 19.4648 24.4609 20 23.8008 20ZM16.875 10C15.6641 10 14.5703 9.50781 13.7773 8.71484C14.5469 7.67578 15 6.39062 15 5C15 3.95312 14.7422 2.96484 14.2852 2.09766C15.0117 1.56641 15.9062 1.25 16.875 1.25C19.293 1.25 21.25 3.20703 21.25 5.625C21.25 8.04297 19.293 10 16.875 10Z" fill="white" />
                            </svg>
                            FIND AN AGENT
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full aspect-4/3 bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                            src="/mission-statement.jpg"
                            alt="Mission Statement"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
