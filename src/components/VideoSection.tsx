import { Play, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-colegio-azul">
          Proposta Pedagógica
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Video Container */}
          <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-xl cursor-pointer" onClick={() => setIsVideoOpen(true)}>
            {!isVideoOpen ? <>
                {/* Using actual YouTube thumbnail */}
                <img src="https://img.youtube.com/vi/fJ83sXLEDKU/maxresdefault.jpg" alt="Vídeo sobre proposta pedagógica" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-colegio-azul bg-opacity-40 flex items-center justify-center">
                  <Button className="w-16 h-16 rounded-full bg-colegio-amarelo hover:bg-colegio-amareloClaro text-colegio-azul flex items-center justify-center group transition-all duration-300">
                    <Play className="h-8 w-8 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-colegio-azul bg-opacity-80 py-4 px-5 text-white">
                  <div className="flex items-center gap-2">
                    <Youtube className="h-5 w-5 text-red-500" />
                    <p className="font-medium">Matrículas Abertas 2025 - Inspirar Novos Tempos</p>
                  </div>
                  
                  <div className="mt-2 text-sm">
                    <p>NOVA UNIDADE BETIM - RUA DO ACRE, 536 -SRª DAS GRAÇAS</p>
                    <p>CONTAGEM - AV. PREFEITO GIL DINIZ, 581 - CENTRO</p>
                  </div>
                </div>
              </> : <iframe src="https://www.youtube.com/embed/fJ83sXLEDKU?autoplay=1" title="Proposta Pedagógica" className="absolute top-0 left-0 w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
          </div>
          
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-colegio-azul">Inspirar Novos Tempos</h3>
            <p className="text-xl font-medium text-gray-700">
              Educação com um propósito maior.
            </p>
            <p className="text-gray-600">
              No Colégio Novos Tempos, acreditamos que a educação vai além do conteúdo acadêmico. 
              Nossa proposta pedagógica é fundamentada em valores que inspiram nossos alunos a 
              serem protagonistas de sua jornada de aprendizagem e cidadãos conscientes de seu 
              papel na sociedade.
            </p>
            <p className="text-gray-600">
              Combinamos tradição e inovação em nossos métodos de ensino, preparando os estudantes 
              para os desafios do futuro com uma formação sólida e abrangente.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default VideoSection;