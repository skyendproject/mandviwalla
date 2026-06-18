import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/colors";

interface SectionHeaderProps {
    eyebrow: string;
    title: ReactNode;
    subtitle?: ReactNode;
    align?: "left" | "center";
    /** Accent color for the eyebrow's left border. Defaults to the brand orange. */
    accentColor?: string;
    /** "light" renders white text for use on dark/blue backgrounds. */
    tone?: "dark" | "light";
    className?: string;
    titleClassName?: string;
}

/**
 * Unified "eyebrow + heading" block used across the home page sections.
 * Replaces the previously inconsistent inline variants.
 */
export default function SectionHeader({
    eyebrow,
    title,
    subtitle,
    align = "left",
    accentColor = colors.orange.dark,
    tone = "dark",
    className,
    titleClassName,
}: SectionHeaderProps) {
    const isLight = tone === "light";

    return (
        <div
            className={cn(
                "flex flex-col gap-2 xl:gap-3",
                align === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            <span
                className="border-l-4 pl-3 text-xs md:text-sm font-semibold uppercase tracking-wide"
                style={{
                    borderColor: accentColor,
                    color: isLight ? colors.white : colors.gray.tagColor,
                    fontFamily: "var(--font-lato)",
                }}
            >
                {eyebrow}
            </span>

            <h2
                className={cn(
                    "text-2xl md:text-3xl font-semibold leading-snug",
                    isLight ? "text-white" : "text-black",
                    titleClassName
                )}
            >
                {title}
            </h2>

            {subtitle ? (
                <p
                    className={cn(
                        "text-sm md:text-base max-w-2xl",
                        isLight && "text-white/80"
                    )}
                    style={!isLight ? { color: colors.gray.text } : undefined}
                >
                    {subtitle}
                </p>
            ) : null}
        </div>
    );
}
