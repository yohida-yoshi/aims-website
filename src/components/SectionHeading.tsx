import React from "react";

type SectionHeadingProps = {
    number: string;   // "01"
    en: string;       // "About"
    ja: string;       // "プロフィール"
    light?: boolean;  // 暗い背景用に白文字にする
    description?: React.ReactNode;
};

export default function SectionHeading({ number, en, ja, light = false, description }: SectionHeadingProps) {
    return (
        <div className="mb-16 md:mb-20">
            <div className={`flex items-baseline gap-4 mb-3 ${light ? "text-white/60" : "text-slate-400"}`}>
                <span className="text-sm md:text-base font-mono font-semibold tracking-widest">
                    {number}
                </span>
                <span className={`h-px flex-none w-10 ${light ? "bg-white/40" : "bg-slate-700"}`} />
                <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
                    {ja}
                </span>
            </div>
            <h2 className={`text-5xl md:text-7xl font-black tracking-tight leading-none ${light ? "text-white" : "text-foreground"}`}>
                {en}
                <span className="text-primary-500">.</span>
            </h2>
            {description && (
                <p className={`mt-6 text-base md:text-lg max-w-2xl leading-relaxed ${light ? "text-white/90" : "text-slate-400"}`}>
                    {description}
                </p>
            )}
        </div>
    );
}
