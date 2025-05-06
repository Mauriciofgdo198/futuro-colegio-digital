
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";
import { Separator } from "@/components/ui/separator";

const ValoresInstituto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-colegio-azul">Valores do Instituto</h1>
          <Separator className="my-4" />
          
          <div className="prose prose-lg max-w-none">
            <p>O Instituto Novos Tempos tem como proposta pedagógica a EDUCAÇÃO LIBERTADORA – uma educação contextualizada e problematizadora.</p>
            
            <p>Propõe desenvolver, em seus alunos, a afetividade, a inteligência, conhecimentos, as dimensões comunitária e social.</p>
            
            <p>Há um esforço para tornar realidade uma pedagogia que: Educa através da presença, da simplicidade, do espírito de família, do amor ao trabalho e de uma profunda relação com Deus;</p>
            
            <p>Compromete-se com o saber científico e cultural, aliado a uma experiência de solidariedade e sensível a toda situação de pobreza, de carência e marginalização. O ensino, centrado no ser humano, visa desenvolver a criatividade, o espírito de responsabilidade social à procura do equilíbrio entre os elementos intelectuais, éticos, afetivos e sociais. Essa ideia se traduz em uma educação que proporciona a plena realização do homem nas suas diferentes dimensões, tornando cada vez mais capaz ao construir sua história pessoal, de contribuir para a construção da história da coletividade de modo pleno e consciente.</p>
            
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Considera o educando artífice do próprio conhecimento;</li>
              <li>Propõe uma educação dinâmica e criativa, engajada na realidade;</li>
              <li>Parte da vida e se orienta para a vida;</li>
              <li>Abre-se criticamente aos avanços científicos e às inovações.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScheduleVisitButton />
    </div>
  );
};

export default ValoresInstituto;
