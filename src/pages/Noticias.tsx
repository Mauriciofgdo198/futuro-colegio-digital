
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const Noticias = () => {
  // State to track which cards are expanded
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  // News data with descriptions
  const news: News[] = [
    {
      id: "feira-ciencias",
      title: "Feira de Ciências 2025",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nossa Feira de Ciências anual foi um sucesso absoluto! Os alunos do Ensino Fundamental e Médio apresentaram projetos inovadores que demonstraram criatividade, conhecimento científico e preocupação com questões ambientais. O evento contou com a participação de pais, professores e representantes da comunidade científica local. Os três melhores projetos receberão bolsas para participar da Olimpíada Brasileira de Ciências."
    },
    {
      id: "olimpiada-matematica",
      title: "Olimpíada de Matemática",
      imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nossos alunos conquistaram medalhas na Olimpíada Brasileira de Matemática das Escolas Públicas e Privadas (OBMEP). Foram 3 medalhas de ouro, 5 de prata e 8 de bronze, além de 15 menções honrosas. Este resultado excepcional reflete o alto nível de ensino matemático da nossa instituição e o talento dos nossos estudantes. Parabéns a todos os participantes e aos professores que os prepararam para esta competição nacional."
    },
    {
      id: "semana-literaria",
      title: "Semana Literária",
      imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A Semana Literária deste ano teve como tema 'Clássicos da Literatura Brasileira'. Os alunos participaram de oficinas de escrita criativa, dramatizações de obras famosas, palestras com escritores locais e um concurso de poesia. O evento culminou com uma noite de autógrafos, onde os estudantes lançaram uma coletânea de contos produzidos durante as oficinas. Foi uma semana rica em aprendizado, criatividade e celebração da nossa literatura."
    },
    {
      id: "jogos-escolares",
      title: "Jogos Escolares 2025",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Os Jogos Escolares de 2025 promoveram a integração, o espírito esportivo e a competição saudável entre os alunos. Foram duas semanas intensas de disputas em diversas modalidades: futebol, vôlei, basquete, atletismo, natação e xadrez. Nossa equipe de vôlei feminino e a de natação masculina se destacaram, conquistando o primeiro lugar geral. O encerramento contou com uma cerimônia especial de premiação e uma apresentação da nossa banda escolar."
    },
    {
      id: "intercambio-cultural",
      title: "Intercâmbio Cultural",
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Um grupo de 15 alunos do Ensino Médio participou do programa de intercâmbio cultural com uma escola parceira no Canadá. Durante três semanas, os estudantes vivenciaram o sistema educacional canadense, praticaram inglês em contexto real e conheceram pontos turísticos e culturais importantes. Esta experiência enriquecedora proporcionou não apenas o aprimoramento linguístico, mas também o desenvolvimento de competências interculturais essenciais no mundo globalizado."
    },
    {
      id: "projeto-sustentabilidade",
      title: "Projeto Sustentabilidade",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O Projeto Sustentabilidade, desenvolvido por alunos do 9º ano, implementou ações concretas para tornar nossa escola mais ecológica. Entre as iniciativas, destacam-se: instalação de coletores de água da chuva, criação de uma horta orgânica que abastece parcialmente nossa cantina, sistema de compostagem e campanha para redução do uso de plásticos descartáveis. O projeto recebeu reconhecimento da Secretaria Municipal de Meio Ambiente e será expandido no próximo ano letivo."
    },
    {
      id: "mostra-de-artes",
      title: "Mostra de Artes",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A Mostra de Artes anual exibiu os trabalhos desenvolvidos pelos alunos nas aulas de Artes Visuais, Música e Teatro. A exposição ficou aberta à comunidade por uma semana e encantou os visitantes com a qualidade e criatividade das obras. Destaque para a instalação coletiva criada pelos alunos do Ensino Médio, que abordou de forma sensível e profunda o tema da diversidade cultural brasileira. A noite de abertura contou ainda com apresentações musicais e teatrais dos nossos talentosos estudantes."
    },
    {
      id: "formatura-infantil",
      title: "Formatura Educação Infantil",
      imageUrl: "https://images.unsplash.com/photo-1494249465471-5655b7878482?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A cerimônia de formatura da Educação Infantil foi um momento emocionante para as crianças, familiares e educadores. Com o tema 'Um Mundo de Possibilidades', a celebração incluiu apresentações musicais, vídeo com momentos especiais do ano letivo e a tradicional entrega dos certificados. Cada criança plantou uma muda de árvore no jardim da escola como símbolo do crescimento e das novas etapas que virão. A festa de encerramento contou com decoração temática e muita alegria."
    },
    {
      id: "visita-pedagogica",
      title: "Visita Pedagógica ao Museu",
      imageUrl: "https://images.unsplash.com/photo-1617575407588-7e9912ea24a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Os alunos do 8º ano realizaram uma visita pedagógica ao Museu de Ciências Naturais como parte do projeto interdisciplinar de Ciências e História. Durante a visita, os estudantes participaram de oficinas sobre paleontologia e biodiversidade, além de explorarem o acervo permanente do museu. Esta atividade extraclasse proporcionou aprendizagem significativa, contextualizando os conteúdos trabalhados em sala de aula e despertando ainda mais o interesse dos alunos pela ciência."
    },
  ];

  // Function to toggle card expansion
  const toggleCardExpansion = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to truncate text to approximately 3 lines
  const truncateText = (text: string) => {
    const words = text.split(' ');
    const approximateWordsPerLine = 12; // Approximate number of words in 3 lines
    const truncateAt = approximateWordsPerLine * 3;
    
    if (words.length <= truncateAt) return text;
    
    return words.slice(0, truncateAt).join(' ') + '...';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-colegio-azul mb-10 text-center">Últimas Notícias</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </AspectRatio>
                </div>
                
                <CardContent className="p-5">
                  <CardTitle className="text-xl font-semibold text-colegio-azul mb-3">
                    {item.title}
                  </CardTitle>
                  
                  <div className="text-gray-700 text-sm">
                    {expandedCards[item.id] ? (
                      item.description
                    ) : (
                      truncateText(item.description)
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="px-5 pb-5 pt-0">
                  <Button
                    variant="outline"
                    onClick={() => toggleCardExpansion(item.id)}
                    className="w-full border border-colegio-azul/30 text-colegio-azul hover:bg-colegio-azul hover:text-white transition-colors"
                  >
                    {expandedCards[item.id] ? (
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

export default Noticias;
