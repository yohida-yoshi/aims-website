import Reveal from "./Reveal";

export default function Contact() {
    return (
        <section id="contact" className="py-28 md:py-36 relative overflow-hidden bg-slate-950">
            {/* 背景装飾：静かなブルーの光 */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-600/15 blur-[140px]" />
                <div className="absolute -bottom-48 right-1/5 w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-[120px]" />
            </div>

            {/* 透かし文字 */}
            <span aria-hidden="true" className="watermark" style={{ WebkitTextStrokeColor: 'rgba(255,255,255,0.06)' }}>
                CONTACT
            </span>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <Reveal>
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <div className="flex items-baseline justify-center gap-4 mb-4 text-white/50">
                            <span className="text-sm md:text-base font-mono font-semibold tracking-widest">04</span>
                            <span className="h-px w-10 bg-white/30" />
                            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">お問い合わせ</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-white mb-8">
                            Contact<span className="text-primary-500">.</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-0 font-medium">
                            漫画・アニメ・CM・MVなど、AIエンタメ制作のご依頼をお待ちしています。<br className="hidden md:block" />
                            まずはお気軽にXのDMからご連絡ください。
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={120}>
                    <div className="max-w-xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm p-8">
                        <div className="text-center py-4">
                            <div className="mb-8">
                                <svg className="w-14 h-14 mx-auto text-white mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">X のDMからどうぞ</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                    お見積もりやご相談など、いつでもお気軽にご連絡ください。<br />
                                    原則として24時間以内にご返信いたします。
                                </p>
                            </div>
                            <a
                                href="https://x.com/akiramenaiwoman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full rounded-full bg-primary-600 hover:bg-primary-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                (@akiramenaiwoman) へ移動する <span className="ml-2">↗</span>
                            </a>
                            <p className="text-xs text-slate-500 mt-6 font-medium">
                                ※Xのプロフィール画面が新しいタブで開きます。そちらからDMをお送りください。
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
