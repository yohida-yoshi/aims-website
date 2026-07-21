import FilmStrip from "./FilmStrip";

const heroStrip = [
    "/vision/anime.png", "/works/book1.png", "/works/title2.png", "/vision/movie.png",
    "/works/book3.png", "/works/title6.png", "/vision/cm.png", "/works/book5.png",
    "/vision/mv.png", "/works/title9.png",
];
const heroStripB = [
    "/works/title1.png", "/works/book2.png", "/works/title3.png", "/vision/mv.png",
    "/works/title5.png", "/works/book4.png", "/works/title7.png", "/vision/anime.png",
    "/works/title10.png", "/works/book6.png",
];
const heroStripC = [
    "/vision/movie.png", "/works/title4.png", "/works/book3.png", "/works/title8.png",
    "/vision/cm.png", "/works/book1.png", "/works/title6.png", "/works/book5.png",
];

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-slate-950">

            {/* 背景装飾：ブルーの光とグリッド */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px]" />
                <div className="absolute -top-32 left-1/3 w-[700px] h-[700px] rounded-full bg-primary-600/20 blur-[160px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-[140px]" />
                {/* フィルムストリップ(ヒーロー内を3本横切る) */}
                <FilmStrip images={heroStripB} speed={-0.2} className="absolute -left-40 -right-40 top-14 rotate-[3deg] opacity-[0.14]" />
                <FilmStrip images={heroStripC} speed={0.16} className="absolute -left-40 -right-40 top-1/2 -translate-y-1/2 rotate-[-2deg] opacity-[0.10]" />
                <FilmStrip images={heroStrip} speed={0.3} className="absolute -left-40 -right-40 bottom-16 rotate-[-4deg] opacity-[0.22]" />
                {/* 下端をフェードさせて次セクションへつなぐ */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950" />
            </div>

            {/* コンテンツ */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center">

                {/* 名前・肩書き */}
                <div className="hero-fade" style={{ animationDelay: '0.2s' }}>
                    <p className="text-sm md:text-base font-semibold tracking-[0.6em] text-sky-400/90 uppercase mb-4 md:mb-6 ml-[0.6em]">
                        ヨシホリ
                    </p>
                    <h1
                        className="font-black leading-[0.95] tracking-tighter bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent select-none"
                        style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
                    >
                        YOSHIHORI
                    </h1>
                </div>

                <div className="hero-fade mt-8 md:mt-10 flex items-center justify-center gap-4" style={{ animationDelay: '0.5s' }}>
                    <span className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-sky-400/70" />
                    <p className="text-base md:text-xl font-bold text-slate-200 tracking-[0.35em] ml-[0.35em]">
                        AIエンタメクリエイター
                    </p>
                    <span className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-sky-400/70" />
                </div>

            </div>

        </section>
    );
}
