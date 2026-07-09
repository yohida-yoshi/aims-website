"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const ringRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // タッチデバイスでは表示しない
        if (window.matchMedia("(hover: none)").matches) return;

        const ring = ringRef.current;
        const dot = dotRef.current;
        if (!ring || !dot) return;

        // ネイティブカーソルを非表示に
        document.documentElement.classList.add("custom-cursor");

        let mouseX = -100;
        let mouseY = -100;
        let x = -100;
        let y = -100;
        let raf = 0;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            ring.style.opacity = "1";
            dot.style.opacity = "1";
        };
        const onLeave = () => {
            ring.style.opacity = "0";
            dot.style.opacity = "0";
        };

        const loop = () => {
            // リングは少し遅れて追従
            x += (mouseX - x) * 0.18;
            y += (mouseY - y) * 0.18;
            ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
            raf = requestAnimationFrame(loop);
        };

        window.addEventListener("mousemove", onMove);
        document.documentElement.addEventListener("mouseleave", onLeave);
        raf = requestAnimationFrame(loop);

        return () => {
            document.documentElement.classList.remove("custom-cursor");
            window.removeEventListener("mousemove", onMove);
            document.documentElement.removeEventListener("mouseleave", onLeave);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            {/* 外側リング（ゆっくり追従） */}
            <div
                ref={ringRef}
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 z-[100] opacity-0 transition-opacity duration-300"
                style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(2,132,199,0.9)",
                    boxShadow: "0 0 12px rgba(2,132,199,0.35)",
                }}
            />
            {/* 中心ドット（即時追従） */}
            <div
                ref={dotRef}
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 z-[100] opacity-0 transition-opacity duration-300"
                style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#0284c7",
                    boxShadow: "0 0 8px rgba(2,132,199,0.6)",
                }}
            />
        </>
    );
}
