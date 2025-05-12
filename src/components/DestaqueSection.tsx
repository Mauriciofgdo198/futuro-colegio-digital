
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const DestaqueSection = () => {
  const instagramRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Função para carregar o script do Instagram
    const loadInstagramWidget = () => {
      // Remover qualquer script anterior caso exista
      const existingScript = document.getElementById('instagram-embed-script');
      if (existingScript) {
        existingScript.remove();
      }

      // Criar novo script
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      
      // Adicionar o script ao documento
      document.body.appendChild(script);

      // Reprocessar widgets quando o script estiver carregado
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    };

    // Carregar o widget quando o componente montar
    loadInstagramWidget();

    // Configurar atualização periódica (a cada 30 minutos)
    const refreshInterval = setInterval(loadInstagramWidget, 30 * 60 * 1000);

    // Limpar o intervalo quando o componente desmontar
    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-colegio-azul mb-2">Instagram</h2>
            <p className="text-gray-600">Acompanhe nossas últimas publicações</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-colegio-azul text-colegio-azul hover:bg-colegio-azul hover:text-white rounded-full">
            <a 
              href="https://www.instagram.com/colegionovostempos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              Ver todas as publicações <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref={instagramRef}>
          {/* Widget do Instagram embebido */}
          <div className="instagram-post">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/colegionovostempos/p/recent/?utm_source=ig_embed&utm_campaign=loading" 
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '99.375%'
              }}
            >
            </blockquote>
          </div>
          <div className="instagram-post">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/recent/?utm_source=ig_embed&utm_campaign=loading" 
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '99.375%'
              }}
            >
            </blockquote>
          </div>
          <div className="instagram-post">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/colegionovostempos/p/recent/?utm_source=ig_embed&utm_campaign=loading" 
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '99.375%'
              }}
            >
            </blockquote>
          </div>
          <div className="instagram-post">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/colegionovostempos/p/recent/?utm_source=ig_embed&utm_campaign=loading" 
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '99.375%'
              }}
            >
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

// Adicionar a definição para o objeto instgrm no window
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default DestaqueSection;
