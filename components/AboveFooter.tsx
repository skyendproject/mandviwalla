import Link from "next/link";
import { colors } from "@/lib/colors";

interface AboveFooterProps {
    variant?: "blue" | "dark";
}

export default function AboveFooter({ variant = "blue" }: AboveFooterProps) {
    const gradientBg = variant === "blue" 
        ? 'linear-gradient(to right, #1338BE66 40%, #D9DEF1)'
        : 'linear-gradient(to right, #333333 0%, #C4C4C4 30%)';
    
    const btnColor = variant === "blue" ? colors.primary.blue : '#F6BA18';
    const btnHoverColor = variant === "blue" ? colors.orange.dark : colors.primary.blue;

    return (
        <section
            className="w-full py-16 md:py-20 lg:py-24 px-4 h-[252px]"
            style={{ background: gradientBg }}
        >
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">
                    <div className="flex flex-col gap-2">
                        {/* Heading */}
                        <h2 className="text-2xl md:text-4xl 2xl:text-[42px] font-semibold" style={{ color: '#FFFFFF' }}>
                            Pakistan's Trusted Plastic Manufacturer
                        </h2>

                        {/* Description */}
                        <p className="text-sm font-normal md:text-md lg:text-md" style={{ color: '#FFFFFF' }}>
                            Get durable, innovative, and high-quality plastic solutions with MMPL.
                        </p>
                    </div>

                    {/* Contact Us Button */}
                    <Link
                        href="/contact"
                        className="px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded transition flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap self-center md:self-auto"
                        style={{ backgroundColor: btnColor }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = btnHoverColor}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = btnColor}
                    >
                        <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.75 10C7.42392 10 6.15215 9.47322 5.21447 8.53553C4.27678 7.59785 3.75 6.32608 3.75 5C3.75 3.67392 4.27678 2.40215 5.21447 1.46447C6.15215 0.526784 7.42392 0 8.75 0C10.0761 0 11.3479 0.526784 12.2855 1.46447C13.2232 2.40215 13.75 3.67392 13.75 5C13.75 6.32608 13.2232 7.59785 12.2855 8.53553C11.3479 9.47322 10.0761 10 8.75 10ZM8.16797 14.0312L7.44141 12.8203C7.19141 12.4023 7.49219 11.875 7.97656 11.875H8.75H9.51953C10.0039 11.875 10.3047 12.4062 10.0547 12.8203L9.32812 14.0312L10.6328 18.8711L12.0391 13.1328C12.1172 12.8164 12.4219 12.6094 12.7383 12.6914C15.4766 13.3789 17.5 15.8555 17.5 18.8008C17.5 19.4648 16.9609 20 16.3008 20H11.1523C11.0703 20 10.9961 19.9844 10.9258 19.957L10.9375 20H6.5625L6.57422 19.957C6.50391 19.9844 6.42578 20 6.34766 20H1.19922C0.539063 20 0 19.4609 0 18.8008C0 15.8516 2.02734 13.375 4.76172 12.6914C5.07812 12.6133 5.38281 12.8203 5.46094 13.1328L6.86719 18.8711L8.17188 14.0312H8.16797Z"
                                fill="white"
                            />
                        </svg>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
