const skills = [
    {
        title: "クリエイティブディレクション",
        detail: "キャラクター設計・作画指示・品質管理まで、作品全体のクオリティを統括。企画の方向性を定め、チームのアウトプットを最大化します。",
        icon: "🎨",
        color: "from-blue-500/10 to-primary-500/10 border-blue-500/20",
        labelColor: "text-blue-500 dark:text-blue-400",
    },
    {
        title: "クリエイター育成",
        detail: "AI漫画制作講座を主宰し、受講生をプロクリエイターへ育成。チームとして実案件を受注・納品できる環境を構築しました。",
        icon: "🌱",
        color: "from-green-500/10 to-emerald-500/10 border-green-500/20",
        labelColor: "text-green-600 dark:text-green-400",
    },
    {
        title: "AI × エンタメ制作",
        detail: "最新の画像生成AIツールを駆使。漫画・アニメ・動画など、エンタメコンテンツを高速・高品質に制作します。",
        icon: "⚡",
        color: "from-amber-500/10 to-orange-500/10 border-amber-500/20",
        labelColor: "text-amber-600 dark:text-amber-400",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">

                {/* セクションタイトル */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        プロフィール <span className="text-primary-600 font-light ml-2">About</span>
                    </h2>
                </div>

                {/* メインコンテンツ：左に経歴、右にスキル */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">

                    {/* 左：経歴・ストーリー */}
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="w-8 h-0.5 bg-primary-500 inline-block" />
                            経歴・活動について
                        </h3>
                        <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                AI漫画制作の講座を主宰し、受講生をプロクリエイターとして育成。
                                自身はクリエイティブディレクターとして、チームで手がけた作品の企画・監修・品質管理を担当してきました。
                            </p>
                            <p>
                                Kindle出版・企業PR・メディア掲載など多数の実績を積み重ねながら、
                                現在はアニメーション映画の作画にも携わるなど、活動の幅をエンタメ全域へと広げています。
                            </p>
                            <p>
                                漫画にとどまらず、アニメ・映画・CM・MVと、
                                AIが切り拓く新しいエンタメの形を追い続けています。
                            </p>
                        </div>

                        {/* キーワードタグ */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {["AI漫画", "アニメーション", "クリエイター育成", "ディレクション", "Kindle出版", "映画・CM・MV"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 右：スキルカード */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="w-8 h-0.5 bg-primary-500 inline-block" />
                            できること
                        </h3>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`p-5 rounded-2xl bg-gradient-to-br ${skill.color} border transition-all duration-300 hover:shadow-md`}
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl flex-shrink-0 mt-0.5">{skill.icon}</span>
                                    <div>
                                        <h4 className={`font-bold text-base mb-1.5 ${skill.labelColor}`}>
                                            {skill.title}
                                        </h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {skill.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
