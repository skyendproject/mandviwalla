"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
    children: ReactNode;
    className?: string;
    /** Stagger delay in milliseconds. */
    delay?: number;
    /** Element to render as. Defaults to a div. */
    as?: ElementType;
    /** IntersectionObserver visibility threshold. */
    threshold?: number;
}

/**
 * Reveals its children with a subtle fade + slide-up as they scroll into view.
 * Fires once, then stops observing. `prefers-reduced-motion` is honored purely
 * with CSS (`motion-reduce:` utilities) so the content is shown immediately with
 * no transform or transition for users who request reduced motion.
 */
export default function Reveal({
    children,
    className,
    delay = 0,
    as,
    threshold = 0.15,
}: RevealProps) {
    const Tag = (as ?? "div") as ElementType;
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <Tag
            ref={ref}
            className={cn(
                "transition-all duration-700 ease-out will-change-transform",
                "motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                className
            )}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </Tag>
    );
}
