
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Space {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const Estrutura = () => {
  // State to track which cards are expanded
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  // Space data with descriptions
  const spaces: Space[] = [
    {
      id: "centro-esportivo",
      title: "Centro Esportivo",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nosso Centro Esportivo é um complexo moderno, projetado para proporcionar as melhores condições para a prática de diversas modalidades esportivas. Contamos com quadras poliesportivas cobertas, campo de futebol com grama sintética, piscina semiolímpica aquecida e academia equipada com aparelhos de última geração. Os espaços são utilizados tanto para as aulas regulares de educação física quanto para atividades extracurriculares e treinamentos das equipes esportivas da escola."
    },
    {
      id: "auditorio",
      title: "Auditório",
      imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nosso auditório comporta até 300 pessoas e está equipado com sistema de som e iluminação profissionais, projetor de alta definição e palco amplo para apresentações. Este espaço multifuncional recebe desde palestras e conferências até espetáculos artísticos produzidos pelos nossos alunos, formando um ambiente propício para o desenvolvimento cultural e científico da nossa comunidade escolar."
    },
    {
      id: "laboratorio-multidisciplinar",
      title: "Laboratório Multidisciplinar",
      imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O Laboratório Multidisciplinar foi projetado para integrar as áreas de ciências, física, química e biologia em um único espaço colaborativo. Equipado com bancadas modernas, microscópios de alta resolução, equipamentos para experimentos físicos e químicos, permite abordagens práticas e experimentais no ensino das ciências. Os estudantes desenvolvem projetos científicos sob a orientação de professores especialistas."
    },
    {
      id: "cobertura-predio-a",
      title: "Cobertura Prédio A",
      imageUrl: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A cobertura do Prédio A é um espaço multiuso com vista panorâmica para a cidade. Utilizada para atividades ao ar livre, aulas diferenciadas e eventos especiais, o ambiente conta com cobertura parcial para proteção solar, mobiliário versátil e jardim vertical. Este espaço proporciona um ambiente inspirador para aprendizagem e interação social, sendo muito valorizado pela comunidade escolar."
    },
    {
      id: "loja-griffe-nt",
      title: "Loja Griffe NT",
      imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A Loja Griffe NT oferece toda a linha de uniformes escolares, materiais didáticos personalizados e produtos com a identidade visual da nossa instituição. Localizada em área de fácil acesso dentro do campus, possibilita à comunidade escolar adquirir itens de qualidade que reforçam o sentimento de pertencimento à nossa escola. Além dos uniformes regulares, oferece peças especiais para eventos e coleções sazonais."
    },
    {
      id: "pensamento-computacional",
      title: "Pensamento Computacional",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O laboratório de Pensamento Computacional é um espaço inovador equipado com computadores de última geração, kits de robótica educacional e impressoras 3D. Neste ambiente, os alunos desenvolvem habilidades de programação, lógica computacional e resolução de problemas através de projetos práticos. As aulas são conduzidas por professores especializados que integram a tecnologia ao currículo escolar regular."
    },
    {
      id: "estudio-comunicacao",
      title: "Estúdio de Comunicação",
      imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nosso Estúdio de Comunicação é equipado com tecnologia profissional para produção audiovisual, incluindo câmeras de alta definição, iluminação, microfones e equipamentos de edição. Este espaço permite que os alunos desenvolvam projetos de jornalismo escolar, documentários, podcasts e conteúdo para mídias sociais. O estúdio também é utilizado para aulas de comunicação e expressão, preparando os estudantes para os desafios da era digital."
    },
    {
      id: "pracinha",
      title: "Pracinha",
      imageUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A Pracinha é um espaço recreativo especialmente projetado para os momentos de intervalo e socialização. Com bancos confortáveis, áreas verdes e espaços para jogos de mesa, proporciona um ambiente relaxante onde os alunos podem interagir, descansar e recarregar energias entre as aulas. O local também conta com conectividade Wi-Fi e é frequentemente utilizado para atividades ao ar livre e pequenos eventos culturais."
    },
    {
      id: "centro-infantil",
      title: "Centro Infantil",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O Centro Infantil é um espaço especialmente projetado para atender às necessidades educacionais e recreativas dos nossos alunos da Educação Infantil. Com ambientes coloridos, seguros e estimulantes, conta com salas temáticas, brinquedoteca, mini-biblioteca e áreas de psicomotricidade. Os mobiliários e equipamentos são adequados ao tamanho e necessidades das crianças, criando um ambiente acolhedor que favorece o desenvolvimento integral."
    },
    {
      id: "hall-conquistas",
      title: "Hall das Conquistas",
      imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O Hall das Conquistas é um espaço dedicado a celebrar as realizações da nossa comunidade escolar. Troféus, medalhas, certificados e reconhecimentos obtidos pelos alunos e pela instituição em competições acadêmicas, culturais e esportivas estão expostos em vitrines elegantes. Este ambiente inspira os estudantes a buscarem a excelência e reforça os valores de dedicação e perseverança que cultivamos em nossa escola."
    },
    {
      id: "acessibilidade",
      title: "Acessibilidade",
      imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nosso compromisso com a inclusão se reflete na infraestrutura acessível que implementamos em todo o campus. Contamos com rampas de acesso, elevadores, banheiros adaptados, sinalização tátil e visual, além de tecnologias assistivas nas salas de aula. A equipe pedagógica é treinada para atender às necessidades educacionais específicas, garantindo que todos os alunos tenham oportunidades iguais de aprendizagem em um ambiente verdadeiramente inclusivo."
    },
    {
      id: "biblioteca-ziraldo",
      title: "Biblioteca Ziraldo",
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A Biblioteca Ziraldo é um espaço acolhedor que abriga um acervo diversificado com mais de 10.000 títulos, incluindo literatura nacional e internacional, obras de referência, periódicos e recursos digitais. Com ambientes para estudo individual e em grupo, computadores para pesquisa e área de leitura confortável, a biblioteca é um centro ativo de aprendizagem e exploração literária. Promovemos regularmente eventos de incentivo à leitura, contação de histórias e encontros com autores."
    },
    {
      id: "lanchonete",
      title: "Lanchonete",
      imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nossa lanchonete oferece um cardápio variado e nutritivo, preparado sob a supervisão de nutricionistas qualificados. O espaço é amplo, bem ventilado e organizado para atender confortavelmente aos alunos nos horários de intervalo. Priorizamos alimentos frescos e opções balanceadas, incluindo alternativas para estudantes com restrições alimentares específicas. O ambiente também funciona como ponto de socialização e integração da comunidade escolar."
    },
    {
      id: "cozinha-pedagogica",
      title: "Cozinha Pedagógica",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A Cozinha Pedagógica é um espaço educativo equipado com bancadas, utensílios, fornos e cooktops onde os alunos aprendem sobre nutrição, técnicas culinárias e cultura alimentar. Utilizada para projetos interdisciplinares que conectam ciências, matemática, história e geografia através da gastronomia, este ambiente proporciona experiências práticas e sensoriais que enriquecem o aprendizado. As aulas são conduzidas por professores e profissionais convidados da área gastronômica."
    },
    {
      id: "playground",
      title: "Playground",
      imageUrl: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nosso playground foi projetado para proporcionar diversão segura e estimulante para as crianças. Equipado com brinquedos modernos e certificados, o espaço conta com piso emborrachado anti-impacto, áreas sombreadas e monitoramento constante por educadores treinados. Os equipamentos incluem escorregadores, balanços, casinhas, circuitos de psicomotricidade e outros elementos que incentivam o desenvolvimento físico, social e cognitivo através da brincadeira."
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
          <h1 className="text-4xl font-bold text-colegio-azul mb-10 text-center">Conheça nossa estrutura</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaces.map((space) => (
              <Card 
                key={space.id} 
                className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img
                      src={space.imageUrl}
                      alt={space.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </AspectRatio>
                </div>
                
                <CardContent className="p-5">
                  <CardTitle className="text-xl font-semibold text-colegio-azul mb-3">
                    {space.title}
                  </CardTitle>
                  
                  <div className="text-gray-700 text-sm">
                    {expandedCards[space.id] ? (
                      space.description
                    ) : (
                      truncateText(space.description)
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="px-5 pb-5 pt-0">
                  <Button
                    variant="outline"
                    onClick={() => toggleCardExpansion(space.id)}
                    className="w-full border border-colegio-azul/30 text-colegio-azul hover:bg-colegio-azul hover:text-white transition-colors"
                  >
                    {expandedCards[space.id] ? (
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

export default Estrutura;
