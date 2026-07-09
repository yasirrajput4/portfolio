import { Linkedin, Github, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const Socials = () => {
  return (
    /* Changed right-1 to right-4 to prevent scrollbar overlapping and give clean breathing space */
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-5 z-50 hidden md:flex">
      <a
        href="https://www.linkedin.com/in/yasirrajput"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 dark:text-gray-400 hover:text-[rgb(33,150,243)] dark:hover:text-[rgb(33,150,243)] hover:scale-115 transition-all duration-200 inline-block p-1"
        aria-label="Visit Yasir's LinkedIn profile"
      >
        <Linkedin size={22} />
      </a>

      <a
        href="https://github.com/yasirrajput4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 dark:text-gray-400 hover:text-[rgb(33,150,243)] dark:hover:text-[rgb(33,150,243)] hover:scale-115 transition-all duration-200 inline-block p-1"
        aria-label="Visit Yasir's GitHub profile"
      >
        <Github size={22} />
      </a>

      {/* Removed target="_blank" to prevent opening annoying blank browser tabs */}
      <a
        href="mailto:rajputyasir2005@gmail.com"
        className="text-gray-500 dark:text-gray-400 hover:text-[rgb(33,150,243)] dark:hover:text-[rgb(33,150,243)] hover:scale-115 transition-all duration-200 inline-block p-1"
        aria-label="Send an email to Yasir"
      >
        <Mail size={22} />
      </a>

      <a
        href="https://wa.me/919898194502"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 dark:text-gray-400 hover:text-[#25D366] dark:hover:text-[#25D366] hover:scale-115 transition-all duration-200 inline-block p-1"
        aria-label="Chat with Yasir on WhatsApp"
      >
        <BsWhatsapp size={22} />
      </a>
    </div>
  );
};

export default Socials;