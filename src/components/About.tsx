const skills = [
    {
        title: "クリエイティブディレクション",
        description: "AI漫画・アニメ制作のディレクションを担当。キャラクター設計・シナリオ構成・作画指示まで、作品全体のクオリティを統括します。",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        ),
    },
    {
        title: "クリエイター育成",
        description: "AI漫画制作講座を主宰し、多数のクリエイターを育成。受講生がチームとして実際の案件を受注・制作できる環境を構築しました。",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        title: "AI × エンタメ制作",
        description: "最新の画像生成AIツールを駆使。漫画・アニメ・動画など、エンタメコンテンツを高速・高品質に制作します。",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        プロフィール <span className="text-primary-600 font-light ml-2">About</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        AIとエンタメの交差点で、新しいコンテンツの形をつくっています
                    </p>
                </div>

                {/* 自己紹介テキスト */}
                <div className="max-w-3xl mx-auto mb-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg mb-4">
                        AI漫画制作の講座を主宰し、受講生をプロクリエイターとして育成。
                        自身はクリエイティブディレクターとして、チームで手がけた作品の企画・監修・品質管理を担当してきました。
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                        Kindle出版・企業PR・メディア掲載など、多数の実績を積み重ねながら、
                        現在はアニメーション映画の作画にも携わるなど、活動の幅をエンタメ全域へと広げています。
                    </p>
                </div>

                {/* スキルカード */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 flex flex-col items-start"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    {skill.icon}
                                </div>
                                <h3 className="text-lg font-bold text-foreground">
                                    {skill.title}
                                </h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
