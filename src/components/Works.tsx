"use client";

import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const mangaImages = Array.from({ length: 10 }, (_, i) => `/works/title${i + 1}.png`);

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
            <div className="relative w-full max-w-xl aspect-[1.4] flex [perspective:2000px] shadow-2xl rounded-sm bg-white border border-slate-200 dark:border-slate-800">
                {/* 左ページ（次のめくり後） */}
                <div className="w-1/2 h-full bg-white relative overflow-hidden rounded-l-sm z-10">
                    <img src={mangaImages[nextIndex + 1]} className="w-full h-full object-contain p-2 mix-blend-multiply" alt="" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/10 via-black/5 to-transparent z-10" />
                </div>
                {/* 右ページ（現在） */}
                <div className="w-1/2 h-full bg-white relative overflow-hidden rounded-r-sm z-10">
                    <img src={mangaImages[pageIndex]} className="w-full h-full object-contain p-2 mix-blend-multiply" alt="" />
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
                        <img src={mangaImages[pageIndex + 1]} className="w-full h-full object-contain p-2 mix-blend-multiply" alt="" />
                        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/10 via-black/5 to-transparent z-10" />
                    </div>
                    {/* ウラ面 */}
                    <div className="absolute inset-0 bg-white [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden rounded-r-sm">
                        <img src={mangaImages[nextIndex]} className="w-full h-full object-contain p-2 mix-blend-multiply" alt="" />
                        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const bookWorks = [
    { id: 1, title: "モテ英会話で人生が変わる！", image: "/works/book1.png?v=3" },
    { id: 2, title: "『春夏秋冬戦略』ですべてうまくいく", image: "/works/book2.png?v=3" },
    { id: 3, title: "私が「腸律師」になった理由", image: "/works/book3.png?v=3" },
    { id: 4, title: "シニア4人の成功物語", image: "/works/book4.png?v=3" },
    { id: 5, title: "何があっても『だいじょぶだぁ〜』なんです", image: "/works/book5.png?v=3" },
    { id: 6, title: "バイバイ！噛み爪", image: "/works/book6.png?v=3" }
];

export default function Works() {
    return (
        <section id="works" className="py-28 md:py-36 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">
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
                        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6">
                            著名なビジネス書・実用書をAI漫画として再構成し、Kindle出版。キャラクター設計・作画ディレクションなど担当しました。
                        </p>
                    </Reveal>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
                        {bookWorks.map((book, i) => (
                            <Reveal key={book.id} delay={i * 80}>
                                <div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 bg-white aspect-[2/3] hover:-translate-y-1">
                                    <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-2">
                                        <span className="text-xs text-slate-400 text-center">画像を入れてください</span>
                                    </div>
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="absolute inset-0 w-full h-full object-contain p-2 drop-shadow-sm rounded-md"
                                        onError={(e) => e.currentTarget.style.display = 'none'}
                                    />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* 2. 企業・法人実績 & メディア掲載 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

                    {/* 法人案件まとめ */}
                    <Reveal className="h-full">
                    <div className="h-full p-8 rounded-2xl bg-white dark:bg-slate-950 shadow-sm">
                        <h3 className="text-xl font-bold mb-4 text-primary-600">企業・教育・イベント向けマンガ・動画制作</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            企業の採用、イベント集客、大学のPRなど、多岐にわたるビジネス課題を「マンガの力」で解決しています。
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                                <div>
                                    <span className="text-foreground font-bold block mb-1">某大規模イベントの漫画LP制作</span>
                                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed block">集客用のランディングページ（LP）を漫画化し、親しみやすさとコンバージョン率を向上。</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                                <div>
                                    <span className="text-foreground font-bold block mb-1">某大学のPR漫画制作</span>
                                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed block">オープンキャンパスの案内等に活用し、学生からの興味関心を強力に惹きつけます。</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                                <div>
                                    <span className="text-foreground font-bold block mb-1">企業の採用漫画制作</span>
                                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed block">企業の魅力やリアルな働き方を分かりやすく伝え、ミスマッチ防止と応募増に貢献。</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                                <div>
                                    <span className="text-foreground font-bold block mb-1">AI漫画の動画制作</span>
                                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed block">YouTube広告用などに、マンガ素材を活用したインパクトのある動画コンテンツを制作。</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </Reveal>

                    {/* 新聞掲載アピール */}
                    <Reveal delay={150} className="h-full">
                    <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-primary-100 dark:from-slate-900 dark:to-primary-950/40 shadow-md relative overflow-hidden flex flex-col lg:flex-row gap-8 items-center">
                        <div className="absolute -top-16 -left-16 w-64 h-64 bg-yellow-400/30 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="lg:w-1/2 flex flex-col justify-center items-start z-10 w-full relative">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-400 text-yellow-900 font-bold text-xs mb-5 shadow-sm relative z-10">
                                メディア掲載実績
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-foreground leading-snug text-left">
                                「朝日小学生新聞」にも<br className="hidden lg:block" />掲載されました！
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 mb-0 leading-relaxed text-left">
                                朝日小学生新聞にて、AIで漫画を作る小学生リポーターの取り組みと、「AIを使った漫画の作り方」について取材・掲載。新しいクリエイティブの形として注目を集めています。
                            </p>
                        </div>
                        <div className="flex gap-4 lg:w-1/2 w-full z-10 justify-center">
                            <div className="w-1/2 h-56 lg:h-72 relative group">
                                <img
                                    src="/works/newspaper1.png"
                                    alt="朝日小学生新聞 掲載画像1"
                                    className="absolute inset-0 w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => e.currentTarget.style.display = 'none'}
                                />
                            </div>
                            <div className="w-1/2 h-56 lg:h-72 relative group">
                                <img
                                    src="/works/newspaper2.png"
                                    alt="朝日小学生新聞 掲載画像2"
                                    className="absolute inset-0 w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => e.currentTarget.style.display = 'none'}
                                />
                            </div>
                        </div>
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
                        className="group block rounded-2xl bg-white dark:bg-slate-950 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden"
                    >
                        {/* ポスター画像 */}
                        <div className="w-full aspect-video relative overflow-hidden">
                            <img
                                src="/works/celebrity-secret.png"
                                alt="The Celebrity Secret - AN ANIMATED FILM"
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* リンクアイコン */}
                            <div className="absolute top-3 right-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
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
                            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                原作・桜井美帆によるアニメーション映画。借金と失恋を抱えた女性がセレブ女性から人生哲学を学ぶ物語。本作に作画担当として参加しています。
                            </p>
                            <p className="text-xs text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-full inline-block border border-slate-200 dark:border-slate-800">
                                ※本作への参加は旧活動名「ヨシダ」名義です
                            </p>
                        </div>
                    </a>
                    </Reveal>
                    </div>
                </div>

            </div>
        </section>
    );
}
