
import { LucideCamera, LucideShield } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <LucideCamera className="w-6 h-6 text-primary" />
        <LucideShield className="w-4 h-4 text-primary absolute -right-1 -bottom-1" />
      </div>
      <span className="font-bold text-xl text-primary">ВидеоСтраж</span>
    </div>
  );
};

export default Logo;
