import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [currentUnit, setCurrentUnit] = useState<'betim' | 'contagem'>('contagem');

  // Determine which unit based on referrer or default to contagem
  useEffect(() => {
    const referrer = document.referrer;
    if (referrer.includes('/betim') || location.state?.from === 'betim') {
      setCurrentUnit('betim');
    } else {
      setCurrentUnit('contagem');
    }
  }, [location]);

  // Space data for Betim
  const betimSpaces: Space[] = [
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
      title: "Pensamento Computacional",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Em um ambiente especialmente projetado para o pensamento computacional, os alunos terão a oportunidade de aplicar tecnologias digitais como programação, robótica, eletrônica digital, internet das coisas, inteligência artificial e práticas Maker"
    },
    {
      id: "estudio-comunicacao",
      title: "Estúdio",
      imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Um espaço dedicado à comunicação e marketing. Nossos alunos têm a oportunidade de produzir conteúdos e explorar novas possibilidades nas diversas mídias digitais."
    },
    {
      id: "pracinha",
      title: "Pracinha",
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
      description: "A Biblioteca Novos Tempos é um centro de recursos educativos, integrada ao processo de ensino-aprendizagem, com o objetivo de promover e desenvolver o hábito da leitura e o acesso à informação. Seu acervo é variado, incluindo livros didáticos, literatura e obras de referência, como enciclopédias, dicionários, almanaques, atlas, revistas, materiais audiovisuais, e outros recursos especiais. Estamos constantemente ampliando nosso acervo para manter as informações sempre atualizadas e enriquecidas. A Biblioteca está pronta para colaborar com a equipe docente no desenvolvimento de atividades pedagógicas, facilitando, integrando e dinamizando o processo de ensino e aprendizagem, formando cidadãos reflexivos, orientando alunos e professores na pesquisa escolar e incentivando o prazer pela leitura."
    },
    {
      id: "lanchonete",
      title: "Lanchonete",
      imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A NT Lanches é nosso espaço dedicado a lanches e refeições para a comunidade escolar. O local é amplo, arejado e totalmente preparado para oferecer uma alimentação de qualidade e saudável."
    },
    {
      id: "cozinha-pedagogica",
      title: "Cozinha Pedagógica",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A educação alimentar faz parte do nosso currículo, tanto dentro quanto fora da sala de aula. Na Cozinha Pedagógica, os alunos vivenciam momentos científicos com o objetivo de desenvolver cooperação, participação e interação. Através de atividades práticas, eles adquirem noções básicas de nutrição, higiene, cuidados com os alimentos e qualidade."
    },
    {
      id: "espaco-sonhos",
      title: "Espaço dos Sonhos",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O Espaço dos Sonhos é um ambiente ao ar livre que proporciona às crianças um contato direto com a grama, estimulando a brincadeira e a criatividade. Com atividades como a Paredarte, jogos como O Chão é Lava e Amarelinha, além de muitas outras, o espaço é perfeito para diversão e aprendizado ao ar livre."
    }
  ];

  // Space data for Contagem (original content)
  const contagemSpaces: Space[] = [
    {
      id: "centro-esportivo",
      title: "Centro Esportivo",
      imageUrl: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Em 2006, considerado o \"Ano do Esporte\", o Instituto Novos Tempos iniciou a construção do Centro Esportivo Novos Tempos, localizado na Av.Prefeito Gil Diniz, nº 375, possuindo uma área de aproximadamente 5000 metros. Com a nova estrutura nossos alunos tem a oportunidade de estar em permanente contato com o que há de melhor em infraestrutura esportiva, são quadras poli esportivas, campo soçaite, lanchonete, vestiários dentre outros. Além da utilização para práticas esportivas, educação física, escola de esportes, equipes esportivas e eventos, toda a estrutura será disponibilizada para a comunidade através do aluguel das quadras e/ou para eventos em geral. Entre na onda do esporte e venha conhecer nossa estrutura. Aguardamos você!"
    },
    {
      id: "auditorio",
      title: "Auditório",
      imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Com capacidade para 190 pessoas, o IENT conta com um auditório moderno, com variados equipamentos multimídia, tela para exibição de vídeos e apresentações de trabalhos, palestras e peças teatrais, o que permite melhor visualização por parte do expectador de vários ângulos. Reuniões internas e de pais, além das mais variadas atividades escolares são recebidas nesse espaço que é fundamental para o funcionamento do instituto."
    },
    {
      id: "laboratorio-multidisciplinar",
      title: "Laboratório Multidisciplinar",
      imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Tem o objetivo de oferecer ao aluno um espaço destinado as atividades práticas de Ciências, Biologia, Química e Física é essencial para o desenvolvimento pedagógico, além de facilitar as atividades desenvolvidas em sala de aula possibilitando ao aluno aliar teoria e prática. No Laboratório contamos com materiais específicos como: • Vidrarias; • Microscópio com câmera acoplada para visualização em TV; • Modelos, fases gestacionais e outros; • Esqueleto; • DNA; • Peças formolizadas como fígado, rins , coração e pulmão de carneiro; • Animais coletados pelos alunos; • Cartazes e globos; • Substâncias químicas necessárias as aulas; • Equipamentos modernos com todos os recursos necessários para o aprendizado constante. Desenvolvemos no laboratório atividades que estimulam a curiosidade e o interesse do aluno por determinada área, levando-o a encontrar o problema, levantar hipóteses, observar, descobrir, analisar resultados, concluir e solucionar o experimento. A atividade prática é uma forma de comprovarmos nossos estudos teóricos, contribuindo com o mundo biotecnológico formando muitos e talvez grandes cientistas. Obs: Todos os alunos são acompanhados por professor (a) gestor (a) específico da área com cuidado e segurança."
    },
    {
      id: "cobertura-predio-a",
      title: "Cobertura Prédio A",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O espaço é utilizado para realização de atividades pedagógicas e eventos institucionais. A cobertura é um espaço aconchegante e amplo. Conta com estrutura de áudio e vídeo e recursos para realização de eventos."
    },
    {
      id: "loja-griffe-nt",
      title: "Loja Griffe NT",
      imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Em nossa loja você encontra toda linha de uniforme oficial do Colégio Novos Tempos. Camisas, calças, shorts, bermudas, agasalhos e uniformes esportivos. Os tamanhos para a Educação Infantil, Ensino Fundamental e Ensino Médio podem ser conferidos na Loja Griffe NT, no prédio A ao lado da reprografia."
    },
    {
      id: "pensamento-computacional",
      title: "Pensamento Computacional",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Por meio de um ambiente especialmente projetado para o pensamento computacional, os alunos aplicarão tecnologias digitais como programação, robótica, eletrônica digital, internet das coisas, inteligência artificial e práticas Maker"
    },
    {
      id: "estudio-comunicacao",
      title: "Estúdio",
      imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Um espaço de comunicação e Marketing. Nossos alunos tem a oportunidade de produzir conteúdos e criar novas possibilidades nas diversas mídias digitais."
    },
    {
      id: "pracinha",
      title: "Pracinha",
      imageUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Um espaço ao ar livre, com área verde, pronto para receber nossos alunos em diversas atividades pedagógicas e também em momentos de encontro e oportunidades."
    },
    {
      id: "centro-infantil",
      title: "Centro Infantil",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Espaço destinado aos alunos da Ed. Infantil. composto por salas de aula, banheiros exclusivos, playground e brinquedoteca . Nesse espaço as crianças de 2 a 5 anos são recebidas diariamente com toda segurança e peculiaridades que a faixa-etária precisa. Além disso, no pátio do Centro Infantil frequentemente são desenvolvidas atividades lúdicas envolvendo alunos do Maternal, 1º e 2º períodos."
    },
    {
      id: "hall-conquistas",
      title: "Hall das Conquistas",
      imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O espaço é um corredor com todos os troféus, medalhas, diplomas e certificados em menção honrosa ao instituto. As conquistas ficam em exposição em estantes e quadros com iluminação especial, além de uma placa que identifica o local. Os títulos e participações lembrados no Hall das Conquistas fazem referência à história do colégio, com destaque no esporte, educação e mundo empresarial."
    },
    {
      id: "acessibilidade",
      title: "Acessibilidade",
      imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "O Colégio Novos Tempos possui equipamentos e adaptações para acesso de pessoas portadoras de necessidades especiais. Rampas, corrimão, faixa tátil e elevador são alguns dos dispositivos que o Instituto tem instalado para melhor atender a comunidade escolar."
    },
    {
      id: "biblioteca-ziraldo",
      title: "Biblioteca do Ziraldo",
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Em 2018, o espaço recebeu o nome de Biblioteca Ziraldo? O cartunista e escritor Ziraldo, criador do personagem Menino Maluquinho, esteve no colégio, no dia 10 de maio de 2017 como premiação do concurso cultural Maratona de Leitura de Livros Infantis, no qual estudantes do Instituto venceram a competição e proporcionaram a presença do cartunista em Contagem, pela primeira vez. Na oportunidade a direção do Novos Tempos fez a homenagem ao rebatizar sua biblioteca como Biblioteca Ziraldo. O artista participou da cerimônia de inauguração do espaço, além de eternizar seu talento nas paredes da biblioteca. Em sua passagem pela escola, Ziraldo compartilhou com os presentes a seguinte reflexão: \"Fica um recado para vocês, ler é mais importante do que estudar\", disse o chargista. A Biblioteca Ziraldo é um centro de recursos educativos, integrada ao processo de ensino - aprendizagem com o objetivo de desenvolver e fomentar a leitura e a informação. Possui um acervo variado com riqueza de livros didáticos, literatura e obras de referência como: enciclopédias, dicionários, almanaques, atlas, revistas, mapoteca, videoteca, cdteca, hemeroteca, gibiteca e outros materiais especiais. Estamos constantemente fazendo novas aquisições a fim de que as informações estejam sempre atualizadas e enriquecidas. A Biblioteca está preparada para interagir com a Equipe Docente no desenvolvimento de atividades pedagógicas, facilita, integra e dinamiza o processo de Ensino e Aprendizagem, formando cidadãos reflexivos, orientando alunos e professores à Pesquisa Escolar e desenvolvendo o prazer pela leitura. A Bibliotecas Novos Tempos está com seu acervo informatizado e dividido respectivamente em: • Obras de Referência (enciclopédias, dicionários, atlas, almanaques). • Gibiteca. • Biblioteca do Professor. • Literatura infanto-juvenil. • Literatura infantil. • Cdteca. • Videoteca. • Periódicos (revistas). OFERECEMOS OS SEGUINTES SERVIÇOS: • Empréstimos, devoluções, renovações e reservas automatizados. • Referência (orientação individual ao usuário). • Catálogo automatizado. • Acesso gratuito a Internet. • Hora do Conto. • Apoio à Pesquisa. • Consulta local. Para assegurar uma boa organização e bom atendimento nos serviços prestados pela biblioteca, estamos retomando algumas informações importantes que fazem parte da rotina de nosso trabalho: • O espaço da biblioteca destina-se, sobretudo, ao estudo, à pesquisa e à leitura, e não a outras atividades como: ensaio de teatro, jogos e confecção de cartazes. Portando não será permitido o uso de tesoura, cola, tinta e estilete. • Ao entrar, o usuário deverá deixar objetos, tais como: som, celulares, mochilas e similares, nos escaninhos da Biblioteca, sendo de inteira responsabilidade do aluno a guarda deste material. E ao sair, por qualquer motivo, deverá retirá-lo. • Desenvolvemos o projeto \" Hora do Conto\" como parte de um programa de incentivo à leitura para Educação Infantil e Ensino Fundamental I. • Em nossa videoteca o usuário poderá locar dvd's por um período de 10 (dez) dias e se responsabilizará em caso de perdas e danos, repondo o mesmo material à biblioteca. • Para o atendimento de pesquisas escolares, pedimos ao usuário que marque um horário com a Bibliotecário(a) e traga de casa uma autorização assinada. O horário de funcionamento é de segunda a sexta-feira de 07:00h às 12:00 e 13:00 às 18:00h Regulamento do serviço de empréstimos de livros: • Têm direito a empréstimo domiciliar de livros todos os usuários cadastrados como leitores; a saber: alunos, professores, pais e funcionários do IENT. • Poderão ser emprestados para cada leitor dois livros simultaneamente (literatura e pesquisa). • O prazo de empréstimo é de dez dias consecutivos, podendo ser renovado, caso a obra não esteja reservada por outro leitor. • A renovação de empréstimos só será feita mediante apresentação dos livros. • Em caso de atraso nas devoluções, o leitor perderá o direito a novos empréstimos, num período igual ao do atraso, a contar da data de devolução. • E em atraso de livros que estão reservados, o período de suspensão mencionado acima será dobrado. • O leitor é diretamente responsável pelas obras que retirar da biblioteca. Em caso de perdas e danos, deverá restituir outro exemplar da mesma obra. E, se tratar de obra esgotada, a biblioteca indicará outro título de igual valor para substituição. • Não serão emprestadas obras de referência e revistas, podendo apenas serem consultadas no recinto da biblioteca. Será permitido o empréstimo dessas obras para reprografia. • Não é permitido lanchar no recinto da biblioteca. Os casos omissos neste regulamento serão resolvidos pela coordenação pedagógica e/ ou direção. O QUE A BIBLIOTECA ESPERA DE VOCÊ: Em primeiro lugar, que a use. Que respeite seu regulamento e seu acervo. Que ofereça sugestões para melhorar os serviços ou para corrigir as falhas existentes. Pensamentos: \"Mas não basta a existência de uma biblioteca por muito bem que ela esteja organizada e apetrechada, para criar junto das populações gosto pela leitura. Ela deverá afirmar-se perante todos os elementos da comunidade com um serviço cuja utilização, para além de fácil e agradável, surja como uma necessidade. Por outras palavras, a biblioteca só estará a cumprir bem suas funções, se a sua freqüência se tornar tão banal como a ida a mercearia ou ao café.\" (Joaquim Portilheiro)"
    },
    {
      id: "lanchonete",
      title: "Lanchonete",
      imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A NT Lanches é nosso espaço para lanches e refeições da nossa comunidade escolar. Um local amplo, arejado e todo preparado para oferecer uma alimentação de qualidade e saudável."
    },
    {
      id: "cozinha-pedagogica",
      title: "Cozinha Pedagógica",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Educação alimentar faz parte do nosso currículo, dentro e fora da sala de aula. Na Cozinha Pedagógica, pode-se vivenciar momentos científicos, tendo como objetivo desenvolver a cooperação, a participação e a interação entre os alunos. Por meio de atividades, desenvolvem-se noções básicas de nutrição, higiene, cuidados com os alimentos e qualidade."
    },
    {
      id: "playground",
      title: "Playground",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Nosso playground é uma área de recreação exclusiva para que as crianças possam se divertir e desenvolver seus conhecimentos com segurança. Nessa área de lazer exclusiva é oferecida ótimas oportunidades para os pequenos se divertirem."
    }
  ];

  // Get the appropriate spaces based on current unit
  const spaces = currentUnit === 'betim' ? betimSpaces : contagemSpaces;

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