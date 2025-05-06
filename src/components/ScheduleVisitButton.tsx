
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
            className="fixed bottom-24 right-6 bg-colegio-azul text-white p-4 rounded-full shadow-lg hover:bg-colegio-azulClaro transition-colors z-50 flex items-center justify-center"
            aria-label="Agendar visita"
          >
            <Calendar className="w-6 h-6" />
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
