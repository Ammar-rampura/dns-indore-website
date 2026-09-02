import { Preloader, ScrollProgress, Cursor, Magnetic, Tilt } from './components/Experience.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Brands from './components/Brands.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Infrastructure from './components/Infrastructure.jsx'
import Process from './components/Process.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Cursor />
      <Magnetic />
      <Tilt />
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <About />
        <Services />
        <Infrastructure />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
