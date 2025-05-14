
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";
import EduLevelBanner from "@/components/EduLevelBanner";

const Fundamental1 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <EduLevelBanner 
          title="ENSINO FUNDAMENTAL I"
          subtitle="(1º ao 5º ano)"
          description="No Ensino Fundamental I, consolidamos as habilidades de leitura, escrita e raciocínio lógico-matemático. Estimulamos a curiosidade e o pensamento crítico por meio de projetos interdisciplinares e atividades práticas. Nosso objetivo é formar alunos autônomos, capazes de compreender o mundo ao seu redor e expressar seus pensamentos e sentimentos."
        />
        
        <div className="container mx-auto px-4 py-8">
          {/* Additional content can be added here */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-colegio-azul mb-4">Sobre nosso Ensino Fundamental I</h2>
            <p className="text-gray-700 mb-4">
              No Ensino Fundamental I do Colégio Novos Tempos, proporcionamos um ambiente de aprendizagem 
              que estimula a curiosidade natural das crianças e as incentiva a explorar o mundo ao seu redor. 
              Nossa proposta pedagógica equilibra conteúdos acadêmicos fundamentais com o desenvolvimento 
              de habilidades socioemocionais essenciais.
            </p>
            <p className="text-gray-700">
              Trabalhamos com metodologias ativas de ensino, valorizando o protagonismo do aluno e 
              a construção colaborativa do conhecimento. Nossos educadores atuam como mediadores, 
              orientando os estudantes em seu processo de aprendizagem e auxiliando-os a desenvolver 
              sua autonomia e responsabilidade.
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

export default Fundamental1;
