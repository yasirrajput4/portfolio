import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    /* Added min-h-screen to secure background and overflow-x-hidden to prevent layout breaking on scroll */
    <div className="bg-gray-100 dark:bg-gray-900 font-sans min-h-screen overflow-x-hidden relative transition-colors duration-300">
      {/* Top Header Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Floating Global Micro-interactions */}
      <Socials />

      {/* Semantic Main Core Content Area */}
      <main>
        <Hero />
        <About />
        <Projects />
        <ContactForm />
      </main>

      {/* Bottom Footer Area */}
      <Footer />
    </div>
  );
}