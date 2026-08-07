import FilmStrip from "./FilmStrip";

// FilmStripは装飾用の小さな帯なので、本体画像ではなく軽量サムネ(thumbs/)を使う
const heroStrip = [
    "/works/thumbs/anime.webp", "/works/thumbs/book1.webp", "/works/thumbs/title2.webp", "/works/thumbs/movie.webp",
    "/works/thumbs/book3.webp", "/works/thumbs/title6.webp", "/works/thumbs/cm.webp", "/works/thumbs/book5.webp",
    "/works/thumbs/mv.webp", "/works/thumbs/title9.webp",
];
const heroStripB = [
    "/works/thumbs/title1.webp", "/works/thumbs/book2.webp", "/works/thumbs/title3.webp", "/works/thumbs/mv.webp",
    "/works/thumbs/title5.webp", "/works/thumbs/book4.webp", "/works/thumbs/title7.webp", "/works/thumbs/anime.webp",
    "/works/thumbs/title10.webp", "/works/thumbs/book6.webp",
];
const heroStripC = [
    "/works/thumbs/movie.webp", "/works/thumbs/title4.webp", "/works/thumbs/book3.webp", "/works/thumbs/title8.webp",
    "/works/thumbs/cm.webp", "/works/thumbs/book1.webp", "/works/thumbs/title6.webp", "/works/thumbs/book5.webp",
];

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-slate-950">

            {/* 背景装飾：ごく控えめな光のみ */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary-600/10 blur-[180px]" />
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
                        className="font-black leading-[0.95] tracking-tighter text-white select-none"
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
