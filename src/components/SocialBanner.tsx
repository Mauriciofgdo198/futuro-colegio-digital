
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

// Custom X icon component for Twitter/X
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SocialBanner = () => {
  return (
    <section className="py-12 bg-colegio-amarelo text-colegio-azul">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Não deixe de conferir nossas redes sociais, acesse e confira
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Button 
            asChild
            className="bg-colegio-azul text-white hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://web.facebook.com/ColegioNovosTempos/?locale=pt_BR&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Facebook className="h-6 w-6" />
              <span>Facebook</span>
            </a>
          </Button>
          
          <Button 
            asChild
            className="bg-colegio-azul text-white hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://www.instagram.com/colegionovostempos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Instagram className="h-6 w-6" />
              <span>Instagram</span>
            </a>
          </Button>
          
          <Button 
            asChild
            className="bg-colegio-azul text-white hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://www.youtube.com/c/Col%C3%A9gioNovosTemposContagem" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Youtube className="h-6 w-6" />
              <span>YouTube</span>
            </a>
          </Button>

          <Button 
            asChild
            className="bg-colegio-azul text-white hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://x.com/novos_tempos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <XIcon className="h-6 w-6" />
              <span>X</span>
            </a>
          </Button>

          <Button 
            asChild
            className="bg-colegio-azul text-white hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://www.tiktok.com/@colegionovostempos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialBanner;
