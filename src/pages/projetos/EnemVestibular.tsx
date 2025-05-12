import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

// Types for approved student data
interface ApprovedStudent {
  id: string;
  name: string;
  course: string;
  university: string;
  year: number;
  imageUrl?: string;
}
const EnemVestibular = () => {
  // State to track expanded accordion items
  const [openYears, setOpenYears] = useState<string[]>(['2024']);

  // Sample data - This would typically come from a database
  const approvedStudents: ApprovedStudent[] = [{
    id: "1",
    name: "Lucas Batista da Silva",
    course: "Administração de Empresas",
    university: "PUC Minas",
    year: 2024,
    imageUrl: "/lovable-uploads/a92713e7-a83e-43d6-a7aa-1cbcf68c9cdc.png"
  }, {
    id: "2",
    name: "Ana Luísa Gonçalves",
    course: "Engenharia Mecânica",
    university: "UFOP, UNA e PUC Minas",
    year: 2024,
    imageUrl: "/lovable-uploads/a92713e7-a83e-43d6-a7aa-1cbcf68c9cdc.png"
  }, {
    id: "3",
    name: "Melyssa Oliveira Diniz",
    course: "Ciências Econômicas",
    university: "UNA",
    year: 2024,
    imageUrl: "/lovable-uploads/a92713e7-a83e-43d6-a7aa-1cbcf68c9cdc.png"
  }, {
    id: "4",
    name: "Pedro Henrique Alves",
    course: "Medicina",
    university: "UFMG",
    year: 2023
  }, {
    id: "5",
    name: "Maria Clara Santos",
    course: "Direito",
    university: "PUC Minas",
    year: 2023
  }, {
    id: "6",
    name: "João Paulo Mendes",
    course: "Engenharia Civil",
    university: "CEFET-MG",
    year: 2022
  }, {
    id: "7",
    name: "Laura Campos",
    course: "Psicologia",
    university: "UFMG",
    year: 2021
  }];

  // Group students by year
  const studentsByYear: Record<number, ApprovedStudent[]> = {};
  approvedStudents.forEach(student => {
    if (!studentsByYear[student.year]) {
      studentsByYear[student.year] = [];
    }
    studentsByYear[student.year].push(student);
  });

  // Get years sorted in descending order
  const years = Object.keys(studentsByYear).map(Number).sort((a, b) => b - a);
  return <div className="min-h-screen flex flex-col">
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

            <Accordion type="multiple" value={openYears} onValueChange={setOpenYears} className="space-y-4">
              {years.map(year => <AccordionItem key={year} value={year.toString()} className="border rounded-md bg-gray-100 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-200 transition-colors">
                    <span className="text-xl font-semibold text-colegio-azul flex items-center">
                      Aprovados {year}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {studentsByYear[year].map(student => <Card key={student.id} className="overflow-hidden flex flex-col border shadow-sm hover:shadow-md transition-shadow">
                          {student.imageUrl ? <div className="h-48 overflow-hidden">
                              <img src={student.imageUrl} alt={`${student.name} - ${student.course}`} className="w-full h-full object-cover" />
                            </div> : <div className="h-48 bg-gray-100 flex items-center justify-center">
                              <span className="text-gray-400 font-medium">Imagem não disponível</span>
                            </div>}
                          
                          
                        </Card>)}
                    </div>
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>;
};
export default EnemVestibular;