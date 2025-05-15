
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAlbumById } from "@/services/galeriaService";

const AlbumPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const album = id ? getAlbumById(id) : undefined;
  
  if (!album) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-colegio-azul">Álbum não encontrado</h2>
            <Link to="/galerias" className="text-colegio-azul hover:underline mt-4 inline-block">
              Voltar para a galeria
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/galerias" className="text-colegio-azul hover:text-colegio-azul/80">
              <Button variant="ghost" size="sm" className="gap-1">
                <ChevronLeft size={18} />
                Voltar para a galeria
              </Button>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-colegio-azul text-center flex-grow pr-14">
              {album.titulo}
            </h1>
          </div>

          {/* Grade de fotos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {album.fotos.map((foto, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedImage(foto)}
                className="cursor-pointer hover-scale"
              >
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <AspectRatio ratio={1}>
                    <img 
                      src={foto} 
                      alt={`${album.titulo} - Foto ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox para visualização ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }} 
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              aria-label="Fechar"
            >
              <X size={28} />
            </button>
            <img 
              src={selectedImage} 
              alt="Visualização ampliada" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
      
      <Footer />
      <WhatsAppButton />
      <ScheduleVisitButton />
    </div>
  );
};

export default AlbumPage;
