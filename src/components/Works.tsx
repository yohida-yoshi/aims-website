"use client";

import React from 'react';

// kindle本の実績データ
const bookWorks = [
    { id: 1, title: "モテ英会話で人生が変わる！", image: "/works/book1.png?v=2" },
    { id: 2, title: "『春夏秋冬戦略』ですべてうまくいく", image: "/works/book2.png?v=2" },
    { id: 3, title: "私が「腸律師」になった理由", image: "/works/book3.png?v=2" },
    { id: 4, title: "シニア4人の成功物語", image: "/works/book4.png?v=2" },
    { id: 5, title: "何があっても『だいじょぶだぁ〜』なんです", image: "/works/book5.png?v=2" },
    { id: 6, title: "バイバイ！噛み爪", image: "/works/book6.png?v=2" }
];

export default function Works() {
    return (
        <section id="works" className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        制作実績 <span className="text-primary-600 font-light ml-2">Works</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-left md:text-center">
                        書籍等の出版物から、企業のビジネス課題解決まで、幅広く対応しています。
                    </p>
                </div>

                {/* 1. 書籍のAI漫画化 */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-foreground mb-8 border-l-4 border-primary-600 pl-4">書籍のAI漫画化・出版実績</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        著名なビジネス書の内容をAIマンガで分かりやすく再構成し、新たな読者層を開拓しています。以下は制作したKindle本の一例です。
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                        {bookWorks.map((book) => (
                            <div key={book.id} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 bg-white aspect-[2/3] flex flex-col justify-end">
                                {/* 画像が読み込めない場合のプレースホルダー */}
                                <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center p-4">
                                    <span className="text-xs text-slate-400 mb-2">画像を入れてください</span>
                                </div>
                                {/* 実際の画像 */}
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="absolute inset-0 w-full h-full object-contain p-2 drop-shadow-sm rounded-md"
                                    onError={(e) => e.currentTarget.style.display = 'none'}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. ビジネス・法人向け制作実績 ＆ 新聞掲載 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* 法人案件まとめ */}
                    <div className="p-8 rounded-2xl bg-white dark:bg-slate-950 shadow-sm">
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

                    {/* 新聞掲載アピール */}
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-primary-100 dark:from-slate-900 dark:to-primary-950/40 shadow-md relative overflow-hidden flex flex-col lg:flex-row gap-8 items-center">
                        {/* 背景の装飾オブジェクト（柔らかい光のデザインにリニューアル） */}
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
                                朝日小学生新聞にて、AIで漫画を作る小学生リポーターの取り組みと、その具体的な「AIを使った漫画の作り方」について取材・掲載されました。新しいクリエイティブの形として注目を集めています。
                            </p>
                        </div>
                        {/* 新聞の画像プレースホルダー */}
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

                </div>
            </div>
        </section>
    );
}
