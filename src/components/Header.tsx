
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
  UserPlus, 
  Smartphone, 
  LogIn, 
  X, 
  ChevronDown,
  ChevronUp,
  Phone,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";

// Custom X icon component for Twitter/X
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";

import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-mobile";

// Define types for menu items
interface SubItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  icon: React.ReactNode;
  href: string;
  subitems?: SubItem[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileItems, setOpenMobileItems] = useState<string[]>([]);
  const isMobile = useMediaQuery("(max-width: 1023px)");
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileSubmenu = (itemName: string) => {
    setOpenMobileItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(item => item !== itemName) 
        : [...prev, itemName]
    );
  };
  
  // Check if a mobile menu item is expanded
  const isExpanded = (itemName: string) => {
    return openMobileItems.includes(itemName);
  };

  // Left side navigation items
  const leftNavItems: NavItem[] = [
    {
      name: "Sobre nós",
      icon: <Info className="h-4 w-4" />,
      href: "/sobre",
      subitems: [{
        name: "Quem somos",
        href: "/sobre/quem-somos"
      }, {
        name: "Valores do Instituto",
        href: "/sobre/valores"
      }, {
        name: "IENT",
        href: "/sobre/ient"
      }, {
        name: "Missão",
        href: "/sobre/missao"
      }]
    }, 
    {
      name: "Projetos",
      icon: <Projector className="h-4 w-4" />,
      href: "/projetos",
      subitems: [{
        name: "Nossos Projetos",
        href: "/projetos/nossos-projetos"
      }]
    }, 
    {
      name: "Unidades",
      icon: <Building className="h-4 w-4" />,
      href: "/unidades",
      subitems: [{
        name: "Unidade Contagem",
        href: "/unidades/contagem"
      }, {
        name: "Unidade Betim",
        href: "/unidades/betim"
      }]
    }, 
    {
      name: "Ensinos",
      icon: <GraduationCap className="h-4 w-4" />,
      href: "/ensinos",
      subitems: [{
        name: "Educação Infantil",
        href: "/ensinos/infantil"
      }, {
        name: "Ensino Fundamental I",
        href: "/ensinos/fundamental-1"
      }, {
        name: "Ensino Fundamental II",
        href: "/ensinos/fundamental-2"
      }, {
        name: "Ensino Médio",
        href: "/ensinos/medio"
      }, {
        name: "Horário Integral",
        href: "/ensinos/integral"
      }]
    }
  ];

  // Right side navigation items
  const rightNavItems: NavItem[] = [
    {
      name: "Estrutura",
      icon: <LayoutGrid className="h-4 w-4" />,
      href: "/estrutura"
    }, 
    {
      name: "App IENT",
      icon: <Smartphone className="h-4 w-4" />,
      href: "https://id.layers.digital/sign-in"
    }, 
    {
      name: "Galerias",
      icon: <Image className="h-4 w-4" />,
      href: "/galerias"
    }, 
    {
      name: "Contato",
      icon: <Mail className="h-4 w-4" />,
      href: "/contato"
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, href: "https://facebook.com" },
    { icon: <Instagram className="h-4 w-4" />, href: "https://instagram.com" },
    { icon: <XIcon className="h-4 w-4" />, href: "https://x.com/novos_tempos" },
    { icon: <Youtube className="h-4 w-4" />, href: "https://www.youtube.com/c/Col%C3%A9gioNovosTemposContagem" }
  ];

  // Action buttons
  const actionButtons = [
    {
      name: "Matrículas",
      icon: <UserPlus className="h-4 w-4" />,
      href: "https://contagem.ient.com.br/matricula",
      color: "bg-colegio-amarelo text-colegio-azul hover:bg-colegio-amareloClaro"
    }, 
    {
      name: "Meu Acesso",
      icon: <LogIn className="h-4 w-4" />,
      href: "https://nt.ient.com.br/meu-acesso",
      color: "bg-colegio-amarelo text-colegio-azul hover:bg-colegio-amareloClaro"
    }
  ];

  // Render desktop navigation item
  const renderNavItem = (item: NavItem, index: number) => {
    return item.subitems ? (
      <NavigationMenuItem key={`${item.name}-${index}`}>
        <NavigationMenuTrigger className="text-white hover:text-white/80 font-medium">
          <span className="flex items-center">
            {item.icon}
            <span className="ml-1">{item.name}</span>
          </span>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[200px] gap-1 p-2 bg-white">
            {item.subitems.map((subitem, subIndex) => (
              <li key={`${subitem.name}-${subIndex}`}>
                <NavigationMenuLink asChild>
                  <Link 
                    to={subitem.href} 
                    className="block select-none rounded-md p-2 text-sm hover:bg-gray-100 hover:text-colegio-azul text-colegio-azul"
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
      <NavigationMenuItem key={`${item.name}-${index}`}>
        <Link 
          to={item.href} 
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white hover:text-white/80 hover:bg-white/10 rounded-md transition-colors"
        >
          {item.icon}
          <span className="ml-1">{item.name}</span>
        </Link>
      </NavigationMenuItem>
    );
  };

  // Mobile menu using Sheet component with Collapsible for submenus
  const renderMobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto bg-colegio-azul">
        <div className="py-4 px-2 space-y-6">
          <div className="mb-6">
            <Link to="/" className="flex justify-center">
              <img src="/lovable-uploads/a78ac681-2089-42e4-8fc6-e3bbda2d5317.png" alt="Colégio Novos Tempos" className="h-16 object-contain" />
            </Link>
          </div>
          
          {/* Top bar items */}
          <div className="space-y-2 border-b pb-4">
            <div className="flex items-center space-x-2 px-3 py-2">
              <Phone className="h-4 w-4 text-colegio-azul" />
              <span className="text-sm">(31) 3391-6097</span>
            </div>
            
            <div className="flex justify-center space-x-4 py-2">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-colegio-azul"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <div className="grid gap-2 mt-2">
              {actionButtons.map((button, index) => (
                <Button key={index} asChild className={`${button.color} w-full rounded-full text-sm font-bold`}>
                  <a href={button.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
                    {button.icon}
                    <span className="ml-1">{button.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Main navigation with collapsible submenus */}
          <div className="space-y-1">
            {[...leftNavItems, ...rightNavItems].map((item, index) => (
              item.subitems ? (
                <Collapsible 
                  key={`mobile-${item.name}-${index}`}
                  open={isExpanded(item.name)}
                  onOpenChange={() => toggleMobileSubmenu(item.name)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-colegio-azul hover:bg-gray-50 rounded-md">
                    <span className="flex items-center">
                      {item.icon}
                      <span className="ml-1">{item.name}</span>
                    </span>
                    {isExpanded(item.name) ? 
                      <ChevronUp className="h-4 w-4" /> : 
                      <ChevronDown className="h-4 w-4" />
                    }
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-gray-50 rounded-md mt-1 ml-6">
                    {item.subitems.map((subitem, subIndex) => (
                      <Link 
                        key={`mobile-${subitem.name}-${subIndex}`} 
                        to={subitem.href}
                        className="block px-4 py-2 text-sm text-colegio-azul hover:bg-gray-100"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link 
                  key={`mobile-${item.name}-${index}`} 
                  to={item.href} 
                  className="flex items-center px-3 py-2 text-sm font-medium text-colegio-azul hover:bg-gray-50 rounded-md"
                >
                  {item.icon}
                  <span className="ml-1">{item.name}</span>
                </Link>
              )
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-colegio-azul/95 backdrop-blur-md shadow-md">
      {/* Top bar */}
      <div className="hidden md:block bg-colegio-azulClaro/20 backdrop-blur-sm border-b border-colegio-azulClaro/30">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between">
            {/* Phone number */}
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-white mr-2" />
              <span className="text-sm text-white">(31) 3333-4444</span>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1 rounded-full hover:bg-white/20 text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            {/* Action buttons */}
            <div className="flex items-center space-x-2">
              {actionButtons.map((button, index) => (
                <Button key={index} asChild className={`${button.color} rounded-full text-xs h-7 px-3`}>
                  <a href={button.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    {button.icon}
                    <span className="ml-1">{button.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            {renderMobileMenu()}
          </div>
          
          {/* Left navigation */}
          <nav className="hidden lg:flex flex-1 justify-end">
            <NavigationMenu>
              <NavigationMenuList>
                {leftNavItems.map((item, index) => renderNavItem(item, index))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          
          {/* Logo (Centered) */}
          <div className="flex-shrink-0 flex justify-center mx-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/a78ac681-2089-42e4-8fc6-e3bbda2d5317.png" 
                alt="Colégio Novos Tempos" 
                className="h-20 object-contain"
              />
            </Link>
          </div>
          
          {/* Right navigation */}
          <nav className="hidden lg:flex flex-1 justify-start">
            <NavigationMenu>
              <NavigationMenuList>
                {rightNavItems.map((item, index) => renderNavItem(item, index))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          
          {/* Empty div for mobile layout balance */}
          <div className="lg:hidden w-10"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
