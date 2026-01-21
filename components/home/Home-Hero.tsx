"use client";

import Link from "next/link";
import { colors } from "@/lib/colors";

export default function Hero() {
    return (
        <section className="relative w-full h-[80vh] md:h-[90vh] mb-24">
            {/* Background Image with bottom curve */}
            <div 
                className="absolute inset-0 bg-cover bg-center hero-image-clip"
                style={{
                    backgroundImage: "url('/assets/home-banner.jpg')",
                    clipPath: "md:polygon(0 0, 100% 0, 100% 88%, 0 100%)",
                }}
            />

            {/* Dark overlay (optional, only over image, not over orange) */}
            <div
                className="absolute inset-0 hero-image-clip"
                style={{ backgroundColor: "rgba(0,0,0,0.4)", clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
            />

            {/* Bottom-right orange trim starting immediately after image */}
            <div className="absolute bottom-0 w-full h-[40%] clip-path-orange" style={{ backgroundColor: colors.orange.warm }} />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-white">
                <span className="uppercase text-sm md:text-lg tracking-widest mb-2 border-l-2 pl-2" style={{ borderColor: colors.orange.dark }}>
                    PROTECT YOUR LIFE
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-3 md:mb-4">
                    Shaping the Future with Quality Plastic Solutions
                </h1>
                <p className="text-sm md:text-base max-w-3xl mb-4 md:mb-6 leading-normal">
                    Since 1988, Mandviwalla Mauser Plastic Industries Limited has been delivering world-class
                    injection and blow-moulded plastic products in Pakistan. Powered by German technology and
                    decades of expertise, we are the pioneers of 210-liter industrial drums and premium plastic
                    solutions.
                </p>

                {/* Buttons */}
                <div className="flex flex-row gap-3 md:gap-4">
                    <Link
                        href="/products"
                        className="px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded transition flex items-center justify-center gap-2 text-sm md:text-base"
                        style={{ backgroundColor: colors.primary.blue }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.orange.dark}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.blue}
                    >
                        <svg
                            width="25"
                            height="20"
                            viewBox="0 0 25 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.75 5C3.75 3.67392 4.27678 2.40215 5.21447 1.46447C6.15215 0.526784 7.42392 0 8.75 0C10.0761 0 11.3479 0.526784 12.2855 1.46447C13.2232 2.40215 13.75 3.67392 13.75 5C13.75 6.32608 13.2232 7.59785 12.2855 8.53553C11.3479 9.47322 10.0761 10 8.75 10C7.42392 10 6.15215 9.47322 5.21447 8.53553C4.27678 7.59785 3.75 6.32608 3.75 5ZM0 18.8398C0 14.9922 3.11719 11.875 6.96484 11.875H10.5352C14.3828 11.875 17.5 14.9922 17.5 18.8398C17.5 19.4805 16.9805 20 16.3398 20H1.16016C0.519531 20 0 19.4805 0 18.8398ZM23.8008 20H18.4141C18.625 19.6328 18.75 19.207 18.75 18.75V18.4375C18.75 16.0664 17.6914 13.9375 16.0234 12.5078C16.1172 12.5039 16.207 12.5 16.3008 12.5H18.6992C22.1797 12.5 25 15.3203 25 18.8008C25 19.4648 24.4609 20 23.8008 20ZM16.875 10C15.6641 10 14.5703 9.50781 13.7773 8.71484C14.5469 7.67578 15 6.39062 15 5C15 3.95312 14.7422 2.96484 14.2852 2.09766C15.0117 1.56641 15.9062 1.25 16.875 1.25C19.293 1.25 21.25 3.20703 21.25 5.625C21.25 8.04297 19.293 10 16.875 10Z"
                                fill="white"
                            />
                        </svg>
                        Explore Products
                    </Link>

                    <Link
                        href="/contact"
                        className="px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded transition flex items-center justify-center gap-2 text-sm md:text-base"
                        style={{ backgroundColor: colors.orange.dark }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary.blue}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.orange.dark}
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

            <style jsx>{`
/* DEFAULT (mobile & small tablets) — softer clip */
.hero-image-clip {
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
}

.clip-path-orange {
  clip-path: polygon(
    100% 68%,
    30% 90%,
    100% 90%
  );
}

/* md+ screens — EXACT current behavior */
@media (min-width: 768px) {
  .hero-image-clip {
    clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
  }

  .clip-path-orange {
    clip-path: polygon(
      100% 62%,
      33% 90%,
      100% 100%
    );
  }
}
`}</style>


        </section>
    );
}
