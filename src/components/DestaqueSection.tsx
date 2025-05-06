
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type InstagramPost = {
  image: string;
  caption: string;
  link: string;
  timestamp: string;
};

const DestaqueSection = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([
    {
      image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Equipe de Robótica do Colégio Novos Tempos conquista primeiro lugar na competição regional! Parabéns aos nossos alunos pelo incrível trabalho.",
      link: "https://www.instagram.com/p/C8M6EYkuuUG/",
      timestamp: "2025-05-01"
    },
    {
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Nossos alunos da Educação Infantil aprendendo sobre sustentabilidade com o projeto Horta Escolar. Cultivando conhecimento e consciência ambiental desde cedo!",
      link: "https://www.instagram.com/p/C8H2xRGuqvL/",
      timestamp: "2025-04-28"
    },
    {
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Feira de ciências 2025! Nossos alunos apresentaram projetos incríveis sobre tecnologia e meio ambiente. A criatividade e o conhecimento impressionaram a todos os visitantes.",
      link: "https://www.instagram.com/p/C7_LKqcu2tX/",
      timestamp: "2025-04-23"
    }
  ]);

  return (
    <section className="py-16">
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
              Ver perfil completo <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={`Instagram post ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-colegio-amarelo/20 text-colegio-azul rounded-full px-3 py-1 text-sm font-medium mb-3">
                    @colegionovostempos
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.caption}
                  </p>
                  <div 
                    className="inline-flex items-center text-colegio-azul font-medium hover:text-colegio-azulClaro transition-colors"
                  >
                    Ver no Instagram <ArrowRight className="ml-1 h-4 w-4" />
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
