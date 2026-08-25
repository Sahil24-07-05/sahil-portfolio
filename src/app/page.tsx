import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
