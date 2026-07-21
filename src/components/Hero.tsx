"use client";

import React, { useEffect, useRef } from 'react';

export default function Hero() {
    const bgRef = useRef<HTMLDivElement>(null);

    // 背景のパララックス（スクロールよりゆっくり動く）
    useEffect(() => {
        const el = bgRef.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                el.style.transform = `translateY(${window.scrollY * 0.25}px)`;
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">

            {/* 背景イラスト（パララックス+ケンバーンズ） */}
            <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
                {/* PC: ワイドイラスト / スマホ: 縦長ポートレート */}
                <img
                    src="/hero-bg.png"
                    alt=""
                    className="kenburns hidden md:block w-full h-full object-cover object-center"
                />
                <img
                    src="/hero-portrait.png"
                    alt=""
                    className="kenburns block md:hidden w-full h-full object-cover object-top"
                />
                {/* オーバーレイ：控えめにしてイラストを活かす。中央テキスト裏だけ白を強める */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white/60" />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 45% at 50% 55%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.35) 55%, rgba(255,255,255,0) 100%)' }} />
            </div>

            {/* 巨大アウトラインの英字名（背景と本文の中間レイヤー） */}
            <div aria-hidden="true" className="hero-fade absolute inset-0 z-[5] flex items-center justify-center pointer-events-none select-none" style={{ animationDelay: '0.05s' }}>
                <span
                    className="font-black leading-none tracking-tight whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(4.5rem, 13vw, 13rem)',
                        color: 'transparent',
                        WebkitTextStroke: '2px rgba(2,132,199,0.28)',
                        transform: 'translateY(-38%)',
                    }}
                >
                    YOSHIHORI
                </span>
            </div>

            {/* コンテンツ：中央配置 */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-5">

                {/* バッジ */}
                <div className="hero-fade inline-flex items-center rounded-full border border-primary-600/40 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary-700" style={{ animationDelay: '0.15s' }}>
                    <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse" />
                    AI × Entertainment Creator
                </div>

                {/* 名前・肩書き */}
                <div className="hero-fade" style={{ animationDelay: '0.35s', filter: 'drop-shadow(0 0 12px rgba(255,255,255,1)) drop-shadow(0 0 24px rgba(255,255,255,0.8))' }}>
                    <h1 className="text-7xl md:text-9xl font-black tracking-tight text-slate-800 mb-4">
                        ヨシホリ
                    </h1>
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-8 md:w-12 bg-sky-600/70" />
                        <p className="text-xl md:text-3xl font-bold text-sky-600 tracking-[0.15em]">
                            AIエンタメクリエイター
                        </p>
                        <span className="h-px w-8 md:w-12 bg-sky-600/70" />
                    </div>
                </div>

                {/* キャッチコピー */}
                <p className="hero-fade text-base md:text-xl text-slate-600 max-w-lg leading-relaxed font-medium mt-2" style={{ animationDelay: '0.6s', filter: 'drop-shadow(0 0 8px rgba(255,255,255,1)) drop-shadow(0 0 16px rgba(255,255,255,0.9))' }}>
                    AI漫画から始まり、アニメ・映画・CM・MVへ。<br />
                    チームを率いて、新しいエンタメの形をつくるディレクター。
                </p>

                {/* ボタン */}
                <div className="hero-fade flex flex-col sm:flex-row gap-4 mt-4" style={{ animationDelay: '0.85s' }}>
                    <a
                        href="#works"
                        className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-500 hover:scale-105 active:scale-95"
                    >
                        制作実績を見る
                    </a>
                    <a
                        href="#about"
                        className="inline-flex items-center justify-center rounded-full border-2 border-slate-700 bg-white/70 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-slate-800 transition-all hover:bg-white hover:scale-105 active:scale-95"
                    >
                        プロフィール
                    </a>
                </div>
            </div>

        </section>
    );
}
