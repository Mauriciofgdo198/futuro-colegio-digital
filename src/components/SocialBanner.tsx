
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

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
            <a href="https://www.facebook.com/institutonovostempos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Facebook className="h-6 w-6" />
              <span>Facebook</span>
            </a>
          </Button>
          
          <Button 
            asChild
            className="bg-white text-colegio-azul hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://www.instagram.com/institutonovostempos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Instagram className="h-6 w-6" />
              <span>Instagram</span>
            </a>
          </Button>
          
          <Button 
            asChild
            className="bg-white text-colegio-azul hover:bg-gray-100 rounded-full text-lg font-bold px-8 py-6"
          >
            <a href="https://www.youtube.com/channel/UCvGkf5S0UQu-5F92AYYnlpg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Youtube className="h-6 w-6" />
              <span>YouTube</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialBanner;
