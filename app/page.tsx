import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contributions from "@/components/Contributions";
import Expertise from "@/components/Expertise";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contributions />
      <Expertise />
      <Certifications />
      <Resume />
      <Contact />
    </main>
  );
}
