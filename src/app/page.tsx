import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
