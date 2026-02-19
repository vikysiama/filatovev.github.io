import { BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h3 className="text-3xl font-bold">Источники</h3>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 Школьный проект · Нейросети и образование
          </p>
          <p className="text-center text-gray-500 text-xs mt-2">
            Создано для образовательных целей
          </p>
        </div>
      </div>
    </footer>
  );
}