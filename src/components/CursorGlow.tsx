"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // タッチデバイスでは表示しない
        if (window.matchMedia("(hover: none)").matches) return;

        const el = ref.current;
        if (!el) return;

        let mouseX = -200;
        let mouseY = -200;
        let x = -200;
        let y = -200;
        let raf = 0;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            el.style.opacity = "1";
        };
        const onLeave = () => {
            el.style.opacity = "0";
        };

        const loop = () => {
            // ゆっくり追従してふわっとした動きに
            x += (mouseX - x) * 0.12;
            y += (mouseY - y) * 0.12;
            el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
            raf = requestAnimationFrame(loop);
        };

        window.addEventListener("mousemove", onMove);
        document.documentElement.addEventListener("mouseleave", onLeave);
        raf = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("mousemove", onMove);
            document.documentElement.removeEventListener("mouseleave", onLeave);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[60] opacity-0 transition-opacity duration-300"
            style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background:
                    "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0) 70%)",
                filter: "blur(14px)",
                mixBlendMode: "soft-light",
            }}
        />
    );
}
