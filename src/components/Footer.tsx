
import Logo from "@/components/Logo";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/5 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-muted-foreground">
              Профессиональные системы видеонаблюдения для дома и бизнеса. Качество, надежность, безопасность.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Видеонаблюдение для дома</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Решения для бизнеса</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Уличное видеонаблюдение</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Техническое обслуживание</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Проекты</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Блог</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Вакансии</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</li>
              <li className="text-muted-foreground">+7 (999) 123-45-67</li>
              <li className="text-muted-foreground">info@videoguard.ru</li>
              <li className="text-muted-foreground">Пн-Пт: 9:00-18:00</li>
            </ul>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
          <p className="text-sm text-muted-foreground">
            © 2023 ВидеоСтраж. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
