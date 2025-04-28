import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Showreel } from "@/components/showreel"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { VideoElements } from "@/components/video-elements"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121620] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <VideoElements />
      <About />
      <Showreel />
      <Projects />
      <Services />
      
      <Experience />
      
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
