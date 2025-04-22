
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  LucidePhone, 
  LucideMail, 
  LucideMapPin 
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист свяжется с вами для консультации и расчета стоимости системы видеонаблюдения.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <LucidePhone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Телефон</h3>
                    <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <LucideMail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@videoguard.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <LucideMapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <form className="space-y-6">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Textarea placeholder="Ваше сообщение" rows={4} />
                </div>
                <Button className="w-full">Отправить заявку</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
