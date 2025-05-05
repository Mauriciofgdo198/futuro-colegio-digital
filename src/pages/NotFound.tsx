
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-8xl font-bold text-colegio-azul mb-4">404</h1>
            <p className="text-2xl text-gray-700 mb-8">Oops! Página não encontrada</p>
            <p className="text-gray-600 mb-8">
              A página que você está procurando pode ter sido removida, teve seu
              nome alterado ou está temporariamente indisponível.
            </p>
            <Button asChild className="bg-colegio-azul hover:bg-colegio-azulClaro rounded-full px-6">
              <Link to="/">Voltar para a página inicial</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;
