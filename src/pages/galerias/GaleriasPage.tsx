
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getAlbuns } from "@/services/galeriaService";

const GaleriasPage = () => {
  const albuns = getAlbuns();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-colegio-azul text-center mb-8">
            IENT
          </h1>
          <p className="text-center text-gray-700 mb-10">
            Confira abaixo os registros dos Eventos desta Galeria.
          </p>

          {/* Grade de álbuns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {albuns.map((album) => (
              <Link 
                to={`/galerias/${album.id}`} 
                key={album.id}
                className="hover-scale"
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={album.capa} 
                        alt={album.titulo} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                  <CardContent className="pt-4 pb-4 bg-colegio-azul">
                    <h3 className="text-lg font-bold text-white text-center">{album.titulo}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScheduleVisitButton />
    </div>
  );
};

export default GaleriasPage;
