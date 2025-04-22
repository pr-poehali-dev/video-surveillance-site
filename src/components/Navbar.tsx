
import { Button } from "@/components/ui/button";
import { LucideMenu, LucideX } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="border-b py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
          <Button>Заказать звонок</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <LucideX /> : <LucideMenu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-4 flex flex-col gap-4 animate-fade-in">
          <a href="#services" className="text-foreground hover:text-primary py-2 border-b border-border">
            Услуги
          </a>
          <a href="#benefits" className="text-foreground hover:text-primary py-2 border-b border-border">
            Преимущества
          </a>
          <a href="#contact" className="text-foreground hover:text-primary py-2 border-b border-border">
            Контакты
          </a>
          <Button className="mt-2">Заказать звонок</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
