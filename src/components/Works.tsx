"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const mangaImages = Array.from({ length: 10 }, (_, i) => `/works/title${i + 1}.webp`);

function MangaViewer() {
    const [pageIndex, setPageIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipping(true);
            setTimeout(() => {
                setIsFlipping(false);
                setPageIndex((prev) => (prev + 2) % 10);
            }, 1000);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextIndex = (pageIndex + 2) % 10;

    return (
        <div className="w-full flex justify-center mb-20">
            <div className="relative w-full max-w-4xl aspect-[1.4] flex [perspective:2000px] shadow-2xl rounded-sm bg-white border border-slate-700">
                {/* 左ページ（次のめくり後） */}
                <div className="w-1/2 h-full bg-white relative overflow-hidden rounded-l-sm z-10">
                    <Image src={mangaImages[nextIndex + 1]} alt="" fill sizes="(min-width: 768px) 448px, 50vw" className="object-contain p-2 mix-blend-multiply" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/10 via-black/5 to-transparent z-10" />
                </div>
                {/* 右ページ（現在） */}
                <div className="w-1/2 h-full bg-white relative overflow-hidden rounded-r-sm z-10">
                    <Image src={mangaImages[pageIndex]} alt="" fill sizes="(min-width: 768px) 448px, 50vw" priority className="object-contain p-2 mix-blend-multiply" />
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10" />
                </div>
                {/* めくるページ */}
                <div
                    className={`absolute left-0 top-0 w-1/2 h-full origin-right [transform-style:preserve-3d] transition-transform z-20 ${
                        isFlipping ? 'duration-[1000ms] ease-in-out [transform:rotateY(180deg)]' : 'duration-0 [transform:rotateY(0deg)]'
                    }`}
                >
                    {/* オモテ面 */}
                    <div className="absolute inset-0 bg-white [backface-visibility:hidden] overflow-hidden rounded-l-sm">
                        <Image src={mangaImages[pageIndex + 1]} alt="" fill sizes="(min-width: 768px) 448px, 50vw" className="object-contain p-2 mix-blend-multiply" />
                        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/10 via-black/5 to-transparent z-10" />
                    </div>
                    {/* ウラ面 */}
                    <div className="absolute inset-0 bg-white [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden rounded-r-sm">
                        <Image src={mangaImages[nextIndex]} alt="" fill sizes="(min-width: 768px) 448px, 50vw" className="object-contain p-2 mix-blend-multiply" />
                        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const bookWorks = [
    { id: 1, title: "モテ英会話で人生が変わる！", image: "/works/book1.webp" },
    { id: 2, title: "『春夏秋冬戦略』ですべてうまくいく", image: "/works/book2.webp" },
    { id: 3, title: "私が「腸律師」になった理由", image: "/works/book3.webp" },
    { id: 4, title: "シニア4人の成功物語", image: "/works/book4.webp" },
    { id: 5, title: "何があっても『だいじょぶだぁ〜』なんです", image: "/works/book5.webp" },
    { id: 6, title: "バイバイ！噛み爪", image: "/works/book6.webp" }
];

export default function Works() {
    return (
        <section id="works" className="relative overflow-hidden py-28 md:py-36 bg-slate-900">
            <span aria-hidden="true" className="watermark">WORKS</span>
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <Reveal>
                    <SectionHeading
                        number="02"
                        en="Works"
                        ja="制作実績"
                        description="クリエイティブディレクターとして関わった主な作品・案件です。"
                    />
                </Reveal>

                {/* 漫画ページめくりアニメーション */}
                <Reveal>
                    <MangaViewer />
                </Reveal>

                {/* 1. Kindle漫画出版実績 */}
                <div className="mb-24">
                    <Reveal>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 border-l-4 border-primary-600 pl-4">
                            書籍のAI漫画化・出版実績の一部
                        </h3>
                        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                            著名なビジネス書・実用書をAI漫画として再構成し、Kindle出版。キャラクター設計・作画ディレクションなど担当しました。
                        </p>
                    </Reveal>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
                        {bookWorks.map((book, i) => (
                            <Reveal key={book.id} delay={i * 80}>
                                <div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-700 bg-white aspect-[2/3] hover:-translate-y-1">
                                    <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800" />
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        fill
                                        sizes="(min-width: 1024px) 15vw, 30vw"
                                        loading="lazy"
                                        className="object-contain p-2 drop-shadow-sm rounded-md"
                                    />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* 2. 企業・法人実績 & メディア掲載 */}
                <div className="grid grid-cols-1 gap-14 md:gap-16 mb-24">

                    {/* 法人案件まとめ */}
                    <Reveal className="h-full">
                    <div className="h-full">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 border-l-4 border-primary-600 pl-4">企業・教育・イベント向けマンガ・動画制作</h3>
                        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                            イベント集客用の漫画LP、大学PR漫画、企業の採用漫画、YouTube広告向けAI漫画動画など、法人案件も多数手がけています。
                        </p>
                    </div>
                    </Reveal>

                    {/* 新聞掲載アピール */}
                    <Reveal delay={150} className="h-full">
                    <div className="h-full">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 border-l-4 border-primary-600 pl-4">
                            「朝日小学生新聞」にも掲載されました
                        </h3>
                        <p className="text-sm text-slate-400 mb-0 leading-relaxed">
                            「AIを使った漫画の作り方」について取材を受け、朝日小学生新聞に掲載されました。
                        </p>
                    </div>
                    </Reveal>

                </div>

                {/* 3. アニメーション映画参加（最後に配置） */}
                <div>
                    <Reveal>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 border-l-4 border-primary-600 pl-4">
                            アニメーション映画参加実績
                        </h3>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Reveal>
                    <a
                        href="https://thecelebritysecret.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-2xl bg-slate-900 shadow-sm border border-slate-800 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden"
                    >
                        {/* ポスター画像 */}
                        <div className="w-full aspect-video relative overflow-hidden">
                            <Image
                                src="/works/celebrity-secret.webp"
                                alt="The Celebrity Secret - AN ANIMATED FILM"
                                fill
                                sizes="(min-width: 768px) 45vw, 90vw"
                                loading="lazy"
                                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* リンクアイコン */}
                            <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </div>

                        {/* テキスト情報 */}
                        <div className="p-5 md:p-6">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <h4 className="text-lg md:text-xl font-bold text-foreground">The Celebrity Secret</h4>
                                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400">
                                    アニメーション映画
                                </span>
                            </div>
                            <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-3">
                                原作・桜井美帆によるアニメーション映画。借金と失恋を抱えた女性がセレブ女性から人生哲学を学ぶ物語。本作に作画担当として参加しています。
                            </p>
                            <p className="text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full inline-block border border-slate-800">
                                ※本作への参加は旧活動名「ヨシダ」名義です
                            </p>
                        </div>
                    </a>
                    </Reveal>
                    <Reveal delay={150}>
                    <div className="group block rounded-2xl bg-slate-900 shadow-sm border border-slate-800 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden">
                        <div className="w-full aspect-video relative overflow-hidden bg-black">
                            <video
                                src="/works/cm-sample-fictional-product.mp4"
                                poster="/works/cm-sample-poster.webp"
                                className="w-full h-full object-cover"
                                controls
                                playsInline
                                preload="none"
                            />
                        </div>

                        <div className="p-5 md:p-6">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <h4 className="text-lg md:text-xl font-bold text-foreground">CM作品例</h4>
                                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                                    CM
                                </span>
                            </div>
                            <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-3">
                                AI動画制作による商品CMのサンプルです。
                            </p>
                            <p className="text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full inline-block border border-slate-800">
                                ※架空の商品です
                            </p>
                        </div>
                    </div>
                    </Reveal>
                    </div>
                </div>

            </div>
        </section>
    );
}
