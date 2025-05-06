
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";
import { Separator } from "@/components/ui/separator";

const Missao = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-colegio-azul">Missão</h1>
          <Separator className="my-4" />
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
              <p className="text-xl font-bold text-center text-colegio-azul">
                "Atuar na área educacional buscando, através da excelência de serviços, promover o desenvolvimento integral do indivíduo, inserindo-o no contexto social do novo milênio."
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Visão</h2>
            <p>O Instituto Novos Tempos tem como proposta pedagógica a EDUCAÇÃO LIBERTADORA – uma educação contextualizada e problematizadora.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Valores</h2>
            <ul className="list-disc pl-5 space-y-2">
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

export default Missao;
