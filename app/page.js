import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
