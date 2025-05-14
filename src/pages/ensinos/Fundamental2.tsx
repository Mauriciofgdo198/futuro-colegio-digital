
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";
import EduLevelBanner from "@/components/EduLevelBanner";

const Fundamental2 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <EduLevelBanner 
          title="ENSINO FUNDAMENTAL II"
          subtitle="(6º ao 9º ano)"
          description="No Ensino Fundamental II, aprofundamos os conteúdos das diversas áreas do conhecimento, preparando os alunos para os desafios do Ensino Médio. Desenvolvemos o pensamento científico, a expressão artística e o senso crítico por meio de aulas dinâmicas e projetos interdisciplinares. Incentivamos a autonomia nos estudos e o desenvolvimento de valores éticos e cidadãos."
        />
        
        <div className="container mx-auto px-4 py-8">
          {/* Additional content can be added here */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-colegio-azul mb-4">Sobre nosso Ensino Fundamental II</h2>
            <p className="text-gray-700 mb-4">
              No Ensino Fundamental II do Colégio Novos Tempos, preparamos os estudantes para os desafios 
              da adolescência e para a transição ao Ensino Médio. Nessa fase, os alunos desenvolvem maior 
              autonomia acadêmica enquanto lidam com conteúdos mais complexos e aprofundados.
            </p>
            <p className="text-gray-700">
              Nossa proposta pedagógica valoriza tanto a excelência acadêmica quanto o desenvolvimento 
              socioemocional, preparando os jovens para tomarem decisões responsáveis e construírem 
              relacionamentos saudáveis. Incentivamos a participação em projetos que estimulam o trabalho 
              em equipe, a liderança e o pensamento crítico.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScheduleVisitButton />
    </div>
  );
};

export default Fundamental2;
