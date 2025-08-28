import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnitSelection from "./pages/UnitSelection";
import Contagem from "./pages/Contagem";
import Betim from "./pages/Betim";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import Estrutura from "./pages/Estrutura";

// Sobre nós pages
import QuemSomos from "./pages/sobre/QuemSomos";
import ValoresInstituto from "./pages/sobre/ValoresInstituto";
import Lient from "./pages/sobre/Lient";
import Missao from "./pages/sobre/Missao";

// Projetos pages
import NossosProjetos from "./pages/projetos/NossosProjetos";

// Ensinos pages
import Infantil from "./pages/ensinos/Infantil";
import Fundamental1 from "./pages/ensinos/Fundamental1";
import Fundamental2 from "./pages/ensinos/Fundamental2";
import Medio from "./pages/ensinos/Medio";
import Integral from "./pages/ensinos/Integral";

// Contato page
import Contato from "./pages/contato/Contato";

// Galerias pages
import GaleriasPage from "./pages/galerias/GaleriasPage";
import AlbumPage from "./pages/galerias/AlbumPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UnitSelection />} />
          <Route path="/contagem" element={<Contagem />} />
          <Route path="/betim" element={<Betim />} />
          
          {/* Páginas de navegação principal */}
          <Route path="/sobre" element={<Placeholder />} />
          <Route path="/sobre/quem-somos" element={<QuemSomos />} />
          <Route path="/sobre/valores" element={<ValoresInstituto />} />
          <Route path="/sobre/ient" element={<Lient />} />
          <Route path="/sobre/missao" element={<Missao />} />
          
          <Route path="/projetos" element={<Placeholder />} />
          <Route path="/projetos/nossos-projetos" element={<NossosProjetos />} />
          
          <Route path="/unidades" element={<Placeholder />} />
          <Route path="/unidades/contagem" element={<Contagem />} />
          <Route path="/unidades/betim" element={<Betim />} />
          
          <Route path="/ensinos" element={<Placeholder />} />
          <Route path="/ensinos/infantil" element={<Infantil />} />
          <Route path="/ensinos/fundamental-1" element={<Fundamental1 />} />
          <Route path="/ensinos/fundamental-2" element={<Fundamental2 />} />
          <Route path="/ensinos/medio" element={<Medio />} />
          <Route path="/ensinos/integral" element={<Integral />} />
          
          <Route path="/estrutura" element={<Estrutura />} />
          
          {/* Páginas da galeria */}
          <Route path="/galerias" element={<GaleriasPage />} />
          <Route path="/galerias/:id" element={<AlbumPage />} />
          
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
