
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DestaqueSection = () => {
  const destaques = [
    {
      imagem: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80",
      categoria: "Evento",
      titulo: "Feira de Ciências 2025",
      descricao: "Estudantes apresentam projetos inovadores nas áreas de tecnologia, meio ambiente e saúde."
    },
    {
      imagem: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1132&q=80",
      categoria: "Esportes",
      titulo: "Campeonato Interclasses",
      descricao: "Competições esportivas promovem integração, trabalho em equipe e espírito esportivo entre os alunos."
    },
    {
      imagem: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      categoria: "Cultura",
      titulo: "Festival de Artes",
      descricao: "Apresentações teatrais, musicais e exposição de trabalhos artísticos dos nossos alunos."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-colegio-azul mb-2">Destaques</h2>
            <p className="text-gray-600">Confira as últimas novidades e eventos do Colégio Novos Tempos</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-colegio-azul text-colegio-azul hover:bg-colegio-azul hover:text-white rounded-full">
            <Link to="/noticias" className="inline-flex items-center">
              Ver todas as notícias <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destaques.map((destaque, index) => (
            <div key={index} className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={destaque.imagem} 
                  alt={destaque.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-colegio-amarelo/20 text-colegio-azul rounded-full px-3 py-1 text-sm font-medium mb-3">
                  {destaque.categoria}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-colegio-azul transition-colors">
                  {destaque.titulo}
                </h3>
                <p className="text-gray-600 mb-4">
                  {destaque.descricao}
                </p>
                <Link 
                  to="/noticias" 
                  className="inline-flex items-center text-colegio-azul font-medium hover:text-colegio-azulClaro transition-colors"
                >
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestaqueSection;
