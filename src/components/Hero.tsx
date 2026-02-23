"use client";

import React, { useState, useEffect } from 'react';

const images = Array.from({ length: 10 }, (_, i) => `/works/title${i + 1}.png`);

export default function Hero() {
    const [pageIndex, setPageIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        // 4秒ごとにページめくりアニメーションを発火
        const interval = setInterval(() => {
            setIsFlipping(true);
            setTimeout(() => {
                setIsFlipping(false);
                setPageIndex((prev) => (prev + 2) % 10);
            }, 1000); // めくりアニメーション時間(1s)経過後に次のページへ
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const nextIndex = (pageIndex + 2) % 10;

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-24 pb-16">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-500/20 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary-800/20 blur-[120px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* ---------------- 1. テキストコンテンツ (左側) ---------------- */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="inline-flex items-center rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
                        AI Manga Production
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        あなたの想いを<br />
                        AI漫画に変換します
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl text-left animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                        圧倒的なスピードとクオリティを実現するAIマンガ制作。採用、PR、教育など、あらゆるビジネス課題を「マンガの力」で解決します。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:scale-105 active:scale-95"
                        >
                            制作の相談をする
                        </a>
                        <a
                            href="#works"
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 active:scale-95"
                        >
                            制作実績を見る
                        </a>
                    </div>
                </div>

                {/* ---------------- 2. 漫画アニメーション (右側) ---------------- */}
                <div className="w-full flex justify-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                    <div className="relative w-full max-w-xl lg:max-w-2xl aspect-[1.4] flex [perspective:2000px] shadow-2xl rounded-sm bg-white border border-slate-200 dark:border-slate-800">

                        {/* --- 左ページ（次のめくり後の左ページ：nextIndex + 1） --- */}
                        <div className="w-1/2 h-full bg-white dark:bg-white relative overflow-hidden rounded-l-sm z-10 border-none">
                            <img src={images[nextIndex + 1]} className="w-full h-full object-contain p-2 mix-blend-multiply dark:mix-blend-normal" alt="Manga Left Page" />
                            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/10 via-black/5 to-transparent z-10" />
                        </div>

                        {/* --- 右ページ（今の右ページ：pageIndex） --- */}
                        <div className="w-1/2 h-full bg-white dark:bg-white relative overflow-hidden rounded-r-sm z-10 border-none">
                            <img src={images[pageIndex]} className="w-full h-full object-contain p-2 mix-blend-multiply dark:mix-blend-normal" alt="Manga Right Page" />
                            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10" />
                        </div>

                        {/* --- めくるページ (左半分の領域から右へペラっとめくれる) --- */}
                        <div
                            className={`absolute left-0 top-0 w-1/2 h-full origin-right [transform-style:preserve-3d] transition-transform z-20 ${isFlipping ? 'duration-[1000ms] ease-in-out [transform:rotateY(180deg)]' : 'duration-0 [transform:rotateY(0deg)]'
                                }`}
                        >
                            {/* めくるページのオモテ面（今の左ページ：pageIndex + 1） */}
                            <div className="absolute inset-0 bg-white dark:bg-white [backface-visibility:hidden] overflow-hidden rounded-l-sm border-none">
                                <img src={images[pageIndex + 1]} className="w-full h-full object-contain p-2 mix-blend-multiply dark:mix-blend-normal" alt="Manga Flipping Front" />
                                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/10 via-black/5 to-transparent z-10" />
                            </div>

                            {/* めくるページのウラ面（次の右ページ：nextIndex）※180度裏返しの状態 */}
                            <div className="absolute inset-0 bg-white dark:bg-white [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden rounded-r-sm border-none">
                                <img src={images[nextIndex]} className="w-full h-full object-contain p-2 mix-blend-multiply dark:mix-blend-normal" alt="Manga Flipping Back" />
                                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
