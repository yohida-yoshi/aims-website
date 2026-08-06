import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const visionItems = [
    {
        image: "/vision/mv.png",
        video: "/works/mv-pico-ring.mp4",
        title: "MV（ミュージックビデオ）",
        description: "アーティストの世界観を、AIが生み出す唯一無二のビジュアルで表現。音楽とアニメーションが融合した新しいMVの形を追求します。",
        status: "準備中",
        statusColor: "bg-sky-400/90 text-sky-950",
    },
    {
        image: "/vision/cm.png",
        video: "/works/cm-sample-fictional-product.mp4",
        title: "CM・プロモーション映像",
        description: "企業や商品のPRをAIアニメーション×漫画表現で。従来の映像制作より圧倒的に速く、印象に残るビジュアルを提供します。",
        status: "準備中",
        statusColor: "bg-sky-400/90 text-sky-950",
        note: "※架空の商品です",
    },
    {
        image: "/vision/movie.png",
        video: "/works/short-drama-sample.mp4",
        title: "短編ショートドラマ",
        description: "AIを武器に、低コストでクオリティの高い映像作品を。独自のストーリーを世界に向けて発信していきます。",
        status: "準備中",
        statusColor: "bg-sky-400/90 text-sky-950",
    },
];

export default function Vision() {
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
                        <Reveal key={index} delay={index * 100}>
                            <div className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 hover:-translate-y-2">
                                <video
                                    src={item.video}
                                    poster={item.image}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    controls
                                    playsInline
                                    preload="metadata"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 pointer-events-none">
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
                            </div>
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
        </section>
    );
}
