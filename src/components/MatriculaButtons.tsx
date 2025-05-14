
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserPlus, RefreshCw } from "lucide-react";

const MatriculaButtons = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-colegio-azul mb-10">
          Matrículas Abertas
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Botão de Matrícula */}
          <Link 
            to="/matriculas" 
            className="w-full md:w-80 bg-colegio-azul text-white rounded-lg shadow-md hover:shadow-xl transition-all hover:bg-colegio-azulClaro"
          >
            <div className="flex flex-col items-center justify-center p-8">
              <UserPlus className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Matrícula</h3>
              <p className="text-center text-sm opacity-90">Novos alunos 2025, matricule-se</p>
            </div>
          </Link>
          
          {/* Botão de Rematrícula */}
          <Link 
            to="/matriculas/renovar" 
            className="w-full md:w-80 bg-colegio-amarelo text-colegio-azul rounded-lg shadow-md hover:shadow-xl transition-all hover:bg-colegio-amareloClaro"
          >
            <div className="flex flex-col items-center justify-center p-8">
              <RefreshCw className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Rematrícula</h3>
              <p className="text-center text-sm opacity-90">Renove a matrícula para 2025</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MatriculaButtons;
