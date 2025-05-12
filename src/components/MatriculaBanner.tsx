
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MatriculaBanner = () => {
  return (
    <section className="bg-colegio-azul py-10 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Faça parte da nossa comunidade educacional
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-colegio-azul hover:bg-gray-100 font-semibold rounded-full px-8 py-6">
            <a 
              href="https://contagem.ient.com.br/matricula" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Matrícula <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          
          <Button asChild size="lg" className="bg-white text-colegio-azul hover:bg-gray-100 font-semibold rounded-full px-8 py-6">
            <a 
              href="https://contagem.ient.com.br/matricula" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Rematrícula <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MatriculaBanner;
