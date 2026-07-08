import { Linkedin, Github, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="fixed top-1/2 right-1 transform -translate-y-1/2 flex flex-col gap-4 z-50 hidden md:flex">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yasirrajput"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition"
      >
        <Linkedin size={24} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/yasirrajput4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition"
      >
        <Github size={24} />
      </a>

      {/* Mail */}
      <a
        href="mailto:rajputyasir2005@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition"
      >
        <Mail size={24} />
      </a>
      <a
        href="https://wa.me/916290840066"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition"
      >
        <BsWhatsapp size={24} />
      </a>
    </div>
  );
};

export default Socials;
