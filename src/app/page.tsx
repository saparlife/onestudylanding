import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Features } from "@/components/Features";
// import { VideoDemo } from "@/components/VideoDemo"; // Временно скрыто - видео не готово
import { Testimonials } from "@/components/Testimonials";
import { AppDownload } from "@/components/AppDownload";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Features />
        {/* <VideoDemo /> */}{/* Временно скрыто - видео не готово */}
        <Testimonials />
        <AppDownload />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
