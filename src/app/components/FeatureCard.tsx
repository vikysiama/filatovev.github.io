import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export function FeatureCard({ icon: Icon, title, description, color = "blue" }: FeatureCardProps) {
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    pink: "bg-pink-500",
    cyan: "bg-cyan-500",
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
      <div className={`w-14 h-14 ${colorClasses[color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
