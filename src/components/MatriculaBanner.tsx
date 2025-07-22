
import { Calendar, Store, GraduationCap } from "lucide-react";

const MatriculaBanner = () => {
  return (
    <section className="bg-colegio-azul py-10 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Faça parte da nossa comunidade educacional
        </h2>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 px-4">
          {/* Rematrícula */}
          <a 
            href="https://contagem.ient.com.br/matricula" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-colegio-azul rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-full max-w-xs lg:max-w-sm text-center group"
          >
            <div className="flex flex-col items-center space-y-2">
              <Calendar className="w-8 h-8 text-colegio-azul group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-lg">Rematrícula</h3>
              <p className="text-sm opacity-90">Renove sua matrícula para 2025!</p>
            </div>
          </a>

          {/* IENT Store */}
          <a 
            href="https://ientstore.commercesuite.com.br/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-colegio-amarelo hover:bg-colegio-amareloClaro text-colegio-azul rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-full max-w-xs lg:max-w-sm text-center group"
          >
            <div className="flex flex-col items-center space-y-2">
              <Store className="w-8 h-8 text-colegio-azul group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-lg">IENT Store</h3>
              <p className="text-sm opacity-90">Sua loja online chegou! Acesse e confira!</p>
            </div>
          </a>

          {/* Matrículas */}
          <a 
            href="https://contagem.ient.com.br/matricula" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-colegio-azul rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-full max-w-xs lg:max-w-sm text-center group"
          >
            <div className="flex flex-col items-center space-y-2">
              <GraduationCap className="w-8 h-8 text-colegio-azul group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-lg">Matrículas</h3>
              <p className="text-sm opacity-90">Admissão de novos alunos 2025, matricule-se.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MatriculaBanner;
