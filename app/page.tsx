import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import MoreInfo from "@/components/MoreInfo";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Experience />
        <Skills />
        <Projects />
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}
