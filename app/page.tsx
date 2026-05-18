import Navbar      from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Services     from './components/Services';
import Skills       from './components/Skills';
import Projects     from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog         from './components/Blog';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
