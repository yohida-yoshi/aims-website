"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bar = barRef.current;
        if (!bar) return;
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const max = document.documentElement.scrollHeight - window.innerHeight;
                const ratio = max > 0 ? window.scrollY / max : 0;
                bar.style.transform = `scaleX(${ratio})`;
            });
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div
            ref={barRef}
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 h-[3px] z-[70] origin-left bg-gradient-to-r from-sky-400 to-primary-600"
            style={{ transform: "scaleX(0)" }}
        />
    );
}
