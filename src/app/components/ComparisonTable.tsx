import { Check, X } from "lucide-react";

interface ComparisonItem {
  aspect: string;
  ai: { value: string; positive: boolean };
  teacher: { value: string; positive: boolean };
}

const comparisonData: ComparisonItem[] = [
  {
    aspect: "Эмоциональная поддержка",
    ai: { value: "Не способна на эмпатию", positive: false },
    teacher: { value: "Понимает чувства учеников", positive: true },
  },
  {
    aspect: "Доступность 24/7",
    ai: { value: "Всегда доступна", positive: true },
    teacher: { value: "Ограничено временем", positive: false },
  },
  {
    aspect: "Индивидуальный подход",
    ai: { value: "Адаптация по данным", positive: true },
    teacher: { value: "Личное понимание ученика", positive: true },
  },
  {
    aspect: "Мотивация и вдохновение",
    ai: { value: "Только информация", positive: false },
    teacher: { value: "Личный пример и вдохновение", positive: true },
  },
  {
    aspect: "Обработка данных",
    ai: { value: "Мгновенный анализ прогресса", positive: true },
    teacher: { value: "Требует времени", positive: false },
  },
  {
    aspect: "Творческое мышление",
    ai: { value: "Работает по алгоритмам", positive: false },
    teacher: { value: "Развивает креативность", positive: true },
  },
  {
    aspect: "Социализация",
    ai: { value: "Изолированное обучение", positive: false },
    teacher: { value: "Учит взаимодействию", positive: true },
  },
  {
    aspect: "Актуальность информации",
    ai: { value: "Быстрое обновление данных", positive: true },
    teacher: { value: "Зависит от опыта", positive: false },
  },
];

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-green-500">
            <th className="p-4 text-left text-white font-bold">Аспект обучения</th>
            <th className="p-4 text-center text-white font-bold">Нейросеть</th>
            <th className="p-4 text-center text-white font-bold">Учитель</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              } hover:bg-blue-50 transition-colors`}
            >
              <td className="p-4 font-semibold text-gray-900 border-b border-gray-200">
                {item.aspect}
              </td>
              <td className="p-4 text-center border-b border-gray-200">
                <div className="flex items-center justify-center gap-2">
                  {item.ai.positive ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                  <span className={item.ai.positive ? 'text-green-700' : 'text-red-700'}>
                    {item.ai.value}
                  </span>
                </div>
              </td>
              <td className="p-4 text-center border-b border-gray-200">
                <div className="flex items-center justify-center gap-2">
                  {item.teacher.positive ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                  <span className={item.teacher.positive ? 'text-green-700' : 'text-red-700'}>
                    {item.teacher.value}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}