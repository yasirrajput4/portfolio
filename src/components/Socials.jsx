import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const LINK_CLASS =
  "text-[#565C6B] dark:text-[#9AA2B1] hover:text-[#2F6FED] dark:hover:text-[#5C8CFF] hover:scale-110 transition-[color,transform] duration-200 inline-block p-1";

const Socials = () => {
  return (
    <div className="fixed top-1/2 right-4 lg:right-6 -translate-y-1/2 flex-col items-center gap-5 z-40 hidden md:flex">
      <a
        href="https://www.linkedin.com/in/yasirrajput"
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASS}
        aria-label="Visit Yasir's LinkedIn profile"
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="https://github.com/yasirrajput4"
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASS}
        aria-label="Visit Yasir's GitHub profile"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="mailto:rajputyasir2005@gmail.com"
        className={LINK_CLASS}
        aria-label="Send an email to Yasir"
      >
        <FiMail size={20} />
      </a>

      <a
        href="https://wa.me/919898194502"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#565C6B] dark:text-[#9AA2B1] hover:text-[#25D366] hover:scale-110 transition-[color,transform] duration-200 inline-block p-1"
        aria-label="Chat with Yasir on WhatsApp"
      >
        <BsWhatsapp size={20} />
      </a>

      <span
        aria-hidden="true"
        className="w-px h-16 bg-[#D8DCE3] dark:bg-[#262B35]"
      />
    </div>
  );
};

export default Socials;
