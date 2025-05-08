
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Briefcase, Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "Facebook", href: "https://web.facebook.com/ColegioNovosTempos/?locale=pt_BR&_rdc=1&_rdr#", icon: "facebook" },
    { name: "Instagram", href: "https://www.instagram.com/colegionovostempos/", icon: "instagram" },
    { name: "Youtube", href: "https://www.youtube.com/c/Col%C3%A9gioNovosTemposContagem", icon: "youtube" },
    { name: "Twitter", href: "https://x.com/novos_tempos", icon: "twitter" },
    { name: "TikTok", href: "https://www.tiktok.com/@colegionovostempos", icon: "tiktok" },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-colegio-azul to-colegio-azulClaro text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Unidade Contagem */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Unidade Contagem</h3>
            <Separator className="bg-white/20" />
            <p className="flex items-start gap-2 text-sm">
              <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
              <span>Av. Prefeito Gil Diniz, 581 (Antigo 373), Centro, Contagem - MG</span>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Phone className="h-5 w-5 shrink-0" />
              <span>(31) 3391-6097</span>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Mail className="h-5 w-5 shrink-0" />
              <span>contagem@ient.com.br</span>
            </p>
            
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={`contagem-${social.name}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-colegio-amarelo hover:text-colegio-azul p-2 rounded-full transition-colors"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
            
            <Link to="/como-chegar" className="inline-flex items-center gap-2 text-sm hover:text-colegio-amarelo transition-colors mt-2">
              <MapPin className="h-5 w-5" />
              <span>Como chegar</span>
            </Link>
          </div>
          
          {/* Unidade Betim */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Unidade Betim</h3>
            <Separator className="bg-white/20" />
            <p className="flex items-start gap-2 text-sm">
              <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
              <span>Rua do Acre, 536, Senhora das Graças, Betim - MG</span>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Phone className="h-5 w-5 shrink-0" />
              <span>(31) 3191-4310</span>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Mail className="h-5 w-5 shrink-0" />
              <span>betim@ient.com.br</span>
            </p>
            
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={`betim-${social.name}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-colegio-amarelo hover:text-colegio-azul p-2 rounded-full transition-colors"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
            
            <Link to="/como-chegar-betim" className="inline-flex items-center gap-2 text-sm hover:text-colegio-amarelo transition-colors mt-2">
              <MapPin className="h-5 w-5" />
              <span>Como chegar</span>
            </Link>
          </div>
          
          {/* Trabalhe Conosco e App */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Trabalhe Conosco</h3>
              <Separator className="bg-white/20" />
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-sm font-medium">
                    <Briefcase className="h-5 w-5" />
                    <span>Envie seu currículo</span>
                  </p>
                  <p className="flex flex-col pl-7 text-sm">
                    <span>Unidade Contagem</span>
                    <span className="text-gray-300">rhcontagem@ient.com.br</span>
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-sm font-medium">
                    <Briefcase className="h-5 w-5" />
                    <span>Envie seu currículo</span>
                  </p>
                  <p className="flex flex-col pl-7 text-sm">
                    <span>Unidade Betim</span>
                    <span className="text-gray-300">rhbetim@ient.com.br</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Baixe nosso APP</h3>
              <Separator className="bg-white/20" />
              
              <div className="flex space-x-4 items-center">
                <a 
                  href="https://play.google.com/store/apps/details?id=education.layers.sophiabylayers&hl=en_US&pli=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Download na Google Play Store"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m3 6 7.89 5.26a2 2 0 0 0 2.22 0L21 6" />
                    <path d="M5.6 4.2 12 10l6.4-5.8a1.98 1.98 0 0 0-1.15-.6h-10.5a1.98 1.98 0 0 0-1.15.6Z" />
                    <path d="M21 6v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6" />
                    <path d="m3 6 8 7" />
                    <path d="m21 6-8 7" />
                  </svg>
                </a>
                <a 
                  href="https://apps.apple.com/br/app/sophia-by-layers/id6443421620" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Download na Apple App Store"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M14.41 8.41 12 10.83m0 0-2.41-2.41m2.41 2.41V6m-8 6h2m14 0h-2m-7 4v2" />
                  </svg>
                </a>
                <a 
                  href="https://id.layers.digital/sign-in" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Acessar site"
                >
                  <Download className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} Colégio Novos Tempos - Instituto Educacional. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// Helper component for social icons
const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "facebook":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      );
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case "youtube":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      );
    case "twitter":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      );
    case "tiktok":
      return (
        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path></g></svg>
      );
    default:
      return null;
  }
};

export default Footer;
