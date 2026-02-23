const steps = [
    {
        step: "01",
        title: "ヒアリング・お見積り",
        description: "目的、ターゲット層、ご希望のテイスト、納期などをお伺いし、最適なプランとお見積りをご提案します。",
    },
    {
        step: "02",
        title: "シナリオ・構成作成",
        description: "ヒアリング内容をもとに、マンガのシナリオ（セリフや展開）と、コマ割りの構成案を作成し、ご確認いただきます。",
    },
    {
        step: "03",
        title: "AI作画・ネーム確認",
        description: <>AIを用いてキャラクターデザインとベースとなるネーム（ラフ画）を作成します。<br />この段階で構図や流れの最終確認を行います。</>,
    },
    {
        step: "04",
        title: "本番作画・仕上げ",
        description: "AIによる高品質な作画をベースに、プロのクリエイターが加筆修正などを行い完成させます。",
    },
    {
        step: "05",
        title: "納品",
        description: "ご指定のフォーマット（画像データ、PDF、印刷用データなど）で納品いたします。",
    }
];

export default function Flow() {
    return (
        <section id="flow" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        制作の流れ <span className="text-primary-600 font-light ml-2">Flow</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        ご相談から納品まで、スムーズかつ丁寧に進行いたします。
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 last:mb-0 relative">
                            {/* つなぎ目の線 (最後以外に表示) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute left-[3.3rem] top-[5rem] bottom-[-3rem] w-0.5 bg-slate-200 dark:bg-slate-800" />
                            )}

                            <div className="flex-shrink-0 flex items-center md:items-start z-10">
                                <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-primary-50 dark:bg-slate-900 border-4 border-white dark:border-slate-950 shadow-lg shadow-primary-500/10 flex flex-col items-center justify-center text-primary-600 dark:text-primary-400">
                                    <span className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-1">Step</span>
                                    <span className="text-2xl md:text-4xl font-bold">{step.step}</span>
                                </div>
                            </div>

                            <div className="flex-1 pt-2 md:pt-6 pb-8 md:pb-0">
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
