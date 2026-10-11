import { About } from './components/About'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { FeaturedProject } from './components/FeaturedProject'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-3 focus:text-white">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Experience />
        <FeaturedProject />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
