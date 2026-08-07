"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const visionItems = [
    {
        video: "/works/short-drama-sample.mp4",
        poster: "/works/short-drama-poster.webp",
        title: "MV（ミュージックビデオ）",
        description: "アーティストの世界観を、AIが生み出す唯一無二のビジュアルで表現。音楽とアニメーションが融合した新しいMVの形を追求します。",
        status: "準備中",
        statusColor: "bg-sky-400/90 text-sky-950",
    },
    {
        video: "/works/cm-sample-fictional-product.mp4",
        poster: "/works/cm-sample-poster.webp",
        title: "CM・プロモーション映像",
        description: "企業や商品のPRをAIアニメーション×漫画表現で。従来の映像制作より圧倒的に速く、印象に残るビジュアルを提供します。",
        status: "準備中",
        statusColor: "bg-sky-400/90 text-sky-950",
        note: "※架空の商品です",
    },
    {
        video: "/works/mv-pico-ring.mp4",
        poster: "/works/mv-pico-ring-poster.webp",
        title: "短編ショートドラマ",
        description: "AIを武器に、低コストでクオリティの高い映像作品を。独自のストーリーを世界に向けて発信していきます。",
        status: "準備中",
        statusColor: "bg-sky-400/90 text-sky-950",
    },
];

type VisionItem = (typeof visionItems)[number];

export default function Vision() {
    const [selectedVideo, setSelectedVideo] = useState<VisionItem | null>(null);

    useEffect(() => {
        if (!selectedVideo) return;

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelectedVideo(null);
        };

        document.addEventListener("keydown", closeOnEscape);
        return () => document.removeEventListener("keydown", closeOnEscape);
    }, [selectedVideo]);

    return (
        <section id="vision" className="relative overflow-hidden py-28 md:py-36 bg-slate-950">
            <span aria-hidden="true" className="watermark">VISION</span>
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <Reveal>
                    <SectionHeading
                        number="03"
                        en="Vision"
                        ja="目指す姿"
                        description={<>漫画から始まり、エンタメのすべてへ。AIクリエイターとして、表現の可能性を広げ続けます。</>}
                    />
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {visionItems.map((item, index) => (
                        <Reveal key={item.title} delay={index * 100}>
                            <button
                                type="button"
                                onClick={() => setSelectedVideo(item)}
                                className="group relative block w-full aspect-video rounded-2xl overflow-hidden text-left shadow-lg hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                                {/* 動画本体はクリックしてモーダルを開くまでダウンロードしない。
                                    グリッド上はポスター画像のみ表示する */}
                                <video
                                    src={item.video}
                                    poster={item.poster}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    muted
                                    playsInline
                                    preload="none"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                                    <span className={`inline-block text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full mb-2 ${item.statusColor}`}>
                                        {item.status}
                                    </span>
                                    <h3 className="text-base md:text-lg font-bold text-white leading-snug mb-1.5 drop-shadow">
                                        {item.title}
                                    </h3>
                                    <p className="text-[11px] md:text-xs text-white/80 leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                    {item.note && (
                                        <p className="mt-2 text-[10px] md:text-xs text-white/80">
                                            {item.note}
                                        </p>
                                    )}
                                </div>
                            </button>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <div className="max-w-2xl mx-auto mt-20 text-center">
                        <p className="text-slate-300 text-lg leading-relaxed">
                            AIはツールではなく、<strong className="text-foreground">共同クリエイター</strong>。<br />
                            技術と感性を掛け合わせ、まだ見ぬエンタメを一緒に創りませんか？
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center mt-8 rounded-full bg-primary-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:scale-105 active:scale-95"
                        >
                            お問い合わせ・コラボ相談<span className="ml-2">→</span>
                        </a>
                    </div>
                </Reveal>
            </div>

            {selectedVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedVideo.title}
                    onClick={() => setSelectedVideo(null)}
                >
                    <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-12 right-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            閉じる
                        </button>
                        <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
                            <video
                                key={selectedVideo.video}
                                src={selectedVideo.video}
                                className="w-full aspect-video bg-black object-contain"
                                controls
                                autoPlay
                                playsInline
                            />
                        </div>
                        <div className="mt-4 text-white">
                            <h3 className="text-lg font-bold">{selectedVideo.title}</h3>
                            {selectedVideo.note && <p className="mt-1 text-sm text-white/75">{selectedVideo.note}</p>}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
