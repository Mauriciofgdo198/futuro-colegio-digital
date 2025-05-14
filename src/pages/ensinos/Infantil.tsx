
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";
import EduLevelBanner from "@/components/EduLevelBanner";

const Infantil = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <EduLevelBanner 
          title="EDUCAÇÃO INFANTIL"
          subtitle="(Maternal II - Maternal III - 1º Período - 2º Período)"
          description="A Educação Infantil é o início da jornada escolar. Aqui, desenvolvemos a socialização, a criatividade, a linguagem e a autonomia da criança por meio de atividades lúdicas e pedagógicas. Cuidar, respeitar e educar são os pilares que norteiam nossa prática diária."
        />
        
        <div className="container mx-auto px-4 py-8">
          {/* Additional content can be added here */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-colegio-azul mb-4">Sobre nossa Educação Infantil</h2>
            <p className="text-gray-700 mb-4">
              Na Educação Infantil do Colégio Novos Tempos, construímos um ambiente acolhedor 
              e estimulante para que as crianças desenvolvam suas habilidades sociais, emocionais 
              e cognitivas. Nossa metodologia valoriza a brincadeira, a experimentação e a descoberta 
              como formas privilegiadas de aprendizagem.
            </p>
            <p className="text-gray-700">
              Contamos com uma equipe de profissionais especializados e uma infraestrutura planejada 
              para atender às necessidades específicas desta faixa etária, garantindo segurança, conforto 
              e estímulos adequados para o desenvolvimento integral das crianças.
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

export default Infantil;
