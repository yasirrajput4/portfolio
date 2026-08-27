import { useForm, ValidationError } from "@formspree/react";
import { FiSend, FiCheckCircle, FiMapPin, FiMail } from "react-icons/fi";

const FIELD_CLASS =
  "w-full bg-transparent border-0 border-b border-[#D8DCE3] dark:border-[#262B35] py-2.5 text-[#12151B] dark:text-[#E9ECF2] placeholder:text-[#565C6B]/50 dark:placeholder:text-[#9AA2B1]/40 focus:outline-none focus:border-[#2F6FED] dark:focus:border-[#5C8CFF] transition-colors duration-200 text-sm";

function ContactForm() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  return (
    <section
      id="contact"
      className="bg-[#F4F5F7] dark:bg-[#0B0E13] text-[#12151B] dark:text-[#E9ECF2] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2F6FED] dark:text-[#5C8CFF] mb-3">
          Contact
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight mb-14">
          Let's build something
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
          {/* Contact info */}
          <div>
            <p className="text-[#565C6B] dark:text-[#9AA2B1] text-base leading-relaxed mb-8">
              Have a project in mind or just want to say hi? Send a message and
              I'll get back to you shortly.
            </p>

            <dl className="space-y-4 border-t border-[#D8DCE3] dark:border-[#262B35] pt-6">
              <div className="flex items-center gap-3">
                <FiMail className="text-[#2F6FED] dark:text-[#5C8CFF] shrink-0" />
                <dd className="font-mono text-sm">rajputyasir2005@gmail.com</dd>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-[#2F6FED] dark:text-[#5C8CFF] shrink-0" />
                <dd className="font-mono text-sm">Ahmedabad, India</dd>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div>
            {state.succeeded ? (
              <div className="flex flex-col items-start justify-center py-10 text-left space-y-3 animate-fade-in">
                <FiCheckCircle className="text-4xl text-emerald-500 dark:text-emerald-400" />
                <h3 className="text-lg font-semibold">
                  Message sent successfully
                </h3>
                <p className="text-[#565C6B] dark:text-[#9AA2B1] text-sm max-w-sm">
                  Thanks for reaching out. I've received your message and will
                  get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="font-mono text-[11px] tracking-widest uppercase text-[#565C6B] dark:text-[#9AA2B1] mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className={FIELD_CLASS}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="font-mono text-[11px] tracking-widest uppercase text-[#565C6B] dark:text-[#9AA2B1] mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className={FIELD_CLASS}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="font-mono text-[11px] tracking-widest uppercase text-[#565C6B] dark:text-[#9AA2B1] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    required
                    rows="4"
                    className={`${FIELD_CLASS} resize-none`}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center justify-center gap-2 bg-[#2F6FED] hover:bg-[#2558C4] text-white font-medium rounded-md px-6 py-3 text-sm transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send message
                      <FiSend className="text-xs" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
