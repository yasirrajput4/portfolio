import AboutExperience from "./components/AboutExperience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

import Socials from "./components/Socials";

export default function App() {
  return (
    <div className="bg-gray-100  font-sans">
      <Hero />
      <Socials></Socials>
      <AboutExperience></AboutExperience>
      <Projects></Projects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
