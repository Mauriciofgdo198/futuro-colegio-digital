
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const EnemVestibular = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-colegio-azul mb-6 text-center">Aprovados no ENEM e Vestibulares</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <p className="text-lg text-gray-700 mb-6">
              O Colégio Novos Tempos tem o orgulho de anunciar que estamos crescendo e expandindo nossos horizontes!
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Nossa nova unidade ainda não possui uma lista de aprovados no ENEM, mas estamos confiantes de que, em breve, nossos alunos estarão entre os melhores resultados do exame.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Enquanto isso, convidamos você a conhecer os resultados incríveis alcançados pela nossa unidade de Contagem. Lá, nossos alunos têm se destacado e demonstrado o compromisso do IENT com a excelência educacional.
            </p>

            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/a92713e7-a83e-43d6-a7aa-1cbcf68c9cdc.png" 
                alt="Aprovados no ENEM e Vestibulares" 
                className="rounded-lg max-w-full shadow-md"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EnemVestibular;
