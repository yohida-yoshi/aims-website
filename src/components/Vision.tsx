const visionItems = [
    {
        emoji: "🎬",
        title: "アニメーション",
        description: "AI技術を活用したアニメーション制作へ。漫画で培ったキャラクター表現・演出力を動く映像へと昇華させます。",
        status: "進行中",
        statusColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
    },
    {
        emoji: "🎥",
        title: "映画・短編フィルム",
        description: "AIを武器に、低コストでクオリティの高い映像作品を。独自のストーリーを世界に向けて発信していきます。",
        status: "準備中",
        statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
    },
    {
        emoji: "📺",
        title: "CM・プロモーション映像",
        description: "企業や商品のPRをAIアニメーション×漫画表現で。従来の映像制作より圧倒的に速く、印象に残るビジュアルを提供します。",
        status: "準備中",
        statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
    },
    {
        emoji: "🎵",
        title: "MV（ミュージックビデオ）",
        description: "アーティストの世界観を、AIが生み出す唯一無二のビジュアルで表現。音楽とアニメーションが融合した新しいMVの形を追求します。",
        status: "準備中",
        statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
    },
];

export default function Vision() {
    return (
        <section id="vision" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        目指す姿 <span className="text-primary-600 font-light ml-2">Vision</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        漫画から始まり、エンタメのすべてへ。<br />
                        AIクリエイターとして、表現の可能性を広げ続けます。
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {visionItems.map((item, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-4xl flex-shrink-0">{item.emoji}</div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.statusColor}`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 締めメッセージ */}
                <div className="max-w-2xl mx-auto mt-16 text-center">
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        AIはツールではなく、<strong className="text-foreground">共同クリエイター</strong>。<br />
                        技術と感性を掛け合わせ、まだ見ぬエンタメを一緒に創りませんか？
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center mt-8 rounded-full bg-primary-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:scale-105 active:scale-95"
                    >
                        お問い合わせ・コラボ相談
                    </a>
                </div>
            </div>
        </section>
    );
}
