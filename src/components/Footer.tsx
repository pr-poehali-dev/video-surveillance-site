
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-muted-foreground">
              Профессиональные решения в области видеонаблюдения для вашей безопасности.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Для дома</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Для бизнеса</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Уличное видеонаблюдение</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Сервисное обслуживание</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">О компании</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <address className="not-italic text-muted-foreground">
              <p>г. Москва, ул. Примерная, д. 123</p>
              <p className="mt-2">+7 (800) 555-35-35</p>
              <p>info@videoguard.ru</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 ВидеоСтраж. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
