import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Animations from "@/components/Animations";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Navbar />
      <main className="page_main">
        <Hero />
        <About />
        <Works />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <Animations />
    </SmoothScroll>
  );
}
