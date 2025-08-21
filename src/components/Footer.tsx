import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Briefcase, Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinksContagem = [
    { name: "Facebook", href: "https://web.facebook.com/ColegioNovosTempos/?locale=pt_BR&_rdc=1&_rdr#", icon: "facebook" },
    { name: "Instagram", href: "https://www.instagram.com/colegionovostempos/", icon: "instagram" },
    { name: "Youtube", href: "https://www.youtube.com/c/Col%C3%A9gioNovosTemposContagem", icon: "youtube" },
    { name: "Twitter", href: "https://x.com/novos_tempos", icon: "twitter" },
    { name: "TikTok", href: "https://www.tiktok.com/@colegionovostempos", icon: "tiktok" },
  ];

  const socialLinksBetim = [
    { name: "Facebook", href: "https://web.facebook.com/ColegioNovosTempos/?locale=pt_BR&_rdc=1&_rdr#", icon: "facebook" },
    { name: "Instagram", href: "https://www.instagram.com/colegionovostemposbetim/", icon: "instagram" },
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
              {socialLinksContagem.map((social) => (
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
              {socialLinksBetim.map((social) => (
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
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.31 12l2.388-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z"/>
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
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </a>
                <a 
                  href="https://id.layers.digital/sign-in" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Acessar site"
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
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg>
      );
    case "tiktok":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
        </svg>
      );
    default:
      return null;
  }
};

export default Footer;
