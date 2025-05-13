
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Esquema de validação
const formSchema = z.object({
  nomeResponsavel: z.string().min(3, {
    message: "Nome deve ter pelo menos 3 caracteres",
  }),
  email: z.string().email({
    message: "Digite um endereço de e-mail válido",
  }),
  telefone: z.string().min(10, {
    message: "Digite um número de telefone válido",
  }),
  nomeFilho: z.string().optional(),
  serieAtual: z.string().optional(),
  escolaAtual: z.string().optional(),
  mensagem: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeResponsavel: "",
      email: "",
      telefone: "",
      nomeFilho: "",
      serieAtual: "",
      escolaAtual: "",
      mensagem: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    try {
      // Em um ambiente real, você enviaria isso para um endpoint de API
      // que processaria o e-mail para mauricio.guimaraes@ient.com.br
      // Como isso exigiria um backend, estamos apenas simulando a solicitação
      
      console.log("Dados do formulário:", data);
      console.log("Estes dados seriam enviados para: mauricio.guimaraes@ient.com.br");
      
      // Simulando uma chamada de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-colegio-azul mb-8 text-center">Entre em Contato</h1>
          
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm text-amber-600 font-medium">* Campos obrigatórios</p>
                </div>
                
                <FormField
                  control={form.control}
                  name="nomeResponsavel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo do responsável *</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail *</FormLabel>
                        <FormControl>
                          <Input placeholder="seu-email@exemplo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone/Celular *</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="nomeFilho"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome do seu(sua) filho(a)</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome do(a) filho(a)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="serieAtual"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Série atual do seu(sua) filho(a)</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 5º ano" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="escolaAtual"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Escola atual do seu(sua) filho(a)</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome da escola atual" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Digite sua mensagem..." 
                          className="min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-center mt-6">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-[#1E2952] hover:bg-[#16203f] text-white font-bold px-8 py-2 rounded w-full max-w-xs"
                  >
                    {isSubmitting ? "Enviando..." : "ENVIAR"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contato;
