
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Placeholder = () => {
  const { page } = useParams();
  
  // Função para formatar o nome da página
  const formatPageName = (pageName: string | undefined) => {
    if (!pageName) return "Página";
    
    // Remove hífens e capitaliza cada palavra
    return pageName
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pageTitle = formatPageName(page);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-colegio-azul mb-6">{pageTitle}</h1>
          <div className="bg-gray-100 rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-gray-700 text-lg">
              Esta página está em construção. Em breve teremos conteúdo sobre {pageTitle.toLowerCase()}.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Placeholder;
