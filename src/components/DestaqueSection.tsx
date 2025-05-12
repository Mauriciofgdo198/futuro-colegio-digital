
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

type InstagramPost = {
  image: string;
  username: string;
  caption: string;
  link: string;
  timestamp: string;
};

const DestaqueSection = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([
    {
      image: "https://images.unsplash.com/photo-1609924211018-5526c55bad5b?q=80&w=1374&auto=format&fit=crop",
      username: "colegionovostempos",
      caption: "Nossos alunos do 5º ano apresentando seus projetos de ciências na feira anual! Estamos orgulhosos do trabalho e dedicação de cada um. #EducaçãoDeQualidade #FeiraDeCiências",
      link: "https://www.instagram.com/p/reel-1/",
      timestamp: "1 dia atrás"
    },
    {
      image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1470&auto=format&fit=crop",
      username: "colegionovostempos",
      caption: "Hoje foi dia de atividade especial com nossa turma do Ensino Fundamental! Aprendendo matemática de forma divertida e interativa. #EducaçãoCriativa #MatematicaÉDiversao",
      link: "https://www.instagram.com/p/reel-2/",
      timestamp: "3 dias atrás"
    },
    {
      image: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?q=80&w=1372&auto=format&fit=crop",
      username: "colegionovostempos",
      caption: "Celebrando a semana da literatura brasileira com apresentações incríveis dos nossos alunos do Ensino Médio! #LiteraturaBrasileira #EducaçãoQueTransforma",
      link: "https://www.instagram.com/p/reel-3/",
      timestamp: "5 dias atrás"
    },
    {
      image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1374&auto=format&fit=crop",
      username: "colegionovostempos",
      caption: "Compartilhando momentos da nossa olimpíada de conhecimento realizada na última semana. Parabenizamos todos os participantes pelo empenho e dedicação! #OlimpíadaDeConhecimento #Educação",
      link: "https://www.instagram.com/p/reel-4/",
      timestamp: "1 semana atrás"
    }
  ]);

  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-2">
              Confira nossos últimos momentos no <em className="font-serif italic not-italic">Instagram</em>
            </h2>
            <div className="h-1 w-16 bg-colegio-azul mb-2"></div>
          </div>
          
          <div className="hidden md:flex items-center text-pink-600">
            <a 
              href="https://www.instagram.com/colegionovostempos/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium"
            >
              @colegionovostempos
            </a>
          </div>
        </div>
        
        <div className="relative">
          {/* Versão desktop: grid 2x2 */}
          <div className="hidden md:grid grid-cols-4 gap-5">
            {posts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2 group-hover:text-colegio-azul transition-colors">
                    {post.caption.substring(0, 120)}
                    {post.caption.length > 120 ? '...' : ''}
                  </p>
                </div>
              </a>
            ))}
          </div>
          
          {/* Versão mobile: carrossel */}
          <div className="md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {posts.map((post, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all h-full"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={post.image}
                          alt={`Instagram post ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2 group-hover:text-colegio-azul transition-colors">
                          {post.caption.substring(0, 120)}
                          {post.caption.length > 120 ? '...' : ''}
                        </p>
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="rounded-full border-colegio-azul text-colegio-azul hover:bg-colegio-azul hover:text-white">
              <a 
                href="https://www.instagram.com/colegionovostempos/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6"
              >
                Veja mais no Instagram <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestaqueSection;
