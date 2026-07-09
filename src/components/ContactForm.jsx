import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FiSend, FiCheckCircle } from "react-icons/fi";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwprnqrv");

  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center transition-colors duration-300"
      /* Removed redundant inline style since Montserrat is globally loaded via Tailwind v4 */
    >
      {/* Section Heading remains fixed */}
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">
        Get in Touch
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-10 text-center text-sm sm:text-base max-w-md">
        Have a project in mind or want to chat? Drop me a message!
      </p>

      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200/80 dark:border-gray-700/50 p-6 sm:p-8 transition-all duration-300">
        {state.succeeded ? (
          /* Elegant Success Message Inside the Same Container */
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-fade-in">
            {/* Fixed: Replaced tacky animate-bounce with premium custom-eased smooth pulse */}
            <FiCheckCircle className="text-5xl text-green-500 dark:text-green-400 animate-[pulse_2s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-sm">
              Thanks for reaching out, Yasir. I've received your text and will
              get back to you shortly.
            </p>
          </div>
        ) : (
          /* Contact Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-700 dark:text-gray-200 text-sm font-medium mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[rgb(33,150,243)] focus:border-transparent transition-all duration-200 text-sm"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 dark:text-gray-200 text-sm font-medium mb-1.5"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[rgb(33,150,243)] focus:border-transparent transition-all duration-200 text-sm"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-700 dark:text-gray-200 text-sm font-medium mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                required
                rows="4"
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[rgb(33,150,243)] focus:border-transparent resize-none transition-all duration-200 text-sm"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 bg-[rgb(33,150,243)] hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {state.submitting ? (
                "Sending..."
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend className="text-xs" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;