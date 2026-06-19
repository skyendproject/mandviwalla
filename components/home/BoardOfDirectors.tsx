import Image from "next/image";
import type { CSSProperties } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { colors } from "@/lib/colors";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function BoardOfDirectors() {
    const director = {
        name: "Azeem Mandviwalla",
        role: "Chief Executive / Director",
        image: "/azeem-mandviwalla.webp",
        // TODO: confirm or replace with approved CEO bio copy.
        bio: "Leading Mandviwalla Mauser with a focus on quality, innovation, and lasting partnerships — building on decades of German-backed manufacturing expertise since 1988.",
    };

    const socials = [
        { label: "LinkedIn", href: "#", Icon: Linkedin, color: colors.primary.blue },
        { label: "Facebook", href: "#", Icon: Facebook, color: colors.primary.blue },
        { label: "Instagram", href: "#", Icon: Instagram, color: colors.primary.orange },
    ];

    return (
        <section className="w-full py-14 md:py-20 px-4 md:px-12">
            <div className="container mx-auto max-w-7xl">

                {/* Header */}
                <SectionHeader
                    align="center"
                    eyebrow="Our Leadership"
                    title="Meet Our Chief Executive Officer"
                    subtitle="The leadership steering Mandviwalla Mauser's vision and growth."
                    className="mb-8 md:mb-12"
                />

                {/* CEO Profile */}
                <Reveal className="max-w-3xl mx-auto">
                    <div className="group flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-white rounded-card border border-[#E9E9E9] shadow-card p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                        {/* Portrait */}
                        <div className="relative w-44 h-52 sm:w-48 sm:h-56 xl:w-52 xl:h-64 flex-shrink-0 overflow-hidden rounded-xl">
                            <Image
                                src={director.image}
                                alt={director.name}
                                fill
                                sizes="(max-width: 640px) 176px, 208px"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl md:text-2xl font-semibold text-black mb-1">
                                {director.name}
                            </h3>
                            <p
                                className="text-sm md:text-base font-medium mb-3"
                                style={{ color: colors.primary.orange }}
                            >
                                {director.role}
                            </p>
                            <p
                                className="text-sm md:text-base leading-relaxed"
                                style={{ color: colors.gray.text }}
                            >
                                {director.bio}
                            </p>

                            {/* Socials */}
                            <div className="flex gap-3 justify-center sm:justify-start mt-5">
                                {socials.map(({ label, href, Icon, color }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        style={{ "--soc": color } as CSSProperties}
                                        className="grid place-items-center w-9 h-9 rounded-full border border-[#D9D9D9] text-[#888888] transition-colors hover:text-white hover:border-transparent hover:bg-[var(--soc)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--soc)] focus-visible:ring-offset-2"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
