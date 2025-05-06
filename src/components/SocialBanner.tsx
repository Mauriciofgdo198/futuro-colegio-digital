
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Twitter, TiktokIcon } from "lucide-react";

const SocialBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-colegio-azul via-colegio-azulClaro to-blue-400 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          NÃO DEIXE DE CONFERIR NOSSAS REDES SOCIAIS, ACESSE E CONFIRA
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Button 
            asChild
            className="bg-white text-colegio-azul hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://web.facebook.com/ColegioNovosTempos/?locale=pt_BR&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Facebook className="h-6 w-6" />
              <span>Facebook</span>
            </a>
          </Button>
          
          <Button 
            asChild
            className="bg-white text-colegio-azul hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://www.instagram.com/colegionovostempos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Instagram className="h-6 w-6" />
              <span>Instagram</span>
            </a>
          </Button>
          
          <Button 
            asChild
            className="bg-white text-colegio-azul hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://www.youtube.com/c/Col%C3%A9gioNovosTemposContagem" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Youtube className="h-6 w-6" />
              <span>YouTube</span>
            </a>
          </Button>

          <Button 
            asChild
            className="bg-white text-colegio-azul hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://x.com/novos_tempos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Twitter className="h-6 w-6" />
              <span>Twitter</span>
            </a>
          </Button>

          <Button 
            asChild
            className="bg-white text-colegio-azul hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://www.tiktok.com/@colegionovostempos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                <path d="M15 2v20"></path>
                <path d="M9 16v6"></path>
                <path d="M15 12h-6"></path>
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
