"use client";

import React from 'react';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
            {/* 背景グラデーション */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary-600/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary-900/30 blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#020617_100%)]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* アバター */}
                <div className="flex-shrink-0 flex justify-center order-1">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-primary-500/25 blur-2xl scale-110" />
                        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                            <img
                                src="/avatar.png"
                                alt="ヨシホリ"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* テキスト */}
                <div className="order-2 text-center lg:text-left">
                    <div className="inline-flex items-center rounded-full border border-primary-400/30 bg-primary-400/10 px-4 py-1.5 text-sm font-medium text-primary-400 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-primary-400 mr-2 animate-pulse" />
                        AI × Entertainment Creator
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-3">
                        ヨシホリ
                    </h1>

                    <p className="text-xl md:text-2xl font-semibold text-primary-400 mb-6 tracking-wide">
                        AIエンタメクリエイター
                    </p>

                    <p className="text-base md:text-lg text-slate-400 max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
                        AI漫画から始まり、アニメ・映画・CM・MVへ。<br />
                        チームを率いて、新しいエンタメの形をつくるディレクター。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="#works"
                            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-500 hover:scale-105 active:scale-95"
                        >
                            制作実績を見る
                        </a>
                        <a
                            href="#about"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
                        >
                            プロフィール
                        </a>
                    </div>
                </div>

            </div>

            {/* 下スクロール誘導 */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
            </div>
        </section>
    );
}
