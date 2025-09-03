import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MatriculaBanner from "@/components/MatriculaBanner";
import EnsinoSection from "@/components/EnsinoSection";
import VideoSection from "@/components/VideoSection";
import SocialBanner from "@/components/SocialBanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";

const Betim = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MatriculaBanner />
        <EnsinoSection />
        <VideoSection videoId="G6wrCjsnRsE" videoTitle="Visite o Novos Tempos" />
        <SocialBanner 
          instagramUrl="https://www.instagram.com/colegionovostemposbetim/"
          facebookUrl="https://www.facebook.com/people/Colegionovostemposbetim/61565463054633/"
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScheduleVisitButton />
    </div>
  );
};

export default Betim;