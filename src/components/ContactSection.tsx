
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  PhoneCall, 
  Mail, 
  MapPin,
  Send
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-muted-foreground">
            Оставьте заявку, и наш специалист свяжется с вами для консультации
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Отправить заявку</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input placeholder="Телефон" type="tel" />
                </div>
              </div>
              <div>
                <Input placeholder="Email" type="email" />
              </div>
              <div>
                <Textarea placeholder="Сообщение" rows={4} />
              </div>
              <Button className="w-full">
                Отправить <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Телефон</h4>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (999) 765-43-21</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">info@videoguard.ru</p>
                  <p className="text-muted-foreground">support@videoguard.ru</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123, офис 45</p>
                  <p className="text-muted-foreground">Пн-Пт: 9:00-18:00, Сб: 10:00-15:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
