
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Calendar } from "lucide-react";

const ScheduleVisitButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://calendly.com/novostempos"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-1/2 -translate-y-1/2 right-0 bg-colegio-amarelo text-colegio-azul py-10 px-2 rounded-l-md shadow-lg hover:bg-colegio-amareloClaro transition-colors z-50 flex items-center justify-center group"
            aria-label="Agendar visita"
          >
            <span className="[writing-mode:vertical-rl] rotate-180 font-medium text-sm tracking-wide flex items-center gap-2">
              <Calendar className="w-5 h-5 rotate-180" />
              Agendar Visita
            </span>
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Agendar Visita</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ScheduleVisitButton;
