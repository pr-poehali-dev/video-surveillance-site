
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
              Современные системы видеонаблюдения для вашей безопасности
            </h1>
            <p className="text-lg text-muted-foreground">
              Профессиональная установка и обслуживание систем видеонаблюдения для дома и бизнеса. 
              Гарантия качества и круглосуточная техническая поддержка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Получить консультацию</Button>
              <Button variant="outline" size="lg">Наши услуги</Button>
            </div>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden shadow-xl">
            <div className="relative pb-[56.25%]">
              <img 
                src="/placeholder.svg" 
                alt="Система видеонаблюдения" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
