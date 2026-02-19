import { Brain, GraduationCap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with neutral color */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white">
        <div className="flex items-center justify-center gap-4 mb-8 animate-fadeIn">
          <Brain className="w-12 h-12 text-blue-400" />
          <span className="text-4xl font-bold">×</span>
          <GraduationCap className="w-12 h-12 text-green-400" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Нейросеть + Учитель:
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Сила тандема
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Почему искусственный интеллект не заменит школьного учителя, 
          но станет его лучшим помощником
        </p>

        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-sm uppercase tracking-wider">Школьный проект · 2026</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}