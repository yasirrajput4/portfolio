import {
  About,
  ContactForm,
  Footer,
  Hero,
  Navbar,
  Projects,
  Socials,
} from "./components";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-[#F4F5F7] dark:bg-[#0B0E13] font-sans min-h-screen overflow-x-hidden relative transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Socials />

      <main>
        <Hero />
        <About />
        <Projects />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
