
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-colegio-azul to-colegio-azulClaro text-white overflow-hidden">
      {/* Círculos decorativos */}
      <div className="absolute -right-20 -top-20 w-72 h-72 bg-colegio-amarelo opacity-20 rounded-full"></div>
      <div className="absolute -left-10 -bottom-20 w-60 h-60 bg-colegio-amarelo opacity-20 rounded-full"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Educando para o Futuro
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Do ensino infantil ao médio, formamos cidadãos com conhecimento, valores e preparação para os desafios do mundo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-colegio-amarelo text-colegio-azul hover:bg-colegio-amareloClaro rounded-full text-lg font-bold px-6">
                <Link to="/matriculas">Matricule-se</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full text-lg font-bold px-6">
                <Link to="/ensinos">Conheça nossos cursos</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-float hidden md:block">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-colegio-azulClaro/50 backdrop-blur p-2">
              <div className="bg-white/90 rounded-lg overflow-hidden w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Estudantes do Colégio Novos Tempos" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-colegio-amarelo rounded-full flex items-center justify-center shadow-lg">
              <span className="text-colegio-azul font-bold text-lg text-center leading-tight">Desde 1985</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
