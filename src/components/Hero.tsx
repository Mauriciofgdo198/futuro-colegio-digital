
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const banners = [
    {
      desktopImage: "https://contagem.ient.com.br/assets/img/banners/d29e72eb3f769ada52fb96e581a6d1a3.jpg",
      mobileImage: "https://contagem.ient.com.br/assets/img/banners/26403414b0a6314a8ff50f6cd6914444.jpg",
      alt: "Banner 01",
      link: "https://www.instagram.com/lientoficial/"
    },
    {
      desktopImage: "https://contagem.ient.com.br/assets/img/banners/0a590482c32bc24b8aaa8099201a25d8.jpg",
      mobileImage: "https://contagem.ient.com.br/assets/img/banners/35ecf3b9177166ded321c98ae582ecdb.jpg",
      alt: "Banner 02",
      link: "https://ientstore.commercesuite.com.br/"
    }
  ];

  return (
    <section className="banner-main w-full relative">
      {/* Matrícula and Rematrícula buttons */}
      <div className="absolute top-4 left-0 right-0 z-20 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6">
        <a 
          href="https://contagem.ient.com.br/matricula" 
          className="px-6 py-3 bg-colegio-azul text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110 font-semibold text-lg md:text-xl"
        >
          Matrícula
        </a>
        <a 
          href="https://contagem.ient.com.br/matricula" 
          className="px-6 py-3 bg-colegio-amarelo text-colegio-azul rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110 font-semibold text-lg md:text-xl"
        >
          Rematrícula
        </a>
      </div>

      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <a 
                href={banner.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <img 
                  src={isMobile ? banner.mobileImage : banner.desktopImage} 
                  alt={banner.alt}
                  className="w-full h-auto"
                />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-colors`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => {
                const carouselEl = document.querySelector('.embla__container');
                if (carouselEl) {
                  const scrollOptions = { 
                    index,
                    behavior: 'smooth' as ScrollBehavior
                  };
                  // @ts-ignore - The Embla API is accessed through the DOM
                  carouselEl.__embla?.scrollTo(scrollOptions);
                }
              }}
            />
          ))}
        </div>
        
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 border-none text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 border-none text-white" />
      </Carousel>
    </section>
  );
};

export default Hero;
