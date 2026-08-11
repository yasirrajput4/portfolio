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
    <div className="bg-gray-100 dark:bg-gray-900 font-sans min-h-screen overflow-x-hidden relative transition-colors duration-300">
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
