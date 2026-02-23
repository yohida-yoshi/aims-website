const features = [
    {
        title: "圧倒的なスピード",
        description: "AIを活用することで、従来のマンガ制作に比べて劇的な工数削減を実現。短納期での納品が可能です。",
        image: "/features/strong1.jpg",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: "ハイクオリティな作画",
        description: "最新の画像生成AIを駆使し、プロのクリエイターがディレクションを行うことで、商業レベルの高品質なマンガを提供します。",
        image: "/features/strong2.png",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
    {
        title: "柔軟な対応と安心感",
        description: "企業の採用、PR、教育用など、目的に合わせた最適なシナリオと作風をご提案。手厚いサポートで初めての方でも安心です。",
        image: "/features/strong3.png",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                        なぜ<span className="text-primary-600">AIマンガ</span>が選ばれるのか
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        ビジネスの課題解決に特化した、AIマンガ制作の3つの強み
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 flex flex-col items-start"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Feature Image Illustration */}
                            <div className="w-full h-48 mb-6 rounded-xl overflow-hidden bg-white dark:bg-slate-50 border border-slate-200/60 dark:border-slate-200 relative group-hover:shadow-md transition-shadow duration-300">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="absolute inset-0 w-full h-full object-contain p-4 mix-blend-multiply dark:mix-blend-normal transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {feature.title}
                                </h3>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
