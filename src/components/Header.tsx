
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building,
  GraduationCap,
  Info,
  LayoutGrid,
  Mail,
  Menu,
  Image,
  Projector,
  Newspaper,
  UserPlus,
  Smartphone,
  LogIn,
  X
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Sobre nós", icon: <Info className="h-4 w-4" />, href: "/sobre" },
    { name: "Projetos", icon: <Projector className="h-4 w-4" />, href: "/projetos" },
    { name: "Unidades", icon: <Building className="h-4 w-4" />, href: "/unidades" },
    { name: "Ensinos", icon: <GraduationCap className="h-4 w-4" />, href: "/ensinos" },
    { name: "Estrutura", icon: <LayoutGrid className="h-4 w-4" />, href: "/estrutura" },
    { name: "Notícias", icon: <Newspaper className="h-4 w-4" />, href: "/noticias" },
    { name: "Galerias", icon: <Image className="h-4 w-4" />, href: "/galerias" },
    { name: "Contato", icon: <Mail className="h-4 w-4" />, href: "/contato" },
  ];

  const actionButtons = [
    { name: "Matrículas", icon: <UserPlus className="h-4 w-4" />, href: "/matriculas", color: "bg-colegio-amarelo text-colegio-azul hover:bg-colegio-amareloClaro" },
    { name: "App Aluno", icon: <Smartphone className="h-4 w-4" />, href: "/app", color: "bg-colegio-azul text-white hover:bg-colegio-azulClaro" },
    { name: "Meu Acesso", icon: <LogIn className="h-4 w-4" />, href: "/acesso", color: "bg-colegio-azul text-white hover:bg-colegio-azulClaro" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/a78ac681-2089-42e4-8fc6-e3bbda2d5317.png" 
              alt="Colégio Novos Tempos"
              className="h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-colegio-azul hover:bg-gray-50 rounded-md transition-colors"
              >
                {item.icon}
                <span className="ml-1">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            {actionButtons.map((button) => (
              <Button
                key={button.name}
                asChild
                className={`${button.color} rounded-full text-sm font-bold`}
              >
                <Link to={button.href} className="inline-flex items-center">
                  {button.icon}
                  <span className="ml-1">{button.name}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 px-2 space-y-4 border-t">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="ml-1">{item.name}</span>
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col space-y-2">
              {actionButtons.map((button) => (
                <Button
                  key={button.name}
                  asChild
                  className={`${button.color} w-full rounded-full text-sm font-bold`}
                >
                  <Link 
                    to={button.href} 
                    className="inline-flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {button.icon}
                    <span className="ml-1">{button.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
