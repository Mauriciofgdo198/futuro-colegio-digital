
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";
import EduLevelBanner from "@/components/EduLevelBanner";

const Integral = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <EduLevelBanner 
          title="HORÁRIO INTEGRAL"
          subtitle="(Educação Infantil e Ensino Fundamental)"
          description="O programa de Horário Integral é uma extensão da jornada escolar que oferece atividades complementares ao currículo regular. Aqui, os alunos realizam as tarefas escolares com acompanhamento especializado, participam de oficinas artísticas e esportivas, além de momentos de lazer supervisionados. Nosso objetivo é proporcionar um ambiente seguro e enriquecedor para crianças cujas famílias necessitam de uma jornada escolar ampliada."
        />
        
        <div className="container mx-auto px-4 py-8">
          {/* Additional content can be added here */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-colegio-azul mb-4">Sobre nosso Horário Integral</h2>
            <p className="text-gray-700 mb-4">
              O programa de Horário Integral do Colégio Novos Tempos foi desenvolvido para atender às 
              necessidades das famílias contemporâneas, oferecendo uma extensão da jornada escolar com 
              qualidade e segurança. Os alunos são acompanhados por profissionais qualificados que 
              supervisionam as tarefas escolares e promovem atividades diversificadas.
            </p>
            <p className="text-gray-700">
              Nossa proposta inclui refeições balanceadas, momentos de estudo orientado, oficinas culturais, 
              atividades esportivas e recreação. Tudo isso em um ambiente que estimula a socialização, 
              a cooperação e o desenvolvimento de habilidades importantes para a formação integral do aluno.
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

export default Integral;
