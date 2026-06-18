import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
    href: string;
    children: ReactNode;
    /** Base background color (a CSS color / token value). */
    bg: string;
    /** Background color on hover. */
    hoverBg: string;
    /** Focus ring color. Defaults to the hover color. */
    ringColor?: string;
    className?: string;
}

/**
 * Link-styled CTA button with CSS-driven hover + keyboard focus states.
 * Colors are passed through CSS custom properties so the background comes from
 * a class (not an inline `background`), which lets the `hover:` utility win.
 * Replaces the old inline onMouseEnter/onMouseLeave style mutation.
 */
export default function CtaButton({
    href,
    children,
    bg,
    hoverBg,
    ringColor,
    className,
}: CtaButtonProps) {
    return (
        <Link
            href={href}
            style={
                {
                    "--btn-bg": bg,
                    "--btn-bg-hover": hoverBg,
                    "--btn-ring": ringColor ?? hoverBg,
                } as CSSProperties
            }
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded font-semibold text-white",
                "bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--btn-ring)] focus-visible:ring-offset-2",
                className
            )}
        >
            {children}
        </Link>
    );
}
