
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

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
          <Route path="/projetos" element={<Placeholder />} />
          <Route path="/unidades" element={<Placeholder />} />
          <Route path="/ensinos" element={<Placeholder />} />
          <Route path="/estrutura" element={<Placeholder />} />
          <Route path="/noticias" element={<Placeholder />} />
          <Route path="/galerias" element={<Placeholder />} />
          <Route path="/contato" element={<Placeholder />} />
          
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
