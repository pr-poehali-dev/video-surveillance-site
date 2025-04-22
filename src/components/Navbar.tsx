
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Главная", href: "#" },
  { title: "Услуги", href: "#services" },
  { title: "Преимущества", href: "#benefits" },
  { title: "Контакты", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.title}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Войти
          </Button>
          <Button size="sm">
            Связаться с нами
          </Button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" size="sm">
                Войти
              </Button>
              <Button size="sm">
                Связаться с нами
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
