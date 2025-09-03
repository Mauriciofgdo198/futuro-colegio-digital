
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
      id: "auditorio",
      title: "Auditório",
      imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O auditório do IENT, com capacidade para 190 pessoas, é um espaço moderno equipado com uma variedade de recursos multimídia. Possui uma tela para exibição de vídeos, apresentações de trabalhos, palestras e peças teatrais, garantindo uma excelente visualização de diferentes ângulos para o público. Esse ambiente é essencial para o funcionamento do instituto, recebendo reuniões internas, encontros com pais e diversas atividades escolares."
    },
    {
      id: "laboratorio-multidisciplinar",
      title: "Laboratório Multidisciplinar",
      imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O objetivo é oferecer aos alunos um espaço dedicado às atividades práticas em Ciências, Biologia, Química e Física, essencial para o desenvolvimento pedagógico. Esse espaço facilita a integração entre teoria e prática, enriquecendo as atividades realizadas em sala de aula. No laboratório, desenvolvemos atividades que estimulam a curiosidade e o interesse dos alunos por diversas áreas, incentivando-os a identificar problemas, levantar hipóteses, observar, descobrir, analisar resultados, concluir e solucionar experimentos. As atividades práticas comprovam nossos estudos teóricos e contribuem para o avanço biotecnológico, formando futuros cientistas. Observação: Todos os alunos são acompanhados por um professor gestor específico da área, garantindo cuidado e segurança."
    },
    {
      id: "loja-griffe-nt",
      title: "Loja Griffe NT",
      imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Em nossa loja, você encontrará toda a linha de uniformes oficiais do Colégio Novos Tempos. Disponibilizamos camisas, calças, shorts, bermudas, agasalhos e uniformes esportivos. Os tamanhos para Educação Infantil, Ensino Fundamental e Ensino Médio podem ser conferidos na Loja Griffe NT."
    },
    {
      id: "pensamento-computacional",
      title: "PENSAMENTO COMPUTACIONAL",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Em um ambiente especialmente projetado para o pensamento computacional, os alunos terão a oportunidade de aplicar tecnologias digitais como programação, robótica, eletrônica digital, internet das coisas, inteligência artificial e práticas Maker"
    },
    {
      id: "estudio-comunicacao",
      title: "ESTÚDIO DE COMUNICAÇÃO",
      imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Um espaço dedicado à comunicação e marketing. Nossos alunos têm a oportunidade de produzir conteúdos e explorar novas possibilidades nas diversas mídias digitais."
    },
    {
      id: "pracinha",
      title: "PRACINHA",
      imageUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Um espaço ao ar livre com uma área verde, preparado para receber nossos alunos em diversas atividades pedagógicas, bem como em momentos de encontro e oportunidades."
    },
    {
      id: "centro-infantil",
      title: "Centro Infantil",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Espaço destinado aos alunos da Ed. Infantil. composto por salas de aula, banheiros exclusivos, Espaço dos Sonhos e sala de psicomotricidade. Nesse espaço as crianças de 2 a 5 anos são recebidas diariamente com toda segurança e peculiaridades que a faixa-etária precisa. Além disso, no pátio do Centro Infantil frequentemente são desenvolvidas atividades lúdicas envolvendo alunos do Maternal, 1º e 2º períodos."
    },
    {
      id: "hall-conquistas",
      title: "Hall das Conquistas",
      imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O espaço é dedicado a exibir todos os troféus, medalhas, diplomas e certificados que homenageiam o instituto. As conquistas são exibidas em estantes e quadros com iluminação especial, acompanhados de uma placa identificando o local. Os títulos e participações lembrados no Hall das Conquistas celebram a história do colégio, com destaque nas áreas de esporte, educação e mundo empresarial."
    },
    {
      id: "acessibilidade",
      title: "Acessibilidade",
      imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O Colégio Novos Tempos está equipado com diversas adaptações para garantir o acesso de pessoas portadoras de necessidades especiais. Entre os dispositivos instalados, estão rampas, corrimãos, faixa tátil e elevador, todos voltados a melhor atender a comunidade escolar."
    },
    {
      id: "biblioteca",
      title: "Biblioteca",
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A Biblioteca Novos Tempos é um centro de recursos educativos, integrada ao processo de ensino-aprendizagem, com o objetivo de promover e desenvolver o hábito da leitura e o acesso à informação. Seu acervo é variado, incluindo livros didáticos, literatura e obras de referência, como enciclopédias, dicionários, almanaques, atlas, revistas, materiais audiovisuais, e outros recursos especiais. Estamos constantemente ampliando nosso acervo para manter as informações sempre atualizadas e enriquecidas. A Biblioteca está pronta para colaborar com a equipe docente no desenvolvimento de atividades pedagógicas, facilitando, integrando e dinamizando o processo de ensino e aprendizagem, formando cidadãos reflexivos, orientando alunos e professores na pesquisa escolar e incentivando o prazer pela leitura. O acervo da Biblioteca Novos Tempos está informatizado e dividido nas seguintes categorias: • Obras de Referência (enciclopédias, dicionários, atlas, almanaques) • Gibiteca • Biblioteca do Professor • Literatura infanto-juvenil • Literatura infantil • Cdteca • Videoteca • Periódicos (revistas). Oferecemos os seguintes serviços: • Empréstimos, devoluções, renovações e reservas automatizados • Referência (orientação individual ao usuário) • Catálogo automatizado • Acesso gratuito à Internet • Hora do Conto • Apoio à Pesquisa • Consulta local. Para garantir a boa organização e atendimento nos serviços prestados pela biblioteca, reforçamos algumas normas importantes que fazem parte de nossa rotina: O espaço da biblioteca é destinado, principalmente, ao estudo, pesquisa e leitura, não sendo permitido o uso para atividades como ensaios de teatro, jogos ou confecção de cartazes. Portanto, o uso de tesoura, cola, tinta e estilete não será permitido. Ao entrar, o usuário deve deixar objetos como som, celulares, mochilas e similares nos escaninhos da biblioteca, sendo de responsabilidade do aluno a guarda desse material. Ao sair, esses itens devem ser retirados. Desenvolvemos o projeto 'Hora do Conto' como parte de um programa de incentivo à leitura para a Educação Infantil e Ensino Fundamental I. Na videoteca, o usuário pode locar DVDs por um período de 10 (dez) dias e é responsável por eventuais perdas ou danos, devendo repor o material. Para atendimento de pesquisas escolares, solicitamos que o usuário agende um horário com o(a) bibliotecário(a) e traga uma autorização assinada de casa. O horário de funcionamento é de segunda a sexta-feira, das 07:00h às 12:00h e das 13:00h às 18:00h. Regulamento do serviço de empréstimos de livros: • Todos os usuários cadastrados como leitores, incluindo alunos, professores, pais e funcionários, têm direito a empréstimo domiciliar de livros. • Cada leitor pode retirar simultaneamente dois livros (literatura e pesquisa). • O prazo de empréstimo é de dez dias consecutivos, podendo ser renovado, desde que a obra não esteja reservada por outro leitor. • A renovação de empréstimos só será feita mediante a apresentação dos livros. • Em caso de atraso nas devoluções, o leitor perderá o direito a novos empréstimos por um período igual ao do atraso, a contar da data de devolução. • No caso de atraso de livros reservados, o período de suspensão será dobrado. • O leitor é diretamente responsável pelas obras que retirar da biblioteca. Em caso de perdas ou danos, deverá restituir outro exemplar da mesma obra. Se a obra estiver esgotada, a biblioteca indicará outro título de igual valor para substituição. • Obras de referência e revistas não serão emprestadas, mas podem ser consultadas na biblioteca. O empréstimo dessas obras para reprodução será permitido. • Não é permitido lanchar dentro da biblioteca. • Os casos omissos neste regulamento serão resolvidos pela coordenação pedagógica e/ou direção. O que a biblioteca espera de você: Em primeiro lugar, que utilize a biblioteca. Que respeite seu regulamento e seu acervo. Que ofereça sugestões para melhorar os serviços ou para corrigir eventuais falhas. Pensamentos: 'Mas não basta a existência de uma biblioteca, por mais bem organizada e equipada que esteja, para criar nas pessoas o gosto pela leitura. Ela deve se afirmar perante a comunidade com um serviço cuja utilização, além de fácil e agradável, se torne uma necessidade. Em outras palavras, a biblioteca só cumprirá bem suas funções se sua frequência se tornar tão comum quanto a ida ao mercado ou ao café.' (Joaquim Portilheiro)"
    },
    {
      id: "lanchonete",
      title: "Lanchonete",
      imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A NT Lanches é nosso espaço dedicado a lanches e refeições para a comunidade escolar. O local é amplo, arejado e totalmente preparado para oferecer uma alimentação de qualidade e saudável."
    },
    {
      id: "cozinha-pedagogica",
      title: "COZINHA PEDAGÓGICA",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A educação alimentar faz parte do nosso currículo, tanto dentro quanto fora da sala de aula. Na Cozinha Pedagógica, os alunos vivenciam momentos científicos com o objetivo de desenvolver cooperação, participação e interação. Através de atividades práticas, eles adquirem noções básicas de nutrição, higiene, cuidados com os alimentos e qualidade."
    },
    {
      id: "espaco-sonhos",
      title: "Espaço dos Sonhos",
      imageUrl: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O Espaço dos Sonhos é um ambiente ao ar livre que proporciona às crianças um contato direto com a grama, estimulando a brincadeira e a criatividade. Com atividades como a Paredarte, jogos como O Chão é Lava e Amarelinha, além de muitas outras, o espaço é perfeito para diversão e aprendizado ao ar livre."
    }
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
