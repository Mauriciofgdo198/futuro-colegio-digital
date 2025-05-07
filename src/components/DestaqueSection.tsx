
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-colegio-azul mb-2">Instagram</h2>
            <p className="text-gray-600">Acompanhe nossos últimos reels</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-colegio-azul text-colegio-azul hover:bg-colegio-azul hover:text-white rounded-full">
            <a 
              href="https://www.instagram.com/colegionovostempos/reels/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              Ver todos os reels <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={`Instagram Reel ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-bold">@{post.username}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">Reels</span>
                    <span className="text-xs text-gray-500">{post.timestamp}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {post.caption}
                  </p>
                  <div className="inline-flex items-center text-sm text-colegio-azul font-medium hover:text-colegio-azulClaro transition-colors">
                    Ver no Instagram <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestaqueSection;
