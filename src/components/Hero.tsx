"use client";

import React from 'react';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">

            {/* 背景イラスト */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt=""
                    className="w-full h-full object-cover object-center"
                />
                {/* 視認性のためのオーバーレイ：上下に暗め、中央は薄め */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />
                {/* 左右からも締める */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40" />
            </div>

            {/* コンテンツ：中央配置 */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-6">

                {/* バッジ */}
                <div className="inline-flex items-center rounded-full border border-primary-400/40 bg-slate-950/60 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-400">
                    <span className="flex h-2 w-2 rounded-full bg-primary-400 mr-2 animate-pulse" />
                    AI × Entertainment Creator
                </div>

                {/* アバター */}
                <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary-400/20 blur-2xl scale-110" />
                    <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                        <img
                            src="/avatar.png"
                            alt="ヨシホリ"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* 名前・肩書き */}
                <div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-2 drop-shadow-lg">
                        ヨシホリ
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold text-primary-300 tracking-wide drop-shadow">
                        AIエンタメクリエイター
                    </p>
                </div>

                {/* キャッチコピー */}
                <p className="text-base md:text-lg text-slate-200 max-w-md leading-relaxed drop-shadow">
                    AI漫画から始まり、アニメ・映画・CM・MVへ。<br />
                    チームを率いて、新しいエンタメの形をつくるディレクター。
                </p>

                {/* ボタン */}
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <a
                        href="#works"
                        className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-500 hover:scale-105 active:scale-95"
                    >
                        制作実績を見る
                    </a>
                    <a
                        href="#about"
                        className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                    >
                        プロフィール
                    </a>
                </div>
            </div>

            {/* 下スクロール誘導 */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-400">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
            </div>
        </section>
    );
}
