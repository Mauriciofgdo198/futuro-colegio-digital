
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnsinoSection from "@/components/EnsinoSection";
import VideoSection from "@/components/VideoSection";
import DestaqueSection from "@/components/DestaqueSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EnsinoSection />
        <VideoSection />
        <DestaqueSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
