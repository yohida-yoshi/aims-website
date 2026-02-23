import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Flow from "@/components/Flow";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* 簡易的なヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-primary-600 dark:text-primary-400">
            AIMS <span className="font-normal text-sm text-slate-500 hidden sm:inline-block">| AI Manga Studio</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">強み</a>
            <a href="#works" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">実績</a>
            <a href="#flow" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">制作の流れ</a>
          </nav>
          <a href="#contact" className="rounded-full bg-primary-600 px-5 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors">
            お問い合わせ
          </a>
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col pt-16">
        <Hero />
        <About />
        <Works />
        <Flow />
        <Contact />
      </main>

      {/* 簡易的なフッター */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="font-bold text-2xl text-white mb-4">AIMS</div>
          <p className="mb-8">AI Manga Studio</p>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} AI Manga Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
