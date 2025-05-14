
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";
import EduLevelBanner from "@/components/EduLevelBanner";

const Medio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <EduLevelBanner 
          title="ENSINO MÉDIO"
          subtitle="(1ª à 3ª série)"
          description="O Ensino Médio é a etapa final da Educação Básica e prepara os jovens para os desafios do mundo universitário e profissional. Nossa proposta pedagógica oferece uma formação sólida nas diversas áreas do conhecimento, com foco especial na preparação para o ENEM e vestibulares. Valorizamos o protagonismo juvenil, a formação ética e a construção de um projeto de vida."
        />
        
        <div className="container mx-auto px-4 py-8">
          {/* Additional content can be added here */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-colegio-azul mb-4">Sobre nosso Ensino Médio</h2>
            <p className="text-gray-700 mb-4">
              No Ensino Médio do Colégio Novos Tempos, preparamos os estudantes para os desafios 
              do futuro acadêmico e profissional. Nossa proposta pedagógica combina uma formação 
              sólida nas diversas áreas do conhecimento com uma preparação eficiente para o ENEM 
              e os principais vestibulares do país.
            </p>
            <p className="text-gray-700">
              Além da excelência acadêmica, incentivamos o desenvolvimento de competências essenciais 
              para o século XXI, como o pensamento crítico, a criatividade, a colaboração e a comunicação. 
              Apoiamos nossos alunos na construção de seus projetos de vida e na tomada de decisões 
              conscientes sobre seu futuro.
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

export default Medio;
