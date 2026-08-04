"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { colors } from "@/lib/colors";
import MobileHeader from "@/components/header/MobileHeader";

type Slide = {
    src: string;
    kicker: string;
    title: React.ReactNode;
    lede: string;
    primary: { href: string; label: string };
    secondary: { href: string; label: string };
    tabLabel: string;
};

const SLIDES: Slide[] = [
    {
        src: "/assets/hero/hero-drums-1.jpeg",
        kicker: "Since 1988 · Karachi, Pakistan",
        title: (
            <>
                Shaping the <span className="hero-accent">Future</span> of Plastic Manufacturing
            </>
        ),
        lede:
            "Three decades of world-class injection and blow-moulded plastic products — engineered in Pakistan, trusted by industry across the region.",
        primary: { href: "/products", label: "Explore Products" },
        secondary: { href: "/contact-us", label: "Contact Us" },
        tabLabel: "HERITAGE",
    },
    {
        src: "/assets/hero/hero-drums-1.jpeg",
        kicker: "Powered by German Technology",
        title: (
            <>
                Precision Moulding, <span className="hero-accent">World-Class</span> Output
            </>
        ),
        lede:
            "State-of-the-art German machinery and decades of process expertise deliver consistency, strength and finish — batch after batch.",
        primary: { href: "/products", label: "Our Capabilities" },
        secondary: { href: "/company-profile", label: "Corporate Profile" },
        tabLabel: "TECHNOLOGY",
    },
    {
        src: "/assets/hero/hero-drums-1.jpeg",
        kicker: "Pioneers of the 210-Litre Drum",
        title: (
            <>
                Pakistan&apos;s Trusted <span className="hero-accent">Industrial</span> Drums
            </>
        ),
        lede:
            "From the iconic 210-litre industrial drum to premium custom mouldings — built to perform, certified to last, delivered at scale.",
        primary: { href: "/products", label: "View Range" },
        secondary: { href: "/contact-us", label: "Get a Quote" },
        tabLabel: "PRODUCTS",
    },
];

const DUR = 6800;

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (paused) return;
        if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        timerRef.current = setTimeout(() => setCurrent((c) => (c + 1) % SLIDES.length), DUR);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [current, paused]);

    const go = (n: number) => setCurrent(((n % SLIDES.length) + SLIDES.length) % SLIDES.length);

    // counters
    const [count37, setCount37] = useState(0);
    const [count210, setCount210] = useState(0);
    const [count100, setCount100] = useState(0);
    useEffect(() => {
        const t0 = performance.now();
        const dur = 1800;
        const delay = 1200;
        const ease = (t: number) => 1 - Math.pow(1 - t, 3);
        let raf = 0;
        const tick = (now: number) => {
            const p = Math.min(Math.max((now - t0 - delay) / dur, 0), 1);
            const e = ease(p);
            setCount37(Math.round(e * 37));
            setCount210(Math.round(e * 210));
            setCount100(Math.round(e * 100));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <section
            className="hero-shell relative w-full overflow-hidden isolate"
            aria-roledescription="carousel"
            aria-label="Featured"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* background slides */}
            {SLIDES.map((s, i) => (
                <div
                    key={i}
                    className={`hero-slide absolute inset-0 ${i === current ? "is-active" : ""} ${i % 2 === 1 ? "alt" : ""}`}
                    aria-hidden={i !== current}
                >
                    <Image
                        src={s.src}
                        alt=""
                        fill
                        priority={i === 0}
                        sizes="100vw"
                        className="hero-bg object-cover object-center"
                    />
                </div>
            ))}

            {/* overlays */}
            <div className="hero-shade absolute inset-0 z-[2] pointer-events-none" />
            <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
            <div className="hero-orb hero-orb-a absolute z-[2] pointer-events-none" />
            <div className="hero-orb hero-orb-b absolute z-[2] pointer-events-none" />

            {/* ============ HEADER (overlay) ============ */}
            {/* Desktop */}
            <header className="hero-topbar hidden lg:flex absolute top-0 left-0 right-0 z-20 items-center justify-between">
                <Link href="/" className="flex items-center gap-3 text-white no-underline">
                    <Image src="/new-logo.jpg" width={44} height={44} alt="Mandviwalla" className="rounded-md object-cover" />
                    <div className="leading-tight">
                        <div className="font-bold text-[17px] tracking-wide">
                            Mandviwalla <span style={{ color: colors.orange.dark }}>MAUSER</span>
                        </div>
                        <div className="text-[11.5px] uppercase tracking-[1.5px] text-white/70 font-normal">
                            Plastic Industries Ltd.
                        </div>
                    </div>
                </Link>

                <nav className="hero-nav flex items-center gap-8">
                    <Link href="/" className="hero-nav-link">Home</Link>

                    <div className="relative group hero-menu">
                        <button className="hero-nav-link inline-flex items-center gap-1">
                            Profile <ChevronDown size={14} className="hero-caret" />
                        </button>
                        <div className="hero-dd hero-dd-panel absolute left-0 top-full w-60">
                            <Link href="/company-profile" className="hero-dd-item">Company Profile</Link>
                            <Link href="/mission-vision" className="hero-dd-item">Mission &amp; Vision</Link>
                            <Link href="/code-of-conduct-policy" className="hero-dd-item">Code of Conduct</Link>
                        </div>
                    </div>

                    <div className="relative group hero-menu">
                        <button className="hero-nav-link inline-flex items-center gap-1">
                            Corporate <ChevronDown size={14} className="hero-caret" />
                        </button>
                        <ul className="hero-dd hero-dd-panel absolute right-0 top-full w-60 list-none">
                            {/* Governance (nested) */}
                            <li className="relative hero-sub-wrap">
                                <span className="hero-dd-item hero-dd-parent flex items-center justify-between">
                                    <span>Governance</span>
                                    <span className="hero-nested-caret">‹</span>
                                </span>
                                <ul className="hero-dd hero-sub-panel absolute top-0 right-full w-64 list-none">
                                    <li><Link href="/corporate-governance" className="hero-dd-item">Corporate Governance</Link></li>
                                    <li><Link href="/board-director" className="hero-dd-item">Board of Director</Link></li>
                                    <li><Link href="/parent-company" className="hero-dd-item">Parent Company</Link></li>
                                    <li><Link href="/share-holding" className="hero-dd-item">Share Holding Pattern</Link></li>
                                    <li><Link href="/company-auditor" className="hero-dd-item">Auditor of the Company</Link></li>
                                    <li><Link href="/legal-advisor" className="hero-dd-item">Legal Support</Link></li>
                                    <li><Link href="/tax-consultant" className="hero-dd-item">Tax Consultant</Link></li>
                                </ul>
                            </li>

                            {/* Investor Relation (nested) */}
                            <li className="relative hero-sub-wrap">
                                <span className="hero-dd-item hero-dd-parent flex items-center justify-between">
                                    <span>Investor Relation</span>
                                    <span className="hero-nested-caret">‹</span>
                                </span>
                                <ul className="hero-dd hero-sub-panel absolute top-0 right-full w-64 list-none">
                                    <li><Link href="/corporate-briefing-session" className="hero-dd-item">Corporate Briefing Session</Link></li>
                                    <li><Link href="/investor-information" className="hero-dd-item">Investor Information</Link></li>
                                    <li><Link href="/financial-reports" className="hero-dd-item">Financial Reports</Link></li>
                                    <li><Link href="/financial-results" className="hero-dd-item">Financial Results</Link></li>
                                    <li><Link href="/investor-disclosure" className="hero-dd-item">Gender Pay Gap Disclosure</Link></li>
                                    <li><Link href="/investor-notices" className="hero-dd-item">Notices</Link></li>
                                </ul>
                            </li>

                            <li><Link href="/election-director" className="hero-dd-item">Election of Director</Link></li>
                        </ul>
                    </div>

                    <Link href="/products" className="hero-nav-link">Products</Link>

                    <Link href="/contact-us" className="hero-cta">Contact Us</Link>
                </nav>
            </header>

            {/* Mobile header (reuses existing mobile menu) */}
            <div className="lg:hidden absolute top-0 left-0 right-0 z-20" style={{ backgroundColor: "transparent" }}>
                <div className="w-full" style={{ backgroundColor: "rgba(10,18,48,0.55)", backdropFilter: "blur(8px)" }}>
                    <MobileHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                </div>
            </div>

            {/* ============ HERO CONTENT ============ */}
            <div className="hero-stage relative z-10 h-full flex items-center">
                {SLIDES.map((s, i) => (
                    <div key={i} className={`hero-content ${i === current ? "is-active" : ""}`} aria-hidden={i !== current}>
                        <p className="hero-kicker">
                            <span className="hero-bar" />
                            {s.kicker}
                        </p>
                        <h1 className="hero-title">{s.title}</h1>
                        <p className="hero-lede">{s.lede}</p>
                        <div className="hero-actions">
                            <Link href={s.primary.href} className="hero-btn hero-btn-primary">
                                {s.primary.label} <span className="hero-arr">→</span>
                            </Link>
                            <Link href={s.secondary.href} className="hero-btn hero-btn-ghost">
                                {s.secondary.label}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* controls rail */}
            <div className="hero-rail absolute z-[15]">
                <div className="hero-tabs" role="tablist">
                    {SLIDES.map((s, i) => (
                        <button
                            key={i}
                            className={`hero-tab ${i === current ? "is-active" : ""}`}
                            onClick={() => go(i)}
                            role="tab"
                            aria-selected={i === current}
                            aria-label={`Slide ${i + 1}`}
                        >
                            <span className="hero-tab-num">
                                {String(i + 1).padStart(2, "0")}{" "}
                                <small>{s.tabLabel}</small>
                            </span>
                            <span className="hero-track">
                                <i className={paused ? "is-paused" : ""} />
                            </span>
                        </button>
                    ))}
                </div>
                <div className="hero-arrows hidden md:flex">
                    <button className="hero-arrow" onClick={() => go(current - 1)} aria-label="Previous slide">←</button>
                    <button className="hero-arrow" onClick={() => go(current + 1)} aria-label="Next slide">→</button>
                </div>
            </div>

            {/* stats */}
            <div className="hero-stats absolute z-[15]">
                <div className="hero-stat">
                    <b><em>{count37}</em>+</b>
                    <span>Years of Excellence</span>
                </div>
                <div className="hero-stat">
                    <b><em>{count210}</em>L</b>
                    <span>Drum Pioneers</span>
                </div>
                <div className="hero-stat">
                    <b><em>{count100}</em>%</b>
                    <span>German Technology</span>
                </div>
            </div>

            {/* scroll cue */}
            <div className="hero-cue absolute z-[15]">Scroll</div>

            <style jsx>{`
                .hero-shell {
                    height: 100vh;
                    min-height: 640px;
                    background: #0a1230;
                    color: #f5f7ff;
                }

                /* slides */
                .hero-slide {
                    opacity: 0;
                    transition: opacity 1.5s ease;
                    will-change: opacity;
                }
                .hero-slide.is-active { opacity: 1; z-index: 1; }
                :global(.hero-bg) {
                    transform: scale(1.06);
                }
                .hero-slide.is-active :global(.hero-bg) {
                    animation: heroKen 9s cubic-bezier(.16,1,.3,1) forwards;
                }
                .hero-slide.is-active.alt :global(.hero-bg) {
                    animation-name: heroKenAlt;
                }
                @keyframes heroKen {
                    from { transform: scale(1.14) translate(1.2%, -1%); }
                    to   { transform: scale(1.04) translate(0, 0); }
                }
                @keyframes heroKenAlt {
                    from { transform: scale(1.14) translate(-1.2%, 1%); }
                    to   { transform: scale(1.04) translate(0, 0); }
                }

                /* overlays */
                .hero-shade {
                    background:
                        linear-gradient(100deg, rgba(7,13,38,.92) 0%, rgba(7,13,38,.72) 34%, rgba(7,13,38,.28) 62%, rgba(7,13,38,.10) 100%),
                        linear-gradient(to top, rgba(7,13,38,.85) 0%, rgba(7,13,38,0) 38%);
                }
                .hero-grid {
                    opacity: .35;
                    background-image:
                        linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
                    background-size: 72px 72px;
                    -webkit-mask-image: linear-gradient(115deg, black 0%, transparent 55%);
                    mask-image: linear-gradient(115deg, black 0%, transparent 55%);
                }
                .hero-orb {
                    border-radius: 50%;
                    filter: blur(90px);
                    opacity: .5;
                }
                .hero-orb-a {
                    width: 520px; height: 520px; left: -160px; top: 8%;
                    background: radial-gradient(circle, #2b4bff 0%, transparent 70%);
                    animation: heroDriftA 16s ease-in-out infinite alternate;
                }
                .hero-orb-b {
                    width: 460px; height: 460px; right: -140px; bottom: -10%;
                    background: radial-gradient(circle, ${colors.orange.dark} 0%, transparent 70%);
                    opacity: .28;
                    animation: heroDriftB 19s ease-in-out infinite alternate;
                }
                @keyframes heroDriftA { from{transform:translate(0,0)} to{transform:translate(70px,50px)} }
                @keyframes heroDriftB { from{transform:translate(0,0)} to{transform:translate(-60px,-60px)} }

                /* topbar */
                .hero-topbar {
                    padding: 22px clamp(24px, 4.5vw, 72px);
                }
                .hero-nav-link {
                    color: #ffffff;
                    text-decoration: none;
                    font-family: var(--font-lato), sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: .5px;
                    text-transform: uppercase;
                    position: relative;
                    transition: color .3s;
                    background: transparent;
                    border: 0;
                    cursor: pointer;
                }
                .hero-nav-link::after {
                    content: "";
                    position: absolute;
                    left: 0; bottom: -6px; height: 2px; width: 0;
                    background: ${colors.orange.dark};
                    transition: width .35s cubic-bezier(.16,1,.3,1);
                }
                .hero-nav-link:hover { color: #fff; }
                .hero-nav-link:hover::after { width: 100%; }

                .hero-cta {
                    background: ${colors.orange.dark};
                    color: #fff;
                    padding: 11px 22px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 14px;
                    text-decoration: none;
                    transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s;
                }
                .hero-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(242,133,0,.4); }

                .hero-menu :global(.hero-caret) {
                    transition: transform .3s cubic-bezier(.16,1,.3,1);
                }
                .hero-menu:hover :global(.hero-caret) {
                    transform: rotate(180deg);
                }

                .hero-dd {
                    background: rgba(10,18,48,.96);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border: 1px solid rgba(255,255,255,.08);
                    border-radius: 12px;
                    padding: 6px;
                    margin: 0;
                    box-shadow: 0 20px 50px rgba(0,0,0,.45);
                }

                /* Top-level panel — hover-safe gap using padding+top */
                .hero-dd-panel {
                    margin-top: 12px;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(8px);
                    transition: opacity .25s cubic-bezier(.16,1,.3,1), transform .25s cubic-bezier(.16,1,.3,1), visibility 0s linear .25s;
                }
                .hero-dd-panel::before {
                    content: "";
                    position: absolute;
                    left: 0; right: 0;
                    top: -12px;
                    height: 12px;
                }
                .hero-menu:hover .hero-dd-panel,
                .hero-menu:focus-within .hero-dd-panel {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                    transition: opacity .25s cubic-bezier(.16,1,.3,1), transform .25s cubic-bezier(.16,1,.3,1), visibility 0s;
                }

                /* Nested submenu — opens to the LEFT of parent */
                .hero-sub-panel {
                    margin-right: 8px;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateX(6px);
                    transition: opacity .25s cubic-bezier(.16,1,.3,1), transform .25s cubic-bezier(.16,1,.3,1), visibility 0s linear .25s;
                }
                .hero-sub-panel::before {
                    content: "";
                    position: absolute;
                    top: 0; bottom: 0;
                    right: -10px;
                    width: 10px;
                }
                .hero-sub-wrap:hover .hero-sub-panel {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(0);
                    transition: opacity .25s cubic-bezier(.16,1,.3,1), transform .25s cubic-bezier(.16,1,.3,1), visibility 0s;
                }

                :global(.hero-dd-item) {
                    display: block;
                    padding: 10px 14px;
                    border-radius: 8px;
                    color: rgba(245,247,255,.82);
                    text-decoration: none;
                    font-size: 13.5px;
                    letter-spacing: .3px;
                    line-height: 1.35;
                    transition: background .2s, color .2s, padding-left .2s;
                }
                :global(a.hero-dd-item:hover) {
                    background: rgba(255,255,255,.07);
                    color: #fff;
                    padding-left: 18px;
                }

                :global(.hero-dd-parent) {
                    cursor: default;
                    position: relative;
                }
                :global(.hero-dd-parent:hover) {
                    background: rgba(255,255,255,.07);
                    color: #fff;
                }
                :global(.hero-nested-caret) {
                    color: ${colors.orange.dark};
                    font-size: 18px;
                    line-height: 1;
                    transform: translateY(-1px);
                    transition: transform .25s cubic-bezier(.16,1,.3,1);
                }
                .hero-sub-wrap:hover :global(.hero-nested-caret) {
                    transform: translate(-3px, -1px);
                }

                /* stage */
                .hero-stage {
                    padding: 0 clamp(24px, 6vw, 96px);
                }
                .hero-content {
                    position: absolute;
                    max-width: 720px;
                    visibility: hidden;
                }
                .hero-content.is-active {
                    visibility: visible;
                    position: relative;
                }
                .hero-content > :global(*) {
                    opacity: 0;
                    transform: translateY(34px);
                }
                .hero-content.is-active > :global(*) {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
                }
                .hero-content.is-active > :global(*:nth-child(1)) { transition-delay: .15s; }
                .hero-content.is-active > :global(*:nth-child(2)) { transition-delay: .28s; }
                .hero-content.is-active > :global(*:nth-child(3)) { transition-delay: .42s; }
                .hero-content.is-active > :global(*:nth-child(4)) { transition-delay: .56s; }

                .hero-kicker {
                    display: flex; align-items: center; gap: 14px;
                    font-size: 13px; font-weight: 600;
                    letter-spacing: 3.5px; text-transform: uppercase;
                    color: #ffab4d;
                    margin: 0;
                }
                .hero-bar {
                    width: 44px; height: 2px;
                    background: ${colors.orange.dark};
                    position: relative; overflow: hidden;
                }
                .hero-bar::after {
                    content: "";
                    position: absolute; inset: 0;
                    background: #fff;
                    transform: translateX(-100%);
                }
                .hero-content.is-active .hero-bar::after {
                    animation: heroSheen 2.6s ease 1s infinite;
                }
                @keyframes heroSheen {
                    0%   { transform: translateX(-100%); }
                    45%,100% { transform: translateX(100%); }
                }

                .hero-title {
                    font-family: "EB Garamond", Garamond, "Times New Roman", serif;
                    font-weight: 800;
                    font-size: clamp(34px, 5.2vw, 68px);
                    line-height: 1.06;
                    letter-spacing: -1px;
                    margin: 22px 0 22px;
                    text-wrap: balance;
                }
                :global(.hero-accent) {
                    background: linear-gradient(92deg, #ffab4d 0%, ${colors.orange.dark} 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                .hero-lede {
                    font-size: clamp(15px, 1.35vw, 18px);
                    line-height: 1.7;
                    color: rgba(245,247,255,.72);
                    max-width: 560px;
                    font-weight: 400;
                    margin: 0;
                }
                .hero-actions {
                    display: flex; gap: 16px; margin-top: 36px; flex-wrap: wrap;
                }
                :global(.hero-btn) {
                    display: inline-flex; align-items: center; gap: 12px;
                    font-weight: 600; font-size: 15px;
                    padding: 14px 26px; border-radius: 10px;
                    text-decoration: none;
                    transition: transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s, background .3s, color .3s;
                }
                :global(.hero-btn-primary) {
                    background: ${colors.orange.dark};
                    color: #fff;
                    box-shadow: 0 12px 32px rgba(242,133,0,.35);
                }
                :global(.hero-btn-primary:hover) {
                    transform: translateY(-3px);
                    box-shadow: 0 18px 40px rgba(242,133,0,.45);
                }
                :global(.hero-arr) { transition: transform .35s cubic-bezier(.16,1,.3,1); }
                :global(.hero-btn-primary:hover .hero-arr) { transform: translateX(5px); }
                :global(.hero-btn-ghost) {
                    color: #fff;
                    border: 1.5px solid rgba(245,247,255,.35);
                    backdrop-filter: blur(6px);
                    background: rgba(255,255,255,.04);
                }
                :global(.hero-btn-ghost:hover) {
                    border-color: ${colors.orange.dark};
                    color: #ffab4d;
                    transform: translateY(-3px);
                }

                /* rail */
                .hero-rail {
                    left: clamp(24px, 6vw, 96px);
                    bottom: 48px;
                    display: flex; align-items: flex-end; gap: 34px;
                }
                .hero-tabs { display: flex; gap: 10px; }
                .hero-tab {
                    background: none; border: 0; cursor: pointer;
                    padding: 10px 4px 14px;
                    color: rgba(245,247,255,.72);
                    text-align: left; min-width: 118px;
                    transition: color .3s;
                }
                .hero-tab-num {
                    font-weight: 700; font-size: 13px; letter-spacing: 1px;
                    display: flex; align-items: baseline; gap: 8px;
                }
                .hero-tab-num small {
                    font-size: 10px; font-weight: 500;
                    color: rgba(245,247,255,.4); letter-spacing: 2px;
                }
                .hero-track {
                    display: block; height: 2px; margin-top: 10px; width: 100%;
                    background: rgba(245,247,255,.18);
                    position: relative; overflow: hidden; border-radius: 2px;
                }
                .hero-track i {
                    position: absolute; inset: 0;
                    background: ${colors.orange.dark};
                    border-radius: 2px;
                    transform: scaleX(0);
                    transform-origin: left;
                }
                .hero-tab:hover, .hero-tab.is-active { color: #fff; }
                .hero-tab.is-active .hero-track i {
                    animation: heroFill ${DUR}ms linear forwards;
                }
                .hero-tab.is-active .hero-track i.is-paused {
                    animation-play-state: paused;
                }
                @keyframes heroFill {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }

                .hero-arrows { display: flex; gap: 10px; padding-bottom: 10px; }
                .hero-arrow {
                    width: 46px; height: 46px; border-radius: 50%;
                    border: 1.5px solid rgba(245,247,255,.3);
                    background: rgba(10,18,48,.35);
                    backdrop-filter: blur(8px);
                    color: #fff; cursor: pointer;
                    display: grid; place-items: center;
                    font-size: 17px;
                    transition: all .3s cubic-bezier(.16,1,.3,1);
                }
                .hero-arrow:hover {
                    background: ${colors.orange.dark};
                    border-color: ${colors.orange.dark};
                    transform: scale(1.08);
                }

                /* stats */
                .hero-stats {
                    right: clamp(24px, 4.5vw, 72px);
                    bottom: 48px;
                    display: flex; gap: 0;
                    background: rgba(10,18,48,.5);
                    backdrop-filter: blur(14px);
                    border: 1px solid rgba(245,247,255,.12);
                    border-radius: 16px;
                    padding: 20px 8px;
                    opacity: 0; transform: translateY(26px);
                    animation: heroStatsIn 1s cubic-bezier(.16,1,.3,1) 1.1s forwards;
                }
                @keyframes heroStatsIn { to { opacity: 1; transform: translateY(0); } }
                .hero-stat {
                    padding: 0 28px;
                    border-right: 1px solid rgba(245,247,255,.12);
                    text-align: center;
                }
                .hero-stat:last-child { border-right: 0; }
                .hero-stat b {
                    font-weight: 800; font-size: 30px; color: #fff;
                    display: block; line-height: 1.1;
                }
                .hero-stat b em {
                    font-style: normal;
                    color: ${colors.orange.dark};
                }
                .hero-stat span {
                    font-size: 11.5px; letter-spacing: 1.6px;
                    text-transform: uppercase;
                    color: rgba(245,247,255,.72);
                    display: block; margin-top: 6px;
                }

                /* scroll cue */
                .hero-cue {
                    right: clamp(24px, 4.5vw, 72px);
                    top: 50%;
                    transform: translateY(-50%) rotate(90deg);
                    transform-origin: center;
                    font-size: 11px; letter-spacing: 4px;
                    color: rgba(245,247,255,.5);
                    text-transform: uppercase;
                    display: flex; align-items: center; gap: 12px;
                }
                .hero-cue::after {
                    content: "";
                    width: 56px; height: 1px;
                    background: linear-gradient(90deg, ${colors.orange.dark}, transparent);
                    animation: heroCue 2s ease infinite;
                }
                @keyframes heroCue { 0%,100%{opacity:.4} 50%{opacity:1} }

                /* ============ RESPONSIVE ============ */
                @media (max-width: 1100px) {
                    .hero-stats { display: none; }
                    .hero-cue { display: none; }
                }
                @media (max-width: 900px) {
                    .hero-title { font-size: clamp(30px, 8vw, 46px); }
                    .hero-lede { font-size: 14px; }
                    :global(.hero-btn) { padding: 12px 20px; font-size: 14px; }
                }
                @media (max-width: 760px) {
                    .hero-shell { min-height: 560px; height: 100vh; }
                    .hero-rail { left: 20px; right: 20px; bottom: 24px; gap: 18px; }
                    .hero-tab { min-width: 70px; padding: 8px 2px 10px; }
                    .hero-tab-num small { display: none; }
                    .hero-kicker { font-size: 11px; letter-spacing: 2.5px; gap: 10px; }
                    .hero-actions { gap: 10px; margin-top: 22px; }
                    .hero-stage { padding: 90px clamp(20px, 5vw, 32px) 0; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .hero-slide, .hero-slide.is-active :global(.hero-bg),
                    .hero-content > :global(*), .hero-tab.is-active .hero-track i,
                    .hero-stats, .hero-orb-a, .hero-orb-b, .hero-cue::after, .hero-bar::after {
                        animation: none !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </section>
    );
}
