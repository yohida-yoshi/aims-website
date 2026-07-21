import FilmStrip from "./FilmStrip";

const heroStrip = [
    "/vision/anime.png", "/works/book1.png", "/works/title2.png", "/vision/movie.png",
    "/works/book3.png", "/works/title6.png", "/vision/cm.png", "/works/book5.png",
    "/vision/mv.png", "/works/title9.png",
];

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-slate-950">

            {/* 背景装飾：ブルーの光とグリッド */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px]" />
                <div className="absolute -top-32 left-1/3 w-[700px] h-[700px] rounded-full bg-primary-600/20 blur-[160px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-[140px]" />
                {/* フィルムストリップ(下部を斜めに横切る) */}
                <FilmStrip images={heroStrip} speed={0.3} className="absolute -left-40 -right-40 bottom-20 rotate-[-4deg] opacity-[0.22]" />
                {/* 下端をフェードさせて次セクションへつなぐ */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950" />
            </div>

            {/* 巨大アウトラインの英字名 */}
            <div aria-hidden="true" className="hero-fade absolute inset-0 z-[5] flex items-center justify-center pointer-events-none select-none" style={{ animationDelay: '0.05s' }}>
                <span
                    className="font-black leading-none tracking-tight whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(4.5rem, 14vw, 15rem)',
                        color: 'transparent',
                        WebkitTextStroke: '1.5px rgba(56,189,248,0.22)',
                        transform: 'translateY(-52%)',
                    }}
                >
                    YOSHIHORI
                </span>
            </div>

            {/* コンテンツ */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-6">

                {/* 名前・肩書き */}
                <div className="hero-fade" style={{ animationDelay: '0.35s' }}>
                    <h1 className="text-7xl md:text-9xl font-black tracking-tight text-white mb-5">
                        ヨシホリ
                    </h1>
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-8 md:w-12 bg-sky-400/60" />
                        <p className="text-xl md:text-3xl font-bold text-sky-400 tracking-[0.15em]">
                            AIエンタメクリエイター
                        </p>
                        <span className="h-px w-8 md:w-12 bg-sky-400/60" />
                    </div>
                </div>

                {/* キャッチコピー */}
                <p className="hero-fade text-base md:text-xl text-slate-300 max-w-lg leading-relaxed font-medium" style={{ animationDelay: '0.6s' }}>
                    AI漫画から始まり、アニメ・映画・CM・MVへ。<br />
                    チームを率いて、新しいエンタメの形をつくるディレクター。
                </p>

                {/* ボタン */}
                <div className="hero-fade flex flex-col sm:flex-row gap-4 mt-2" style={{ animationDelay: '0.85s' }}>
                    <a
                        href="#works"
                        className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-500 hover:scale-105 active:scale-95"
                    >
                        制作実績を見る
                    </a>
                    <a
                        href="#about"
                        className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-slate-200 transition-all hover:bg-white/10 hover:border-slate-400 hover:scale-105 active:scale-95"
                    >
                        プロフィール
                    </a>
                </div>
            </div>

        </section>
    );
}
