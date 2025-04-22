
import { 
  LucideShieldCheck, 
  LucideThumbsUp, 
  LucideUsers 
} from "lucide-react";

const benefits = [
  {
    icon: <LucideShieldCheck className="w-12 h-12 text-primary" />,
    title: "Безопасность 24/7",
    description: "Круглосуточный мониторинг вашего объекта с возможностью удаленного доступа через мобильное приложение."
  },
  {
    icon: <LucideThumbsUp className="w-12 h-12 text-primary" />,
    title: "Профессиональный подход",
    description: "Более 10 лет опыта установки систем видеонаблюдения. Используем только сертифицированное оборудование."
  },
  {
    icon: <LucideUsers className="w-12 h-12 text-primary" />,
    title: "Поддержка клиентов",
    description: "Техническая поддержка и консультации по эксплуатации систем видеонаблюдения в любое время суток."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-muted-foreground">
            Наши преимущества, которые делают нас лидерами в области безопасности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
