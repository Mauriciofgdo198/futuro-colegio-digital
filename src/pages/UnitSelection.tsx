import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const UnitSelection = () => {
  useEffect(() => {
    document.title = "IENT — Escolha de Unidade";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Selecione a unidade do Instituto de Ensino Novos Tempos para acessar o site específico. Contagem ou Betim.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Selecione a unidade do Instituto de Ensino Novos Tempos para acessar o site específico. Contagem ou Betim.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/a78ac681-2089-42e4-8fc6-e3bbda2d5317.png" 
                alt="Instituto de Ensino Novos Tempos" 
                className="h-24 md:h-32 mx-auto"
              />
            </div>
            
            {/* Título Principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-colegio-azul mb-6">
              Escolha sua unidade
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Selecione a unidade para acessar o site específico.
            </p>
            
            {/* Cards de Unidades */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Unidade Contagem */}
              <Link 
                to="/contagem"
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-colegio-azul to-colegio-azulClaro">
                  <img 
                    src="/assets/home/contagem-placeholder.jpg"
                    alt="IENT — Unidade Contagem"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Contagem</h2>
                    <p className="text-lg opacity-90">Clique para acessar a unidade</p>
                  </div>
                </div>
              </Link>
              
              {/* Unidade Betim */}
              <Link 
                to="/betim"
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-colegio-azul to-colegio-azulClaro">
                  <img 
                    src="/assets/home/betim-placeholder.jpg"
                    alt="IENT — Unidade Betim"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Betim</h2>
                    <p className="text-lg opacity-90">Clique para acessar a unidade</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UnitSelection;