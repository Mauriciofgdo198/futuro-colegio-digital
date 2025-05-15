import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
const Lient = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-colegio-azul">Lient</h1>
          <Separator className="my-4" />
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-colegio-azul">Informações</h2>
              
              <ul className="space-y-2">
                <li><span className="font-bold">Nome Vulgar:</span> Leão</li>
                <li><span className="font-bold">Nome Científico:</span> Panthera Leo</li>
                <li><span className="font-bold">Reino:</span> Animal</li>
                <li><span className="font-bold">Filo:</span> Chordata</li>
                <li><span className="font-bold">Subfilo:</span> Vertebrata</li>
                <li><span className="font-bold">Classe:</span> Mammalia (mamíferos)</li>
                <li><span className="font-bold">Gênero:</span> Panthera</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-2">Descrições</h3>
              <p>Macho, juba imponente, inteligente, valente, companheiro, divertido, carinhoso, esportista / atleta, estudioso, carismático, agitado, vencedor, animado e feliz.</p>
              
              <ul className="mt-4 space-y-2">
                <li><span className="font-bold">Tamanho:</span> 1,75m (altura)</li>
                <li><span className="font-bold">Peso:</span> 90kg</li>
                <li><span className="font-bold">Habitat:</span> Instituto Novos Tempos</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-2">Hábitos</h3>
              <p>Está sempre em grupo, vive em harmonia com os alunos do IENT, sempre , sempre está por perto ajudando no que for preciso, inclusive no trabalho pedagógico realizado pela escola. Corre atrás de seus ideais, percorre os caminho traçados pelo IENT e enfrenta os desafios impostos pela vida.</p>
            </div>
            
            <div>
              <img src="/lovable-uploads/a78ac681-2089-42e4-8fc6-e3bbda2d5317.png" alt="Lient - Mascote do Instituto Novos Tempos" className="w-full max-w-xs mx-auto object-contain" />
              
              <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-center text-colegio-azul">LIENT GAMES</h3>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="font-medium mb-2">Corrida do Lient com obstáculos</p>
                    <Button className="bg-colegio-azul hover:bg-colegio-azulClaro">
                      <a href="#" target="_blank" rel="noopener noreferrer">Clique aqui</a>
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <p className="font-medium mb-2">Jogo da Reciclagem com Lient</p>
                    <Button className="bg-colegio-azul hover:bg-colegio-azulClaro">
                      <a href="#" target="_blank" rel="noopener noreferrer">Clique aqui</a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2">INSTAGRAM</h3>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 bg-colegio-azul text-white">
                  <a href="https://www.instagram.com/institutonovostempos/" target="_blank" rel="noopener noreferrer">Seguir</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScheduleVisitButton />
    </div>;
};
export default Lient;