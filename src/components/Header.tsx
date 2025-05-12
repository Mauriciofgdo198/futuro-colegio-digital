
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
  X,
  ChevronDown
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation items with subitems
  const navItems = [
    { 
      name: "Sobre nós", 
      icon: <Info className="h-4 w-4" />, 
      href: "/sobre",
      subitems: [
        { name: "Quem somos", href: "/sobre/quem-somos" },
        { name: "Valores do Instituto", href: "/sobre/valores" },
        { name: "IENT", href: "/sobre/ient" },
        { name: "Missão", href: "/sobre/missao" },
      ]
    },
    { 
      name: "Projetos", 
      icon: <Projector className="h-4 w-4" />, 
      href: "/projetos",
      subitems: [
        { name: "Enem/Vestibular", href: "/projetos/enem-vestibular" },
        { name: "Nossos Projetos", href: "/projetos/nossos-projetos" },
      ]
    },
    { 
      name: "Unidades", 
      icon: <Building className="h-4 w-4" />, 
      href: "/unidades",
      subitems: [
        { name: "Unidade Contagem", href: "/unidades/contagem" },
        { name: "Unidade Betim", href: "/unidades/betim" },
      ]
    },
    { 
      name: "Ensinos", 
      icon: <GraduationCap className="h-4 w-4" />, 
      href: "/ensinos",
      subitems: [
        { name: "Educação Infantil", href: "/ensinos/infantil" },
        { name: "Ensino Fundamental I", href: "/ensinos/fundamental-1" },
        { name: "Ensino Fundamental II", href: "/ensinos/fundamental-2" },
        { name: "Ensino Médio", href: "/ensinos/medio" },
        { name: "Horário Integral", href: "/ensinos/integral" },
      ]
    },
    { name: "Estrutura", icon: <LayoutGrid className="h-4 w-4" />, href: "/estrutura" },
    { name: "Notícias", icon: <Newspaper className="h-4 w-4" />, href: "/noticias" },
    { name: "Galerias", icon: <Image className="h-4 w-4" />, href: "/galerias" },
    { name: "Contato", icon: <Mail className="h-4 w-4" />, href: "/contato" },
  ];

  const actionButtons = [
    { name: "Matrículas", icon: <UserPlus className="h-4 w-4" />, href: "https://contagem.ient.com.br/matricula", color: "bg-colegio-amarelo text-colegio-azul hover:bg-colegio-amareloClaro" },
    { name: "App IENT", icon: <Smartphone className="h-4 w-4" />, href: "https://id.layers.digital/sign-in", color: "bg-colegio-azul text-white hover:bg-colegio-azulClaro" },
    { name: "Meu Acesso", icon: <LogIn className="h-4 w-4" />, href: "https://nt.ient.com.br/meu-acesso", color: "bg-colegio-azul text-white hover:bg-colegio-azulClaro" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-28 items-center justify-between">
          {/* Mobile Menu Button (Left) */}
          <button
            className="lg:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {/* Logo (Centered) */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/a78ac681-2089-42e4-8fc6-e3bbda2d5317.png" 
                alt="Colégio Novos Tempos"
                className="h-22 object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  item.subitems ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-colegio-azul">
                        <span className="flex items-center">
                          {item.icon}
                          <span className="ml-1">{item.name}</span>
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-2 absolute top-full">
                          {item.subitems.map((subitem) => (
                            <li key={subitem.name}>
                              <NavigationMenuLink asChild>
                                <Link 
                                  to={subitem.href}
                                  className="block select-none rounded-md p-2 text-sm hover:bg-gray-100 hover:text-colegio-azul"
                                >
                                  {subitem.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <Link
                        to={item.href}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-colegio-azul hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {item.icon}
                        <span className="ml-1">{item.name}</span>
                      </Link>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            {actionButtons.map((button) => (
              <Button
                key={button.name}
                asChild
                className={`${button.color} rounded-full text-sm font-bold`}
              >
                <a href={button.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  {button.icon}
                  <span className="ml-1">{button.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 px-2 space-y-4 border-t">
            <div className="grid gap-2">
              {navItems.map((item) => (
                item.subitems ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md w-full justify-between">
                      <span className="flex items-center">
                        {item.icon}
                        <span className="ml-1">{item.name}</span>
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.subitems.map((subitem) => (
                        <DropdownMenuItem key={subitem.name} asChild>
                          <Link 
                            to={subitem.href}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-1">{item.name}</span>
                  </Link>
                )
              ))}
            </div>
            
            <div className="flex flex-col space-y-2">
              {actionButtons.map((button) => (
                <Button
                  key={button.name}
                  asChild
                  className={`${button.color} w-full rounded-full text-sm font-bold`}
                >
                  <a 
                    href={button.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {button.icon}
                    <span className="ml-1">{button.name}</span>
                  </a>
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
