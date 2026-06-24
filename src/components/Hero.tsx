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
                {/* 白系オーバーレイ：中央は薄く、上下は少し締める */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/65" />
            </div>

            {/* コンテンツ：中央配置 */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-6">

                {/* バッジ */}
                <div className="inline-flex items-center rounded-full border border-primary-600/40 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary-700">
                    <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse" />
                    AI × Entertainment Creator
                </div>

                {/* アバター */}
                <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary-300/40 blur-3xl scale-125" />
                    <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl" style={{filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))'}}>
                        <img
                            src="/avatar.png"
                            alt="ヨシホリ"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* 名前・肩書き */}
                <div style={{filter: 'drop-shadow(0 0 12px rgba(255,255,255,1)) drop-shadow(0 0 24px rgba(255,255,255,0.8))'}}>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-700 mb-2">
                        ヨシホリ
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-sky-600 tracking-wide">
                        AIエンタメクリエイター
                    </p>
                </div>

                {/* キャッチコピー */}
                <p className="text-base md:text-xl text-slate-600 max-w-lg leading-relaxed font-medium" style={{filter: 'drop-shadow(0 0 8px rgba(255,255,255,1)) drop-shadow(0 0 16px rgba(255,255,255,0.9))'}}>
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
                        className="inline-flex items-center justify-center rounded-full border-2 border-slate-700 bg-white/70 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-slate-800 transition-all hover:bg-white hover:scale-105 active:scale-95"
                    >
                        プロフィール
                    </a>
                </div>
            </div>

        </section>
    );
}
