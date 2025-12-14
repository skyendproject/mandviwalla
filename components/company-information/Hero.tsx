import Image from "next/image";
import { colors } from "@/lib/colors";

interface HeroProps {
    imagePath: string;
    heading: string;
    breadcrumbPath: string;
    imageAlt?: string;
}

export default function Hero({ imagePath, heading, breadcrumbPath, imageAlt }: HeroProps) {
    return (
        <section className="relative w-full h-48 md:h-[260px] overflow-hidden">
            {/* Background Image */}
            <Image
                src={imagePath}
                alt={imageAlt || heading}
                fill
                className="object-cover"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-white px-4">


                {/* Heading */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                    {heading}
                </h1>
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm md:text-base ">
                    <span style={{ color: colors.orange.dark }} className="font-semibold">
                        Profile
                    </span>
                    <span>/</span>
                    <span>{breadcrumbPath}</span>
                </div>
            </div>
        </section>
    );
}
