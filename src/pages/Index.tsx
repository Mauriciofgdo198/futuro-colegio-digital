
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MatriculaBanner from "@/components/MatriculaBanner";
import EnsinoSection from "@/components/EnsinoSection";
import VideoSection from "@/components/VideoSection";
import DestaqueSection from "@/components/DestaqueSection";
import SocialBanner from "@/components/SocialBanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScheduleVisitButton from "@/components/ScheduleVisitButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MatriculaBanner />
        <EnsinoSection />
        <VideoSection />
        <DestaqueSection />
        <SocialBanner />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScheduleVisitButton />
    </div>
  );
};

export default Index;
