
import { 
  Home, 
  Building2, 
  MapPin, 
  Settings,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Видеонаблюдение для дома",
    description: "Защитите свой дом и семью с помощью современных систем видеонаблюдения с удаленным доступом.",
    icon: <Home className="w-10 h-10" />
  },
  {
    title: "Решения для бизнеса",
    description: "Комплексные системы видеонаблюдения для офисов, магазинов и производственных помещений.",
    icon: <Building2 className="w-10 h-10" />
  },
  {
    title: "Уличное видеонаблюдение",
    description: "Всепогодные камеры с высоким разрешением для мониторинга территории вокруг вашего объекта.",
    icon: <MapPin className="w-10 h-10" />
  },
  {
    title: "Техническое обслуживание",
    description: "Регулярная проверка, настройка и обслуживание систем видеонаблюдения любой сложности.",
    icon: <Settings className="w-10 h-10" />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground">
            Предлагаем полный спектр услуг по установке и обслуживанию систем видеонаблюдения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-4 text-primary">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" size="sm">
                  Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
