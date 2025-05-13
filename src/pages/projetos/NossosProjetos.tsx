
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const NossosProjetos = () => {
  // State to track which cards are expanded
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  // Sample project data
  const projects: Project[] = [
    {
      id: "equipes-esportivas",
      title: "Equipes Esportivas",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nosso programa de equipes esportivas visa desenvolver habilidades físicas, trabalho em equipe e disciplina. Os estudantes participam de diversas modalidades como futebol, vôlei, basquete e natação. Treinamentos regulares são conduzidos por profissionais qualificados que ensinam não apenas técnicas esportivas, mas valores essenciais como respeito, cooperação e persistência. Os alunos também participam de campeonatos interescolares e eventos esportivos regionais, representando nossa instituição. Acreditamos que o esporte é uma ferramenta poderosa para o desenvolvimento integral, contribuindo para a saúde física e mental, além de formar cidadãos mais preparados para os desafios da vida."
    },
    {
      id: "programa-novo-mundo",
      title: "Programa Novo Mundo",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O Programa Novo Mundo é uma iniciativa que conecta nossos alunos com diferentes culturas e realidades globais. Através de intercâmbios, projetos colaborativos internacionais e aprendizado de línguas estrangeiras, buscamos desenvolver cidadãos globais conscientes e preparados. Os participantes têm a oportunidade de realizar viagens educativas, participar de conferências virtuais com estudantes de outros países e desenvolver projetos de impacto global. Este programa estimula a empatia, o respeito à diversidade e amplia horizontes, preparando nossos alunos para um mundo cada vez mais interconectado. Desenvolvemos parcerias com escolas de diversos países para enriquecer esta experiência multicultural."
    },
    {
      id: "extracurricular",
      title: "Extracurricular",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nossas atividades extracurriculares complementam o aprendizado formal com experiências enriquecedoras em diversas áreas. Oferecemos clubes de ciências, robótica, literatura, artes visuais, debate e muito mais. Cada atividade é projetada para estimular talentos, desenvolver novas habilidades e incentivar a exploração de interesses diversos. Os alunos podem escolher entre várias opções que acontecem no contraturno escolar, permitindo aprofundar conhecimentos em áreas de interesse pessoal. Estas atividades não apenas enriquecem o currículo, mas também promovem socialização, autonomia e desenvolvimento de habilidades socioemocionais essenciais para a formação integral dos estudantes."
    },
    {
      id: "sops",
      title: "SOPS",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O Serviço de Orientação Pedagógica e Social (SOPS) oferece suporte personalizado para o desenvolvimento acadêmico e socioemocional dos nossos alunos. Uma equipe multidisciplinar composta por psicólogos, pedagogos e assistentes sociais trabalha de forma integrada para identificar necessidades específicas e proporcionar o acompanhamento adequado. O SOPS desenvolve programas de orientação vocacional, suporte à aprendizagem, mediação de conflitos e promoção do bem-estar estudantil. Este serviço também mantém comunicação próxima com as famílias, estabelecendo parcerias essenciais para o sucesso educacional. Acreditamos que cada estudante é único, e nosso objetivo é proporcionar um ambiente onde todos possam desenvolver seu potencial máximo."
    },
    {
      id: "musica-danca-teatro",
      title: "Música, Dança e Teatro",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nosso programa de artes cênicas e musicais proporciona aos estudantes a oportunidade de explorar sua expressão artística através da música, dança e teatro. Com infraestrutura dedicada e profissionais especializados, oferecemos aulas regulares e montagens de espetáculos que são apresentados à comunidade escolar. Os alunos aprendem técnicas específicas de cada modalidade artística, desenvolveM habilidades de expressão, confiança e trabalho colaborativo. Anualmente, realizamos um festival de artes que celebra as produções desenvolvidas ao longo do ano letivo. Acreditamos no poder transformador das artes para o desenvolvimento da criatividade, sensibilidade estética e autoexpressão dos nossos estudantes."
    },
  ];

  // Function to toggle card expansion
  const toggleCardExpansion = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to truncate text
  const truncateText = (text: string, lineCount: number = 5) => {
    const words = text.split(' ');
    const approximateWordsPerLine = 10; // This is just an approximation
    const truncateAt = lineCount * approximateWordsPerLine;
    
    if (words.length <= truncateAt) return text;
    
    return words.slice(0, truncateAt).join(' ') + '...';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-colegio-azul mb-10 text-center">Nossos Projetos</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold text-colegio-azul mb-3">
                    {project.title}
                  </CardTitle>
                  
                  <div className="text-gray-700">
                    {expandedCards[project.id] ? (
                      project.description
                    ) : (
                      truncateText(project.description)
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button
                    variant="outline"
                    onClick={() => toggleCardExpansion(project.id)}
                    className="w-full border-colegio-azul text-colegio-azul hover:bg-colegio-azul hover:text-white transition-colors"
                  >
                    {expandedCards[project.id] ? (
                      <>
                        <span>Ver menos</span>
                        <ChevronUp className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        <span>Ver mais</span>
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NossosProjetos;
