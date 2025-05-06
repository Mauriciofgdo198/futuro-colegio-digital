
import { GraduationCap, Clock, Image, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const EnsinoSection = () => {
  const niveis = [
    {
      titulo: "Educação Infantil",
      descricao: "Desenvolvemos as habilidades cognitivas, motoras e socioemocionais com atividades lúdicas e estimulantes.",
      icone: <Star className="h-10 w-10 text-colegio-amarelo" />,
      cor: "border-t-colegio-amarelo",
      imagem: "https://lh3.googleusercontent.com/pw/AP1GczN6pI69zD1OSBfdi340sENTJFt4mCQ5mvevH7SbKo0Cw2qQOagNWBY0A9ryLlYhFdqiwZUrVq8SR-KiuV0C6OVlkA6L4rCEA5zlMuqdWaoCD8cqlzN-c-FTYhBHZK30QQipA4S5jc5YaS4WU3zfAzNN=w1430-h953-s-no-gm?authuser=0"
    },
    {
      titulo: "Ensino Fundamental I",
      descricao: "Consolidamos a alfabetização e o raciocínio lógico, promovendo autonomia e consciência social.",
      icone: <GraduationCap className="h-10 w-10 text-colegio-azul" />,
      cor: "border-t-colegio-azul",
      imagem: "https://lh3.googleusercontent.com/pw/AP1GczPwo06qVekLw6U_RPNRe5-m9kQG1xRtACiGPsS1fxGZopGokWYi_lwPbzgWM2y7PWlTiWno38FX32o2YEg2FC8YYQMDM-3h42mjA4DNx-SXcbQR15phQWjwIuEzTHaBrFJjytHSwUTx3LoFmj2oOps6=w1430-h953-s-no-gm?authuser=0"
    },
    {
      titulo: "Ensino Fundamental II",
      descricao: "Aprofundamos o conhecimento nas diversas áreas, desenvolvendo pensamento crítico e base científica.",
      icone: <GraduationCap className="h-10 w-10 text-colegio-amarelo" />,
      cor: "border-t-colegio-amarelo",
      imagem: "https://lh3.googleusercontent.com/pw/AP1GczOtV7lJGT15V9lCAyfsVc1skjwh7mZpys5YRYhlzbXQg0t1NDaA9P3Ewu7fyzPPbcxuq93hch8Dv4zFZDDfdDMxvUJbkzgLAcSzKLthVM2uYaQwky3glQdR8odMw72ywIBrzBtfjqNNzMw_4dXgjTy_=w1430-h953-s-no-gm?authuser=0"
    },
    {
      titulo: "Ensino Médio",
      descricao: "Preparamos para o Enem e vestibulares com metodologia avançada e foco no projeto de vida do aluno.",
      icone: <GraduationCap className="h-10 w-10 text-colegio-azul" />,
      cor: "border-t-colegio-azul",
      imagem: "https://lh3.googleusercontent.com/pw/AP1GczPFgl9vh7DrJ0NgNg8lFXH-JGGWHVTpkxveFLUgO4NSAc8U8-PPwrsLaMhSoy6RXO-9ZnWwnSi5vD2-3WPxAUNmzna9PVHUHH5NKEAOi8ERvThpLbYYnTRzp24xDgU1MCUXoRtyMyHLeyuQTWGLHUxy=w1430-h953-s-no-gm?authuser=0"
    },
    {
      titulo: "Período Integral",
      descricao: "Oferecemos atividades extracurriculares, acompanhamento de tarefas e projetos complementares.",
      icone: <Clock className="h-10 w-10 text-colegio-amarelo" />,
      cor: "border-t-colegio-amarelo",
      imagem: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <div className="relative h-full w-full overflow-hidden rounded-t-lg">
                    <img 
                      src={nivel.imagem} 
                      alt={`Imagem ${nivel.titulo}`} 
                      className="object-cover h-full w-full"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Image className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </AspectRatio>
              </div>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold text-gray-800">{nivel.titulo}</CardTitle>
                {nivel.icone}
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{nivel.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnsinoSection;
