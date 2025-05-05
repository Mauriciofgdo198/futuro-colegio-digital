
import { GraduationCap, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EnsinoSection = () => {
  const niveis = [
    {
      titulo: "Educação Infantil",
      descricao: "Desenvolvemos as habilidades cognitivas, motoras e socioemocionais com atividades lúdicas e estimulantes.",
      icone: <Star className="h-10 w-10 text-colegio-amarelo" />,
      faixaEtaria: "2 a 5 anos",
      cor: "border-t-colegio-amarelo"
    },
    {
      titulo: "Ensino Fundamental I",
      descricao: "Consolidamos a alfabetização e o raciocínio lógico, promovendo autonomia e consciência social.",
      icone: <GraduationCap className="h-10 w-10 text-colegio-azul" />,
      faixaEtaria: "6 a 10 anos",
      cor: "border-t-colegio-azul"
    },
    {
      titulo: "Ensino Fundamental II",
      descricao: "Aprofundamos o conhecimento nas diversas áreas, desenvolvendo pensamento crítico e base científica.",
      icone: <GraduationCap className="h-10 w-10 text-colegio-azul" />,
      faixaEtaria: "11 a 14 anos",
      cor: "border-t-colegio-azul"
    },
    {
      titulo: "Ensino Médio",
      descricao: "Preparamos para o Enem e vestibulares com metodologia avançada e foco no projeto de vida do aluno.",
      icone: <GraduationCap className="h-10 w-10 text-colegio-azul" />,
      faixaEtaria: "15 a 17 anos",
      cor: "border-t-colegio-azul"
    },
    {
      titulo: "Período Integral",
      descricao: "Oferecemos atividades extracurriculares, acompanhamento de tarefas e projetos complementares.",
      icone: <Clock className="h-10 w-10 text-colegio-amarelo" />,
      faixaEtaria: "Todas as idades",
      cor: "border-t-colegio-amarelo"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-colegio-azul mb-4">Nossos Níveis de Ensino</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos um percurso educacional completo, com metodologia inovadora e atenção às necessidades individuais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {niveis.map((nivel, index) => (
            <Card key={index} className={`border-t-4 ${nivel.cor} hover:shadow-lg transition-shadow`}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold text-gray-800">{nivel.titulo}</CardTitle>
                {nivel.icone}
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{nivel.descricao}</p>
                <div className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                  Faixa etária: {nivel.faixaEtaria}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnsinoSection;
