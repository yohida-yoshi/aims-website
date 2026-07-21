"use client";

import React, { useEffect, useRef } from "react";

type FilmStripProps = {
    images: string[];
    /** スクロール1pxあたりの移動量。負で逆方向 */
    speed?: number;
    className?: string;
};

export default function FilmStrip({ images, speed = 0.15, className = "" }: FilmStripProps) {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                el.style.transform = `translateX(${-300 + window.scrollY * speed}px)`;
            });
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
        };
    }, [speed]);

    // 帯が途切れないよう3周分並べる
    const frames = [...images, ...images, ...images];

    return (
        <div aria-hidden="true" className={`overflow-hidden pointer-events-none select-none ${className}`}>
            <div ref={trackRef} className="film-strip flex w-max items-center will-change-transform">
                {frames.map((src, i) => (
                    <div key={i} className="film-frame shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt="" className="h-40 md:h-44 w-28 md:w-32 object-cover rounded-[2px]" />
                    </div>
                ))}
            </div>
        </div>
    );
}
