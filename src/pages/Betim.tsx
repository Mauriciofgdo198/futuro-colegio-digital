import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";
import { GraduationCap, Calendar, Store, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Betim = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Matrícula Banner */}
        <section className="bg-colegio-azul py-10 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Matrículas 2025 - Betim (placeholder)
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-5xl mx-auto">
              <div className="bg-white hover:bg-gray-100 text-colegio-azul rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-full max-w-xs lg:max-w-sm text-center group">
                <Calendar className="w-8 h-8 text-colegio-azul group-hover:scale-110 transition-transform duration-300 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Agende uma visita (placeholder)</h3>
                <p className="text-sm">Conheça nossa estrutura Betim (placeholder)</p>
              </div>
              
              <div className="bg-colegio-amarelo hover:bg-colegio-amareloClaro text-colegio-azul rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-full max-w-xs lg:max-w-sm text-center group">
                <Store className="w-8 h-8 text-colegio-azul group-hover:scale-110 transition-transform duration-300 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Rematrícula (placeholder)</h3>
                <p className="text-sm">Para alunos já matriculados - Betim (placeholder)</p>
              </div>
              
              <div className="bg-white hover:bg-gray-100 text-colegio-azul rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-full max-w-xs lg:max-w-sm text-center group">
                <GraduationCap className="w-8 h-8 text-colegio-azul group-hover:scale-110 transition-transform duration-300 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Matrícula Nova (placeholder)</h3>
                <p className="text-sm">Novos alunos - Betim (placeholder)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ensino Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-colegio-azul mb-4">
                Nossos Níveis de Ensino - Betim (placeholder)
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Placeholder — educação de qualidade para todas as idades - Betim
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Educação Infantil (placeholder)", subtitle: "2 a 5 anos", description: "Placeholder — desenvolvimento integral Betim" },
                { title: "Fundamental I (placeholder)", subtitle: "1º ao 5º ano", description: "Placeholder — base sólida Betim" },
                { title: "Fundamental II (placeholder)", subtitle: "6º ao 9º ano", description: "Placeholder — formação cidadã Betim" },
                { title: "Ensino Médio (placeholder)", subtitle: "1º ao 3º ano", description: "Placeholder — preparação futuro Betim" },
                { title: "Horário Integral (placeholder)", subtitle: "Período completo", description: "Placeholder — cuidado total Betim" }
              ].map((nivel, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-t-colegio-azul group hover:scale-105">
                  <GraduationCap className="h-10 w-10 text-colegio-azul mb-4" />
                  <h3 className="text-xl font-bold text-colegio-azul mb-2">{nivel.title}</h3>
                  <p className="text-colegio-amarelo font-semibold mb-3">{nivel.subtitle}</p>
                  <p className="text-gray-600 mb-4">{nivel.description}</p>
                  <Button variant="outline" className="border-colegio-azul text-colegio-azul hover:bg-colegio-azul hover:text-white">
                    Saiba mais (placeholder)
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-colegio-azul mb-4">
              Conheça o IENT Betim (placeholder)
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Placeholder — assista ao vídeo institucional da unidade Betim
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gray-200 rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-colegio-azul mx-auto mb-4" />
                  <p className="text-colegio-azul font-semibold">Vídeo institucional Betim (placeholder)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Banner */}
        <section className="bg-gradient-to-r from-colegio-azul to-colegio-azulClaro py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Acompanhe nossas redes sociais - Betim (placeholder)
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Placeholder — fique por dentro das novidades da unidade Betim
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-colegio-azul">
                Facebook Betim (placeholder)
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-colegio-azul">
                Instagram Betim (placeholder)
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-colegio-azul">
                YouTube Betim (placeholder)
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScheduleVisitButton />
    </div>
  );
};

export default Betim;