"use client";

import React from 'react';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-24 pb-16">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-500/20 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary-800/20 blur-[120px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* テキストコンテンツ */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-flex items-center rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
                        AI Entertainment Creator
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        ヨシホリ
                    </h1>

                    <p className="text-xl md:text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-6 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                        AIエンタメクリエイター
                    </p>

                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl text-left animate-fade-in-up leading-relaxed" style={{ animationDelay: "200ms" }}>
                        AIを活用した漫画・アニメーション制作のクリエイティブディレクター。
                        講座を通じてクリエイターを育成しながら、チームで多数の作品を手がけてきました。
                        漫画にとどまらず、アニメ・映画・CM・MVへと表現の幅を広げています。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                        <a
                            href="#works"
                            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:scale-105 active:scale-95"
                        >
                            制作実績を見る
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 active:scale-95"
                        >
                            お問い合わせ
                        </a>
                    </div>
                </div>

                {/* アバター */}
                <div className="flex justify-center order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                    <div className="relative">
                        {/* 背景の光彩 */}
                        <div className="absolute inset-0 rounded-full bg-primary-400/30 blur-3xl scale-110" />
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                            <img
                                src="/avatar.png"
                                alt="ヨシホリ"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* バッジ */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 rounded-full px-5 py-2 shadow-lg border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                            <span className="text-sm font-bold text-primary-600">Creative Director</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
