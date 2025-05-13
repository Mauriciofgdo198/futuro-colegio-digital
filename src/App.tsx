
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

// Sobre nós pages
import QuemSomos from "./pages/sobre/QuemSomos";
import ValoresInstituto from "./pages/sobre/ValoresInstituto";
import Lient from "./pages/sobre/Lient";
import Missao from "./pages/sobre/Missao";

// Projetos pages
import EnemVestibular from "./pages/projetos/EnemVestibular";
import NossosProjetos from "./pages/projetos/NossosProjetos";

// Contato page
import Contato from "./pages/contato/Contato";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Páginas de navegação principal */}
          <Route path="/sobre" element={<Placeholder />} />
          <Route path="/sobre/quem-somos" element={<QuemSomos />} />
          <Route path="/sobre/valores" element={<ValoresInstituto />} />
          <Route path="/sobre/ient" element={<Lient />} />
          <Route path="/sobre/missao" element={<Missao />} />
          
          <Route path="/projetos" element={<Placeholder />} />
          <Route path="/projetos/enem-vestibular" element={<EnemVestibular />} />
          <Route path="/projetos/nossos-projetos" element={<NossosProjetos />} />
          
          <Route path="/unidades" element={<Placeholder />} />
          <Route path="/unidades/contagem" element={<Placeholder />} />
          <Route path="/unidades/betim" element={<Placeholder />} />
          
          <Route path="/ensinos" element={<Placeholder />} />
          <Route path="/ensinos/infantil" element={<Placeholder />} />
          <Route path="/ensinos/fundamental-1" element={<Placeholder />} />
          <Route path="/ensinos/fundamental-2" element={<Placeholder />} />
          <Route path="/ensinos/medio" element={<Placeholder />} />
          <Route path="/ensinos/integral" element={<Placeholder />} />
          
          <Route path="/estrutura" element={<Placeholder />} />
          <Route path="/noticias" element={<Placeholder />} />
          <Route path="/galerias" element={<Placeholder />} />
          <Route path="/contato" element={<Contato />} />
          
          {/* Páginas de ação */}
          <Route path="/matriculas" element={<Placeholder />} />
          <Route path="/app" element={<Placeholder />} />
          <Route path="/acesso" element={<Placeholder />} />
          
          {/* Rota 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
