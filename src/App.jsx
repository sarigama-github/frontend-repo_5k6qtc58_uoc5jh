import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-white dark:from-black dark:via-[#0b0b10] dark:to-black text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />

        <Section id="about" eyebrow="About" title="AI Engineer focused on impact" description="I design, build, and deploy intelligent systems—balancing cutting-edge research with pragmatic engineering to ship reliable products.">
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              My experience spans LLM applications, computer vision, MLOps, backend systems, and data platforms. I care about clean interfaces, measurable outcomes, and fast feedback loops.
            </p>
          </div>
        </Section>

        <Section id="skills" eyebrow="Expertise" title="Core skills">
          <Skills />
        </Section>

        <Section id="projects" eyebrow="Work" title="Selected projects" description="A few highlights from recent builds.">
          <Projects />
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s work together" description="Tell me about your idea, product, or team. I’ll get back within 24 hours.">
          <Contact />
        </Section>

        <footer className="py-12 border-t border-black/5 dark:border-white/10 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} AI Engineer — Built with love for intelligent products.
        </footer>
      </main>
    </div>
  )
}

export default App
