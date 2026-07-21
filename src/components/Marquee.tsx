const words = ["MANGA", "ANIME", "MOVIE", "CM", "MV", "AI × ENTERTAINMENT"];

export default function Marquee() {
    const row = (
        <div className="flex shrink-0 items-center">
            {words.map((word, i) => (
                <span key={i} className="flex items-center">
                    <span className="px-6 md:px-10 text-3xl md:text-5xl font-black tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(56,189,248,0.30)]">
                        {word}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-primary-500/40" />
                </span>
            ))}
        </div>
    );

    return (
        <div aria-hidden="true" className="overflow-hidden py-8 md:py-10 bg-slate-950 select-none">
            <div className="marquee-track flex w-max">
                {row}
                {row}
            </div>
        </div>
    );
}
