import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skills = [
    {
        number: "01",
        en: "Creative Direction",
        title: "クリエイティブディレクション",
        detail: "キャラクター設計・作画指示・品質管理まで、作品全体のクオリティを統括。企画の方向性を定め、チームのアウトプットを最大化します。",
    },
    {
        number: "02",
        en: "Creator Education",
        title: "クリエイター育成",
        detail: "AI漫画制作講座を主宰し、受講生をプロクリエイターへ育成。チームとして実案件を受注・納品できる環境を構築しました。",
    },
    {
        number: "03",
        en: "AI Entertainment",
        title: "AI × エンタメ制作",
        detail: "最新の画像生成AIツールを駆使。漫画・アニメ・動画など、エンタメコンテンツを高速・高品質に制作します。",
    },
];

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden py-28 md:py-36 bg-white dark:bg-slate-950">
            <span aria-hidden="true" className="watermark">ABOUT</span>
            <div className="relative z-10 container mx-auto px-4 md:px-6">

                <Reveal>
                    <SectionHeading number="01" en="About" ja="プロフィール" />
                </Reveal>

                {/* 経歴・活動について */}
                <Reveal>
                    <div className="mb-16">
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="w-8 h-0.5 bg-primary-500 inline-block" />
                            経歴・活動について
                        </h3>
                        <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
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
                    </div>
                </Reveal>

                {/* できること */}
                <Reveal>
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-primary-500 inline-block" />
                        できること
                    </h3>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12">
                    {skills.map((skill, index) => (
                        <Reveal key={index} delay={index * 120}>
                            <div className="group h-full border-t-2 border-slate-200 dark:border-slate-800 pt-6 transition-colors duration-300 hover:border-primary-500">
                                <div className="flex items-baseline justify-between mb-5">
                                    <span className="font-mono text-sm font-semibold tracking-widest text-primary-600">
                                        {skill.number}
                                    </span>
                                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400">
                                        {skill.en}
                                    </span>
                                </div>
                                <h4 className="font-bold text-lg mb-3 text-foreground">
                                    {skill.title}
                                </h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    {skill.detail}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
