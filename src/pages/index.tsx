import Navbar from "../components/Navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"

export default function Home() {
  return (
    <div className="relative min-h-screen">

      {/* Content */}
      <Navbar />
      <Hero />
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}

