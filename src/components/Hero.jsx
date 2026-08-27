import Profile from "../assets/Profile.jpeg";
import SpecFrame from "./SpecFrame";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const SPECS = [
  { label: "Name", value: "Yasir Rajput" },
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Stack", value: "React · Node.js · MongoDB" },
  { label: "Focus", value: "AI-powered interfaces" },
  { label: "Based in", value: "Ahmedabad, India" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-[#F4F5F7] dark:bg-[#0B0E13] text-[#12151B] dark:text-[#E9ECF2] overflow-hidden transition-colors duration-300"
    >
      {/* Ambient blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 -right-20 w-96 h-96 bg-[#2F6FED]/10 dark:bg-[#2F6FED]/15 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
          {/* Left: Intro */}
          <div>
            <p className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#2F6FED] dark:text-[#5C8CFF] mb-5">
              Full-Stack Developer &middot; MERN &amp; AI
            </p>

            <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight">
              Building software
              <br />
              that just{" "}
              <span className="relative inline-block">
                works
                <svg
                  aria-hidden="true"
                  className="absolute left-0 -bottom-1.5 w-full h-2.5 text-[#F5A623]"
                  viewBox="0 0 120 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7 C 30 2, 90 2, 118 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="mt-6 text-[#565C6B] dark:text-[#9AA2B1] text-base sm:text-lg leading-relaxed max-w-lg">
              I'm Yasir — a CSE undergrad blending the MERN stack with AI,
              building secure content platforms and real-time, LLM-powered chat
              interfaces.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <a
                href="https://www.linkedin.com/in/yasirrajput"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#2F6FED] hover:bg-[#2558C4] transition-colors duration-300 text-white px-6 py-3 rounded-md font-medium text-sm inline-flex items-center justify-center gap-1.5 shadow-sm"
              >
                Let's talk
                <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Yasir_Rajput_Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-[#12151B]/15 dark:border-white/15 text-[#12151B] dark:text-[#E9ECF2] font-medium text-sm hover:border-[#2F6FED] hover:text-[#2F6FED] dark:hover:border-[#5C8CFF] dark:hover:text-[#5C8CFF] transition-colors duration-300"
              >
                <FiDownload className="text-base" />
                Resume
              </a>
            </div>
          </div>

          {/* Right: Signature spec panel */}
          <SpecFrame className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-white dark:bg-[#12161D] border border-[#D8DCE3] dark:border-[#262B35] p-6 sm:p-7">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#565C6B] dark:text-[#9AA2B1]">
                  Profile
                </span>
                <span className="w-14 h-14 rounded-md overflow-hidden border border-[#D8DCE3] dark:border-[#262B35] shrink-0">
                  <img
                    src={Profile}
                    alt="Yasir Rajput"
                    width="56"
                    height="56"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </span>
              </div>

              <dl className="divide-y divide-[#D8DCE3] dark:divide-[#262B35]">
                {SPECS.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between gap-4 py-2.5"
                  >
                    <dt className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#565C6B] dark:text-[#9AA2B1] shrink-0">
                      {spec.label}
                    </dt>
                    <dd className="font-mono text-xs sm:text-[13px] text-[#12151B] dark:text-[#E9ECF2] text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}

                <div className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#565C6B] dark:text-[#9AA2B1]">
                    Status
                  </dt>
                  <dd className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="font-mono text-xs sm:text-[13px] text-emerald-600 dark:text-emerald-400">
                      Open to opportunities
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </SpecFrame>
        </div>
      </div>
    </section>
  );
};

export default Hero;
