import { Link } from "react-router-dom";
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
    <div className="h-screen w-full">
      {/* Full Screen Landing Section - Prepared for future background image */}
      <section className="h-full w-full bg-gradient-to-br from-gray-50 to-gray-100 relative flex items-center justify-center">
        {/* Future background image overlay - ready for implementation */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        <div className="relative z-20 text-center px-4 py-8 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="/lovable-uploads/a78ac681-2089-42e4-8fc6-e3bbda2d5317.png" 
              alt="Instituto de Ensino Novos Tempos" 
              className="h-20 md:h-28 lg:h-32 mx-auto"
            />
          </div>
          
          {/* Título Principal */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-colegio-azul mb-4">
            Escolha sua unidade
          </h1>
          
          {/* Subtítulo */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Selecione a unidade para acessar o site específico.
          </p>
          
          {/* Cards de Unidades - Enhanced for full-screen experience */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Unidade Contagem */}
            <Link 
              to="/contagem"
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 active:scale-95"
            >
              <div className="aspect-[5/4] bg-gradient-to-br from-colegio-azul to-colegio-azulClaro">
                <img 
                  src="/assets/home/contagem-placeholder.jpg"
                  alt="IENT — Unidade Contagem"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Contagem</h2>
                  <p className="text-sm md:text-base lg:text-lg opacity-95">Clique para acessar a unidade</p>
                </div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
            
            {/* Unidade Betim */}
            <Link 
              to="/betim"
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 active:scale-95"
            >
              <div className="aspect-[5/4] bg-gradient-to-br from-colegio-azul to-colegio-azulClaro">
                <img 
                  src="/assets/home/betim-placeholder.jpg"
                  alt="IENT — Unidade Betim"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Betim</h2>
                  <p className="text-sm md:text-base lg:text-lg opacity-95">Clique para acessar a unidade</p>
                </div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnitSelection;