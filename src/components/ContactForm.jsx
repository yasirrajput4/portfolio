import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwprnqrv");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center transition-colors duration-300"
      >
        <p className="text-green-600 dark:text-green-400 text-center mt-6 text-lg font-medium">
          Thanks for your message! I will get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center transition-colors duration-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Get in Touch
      </h2>

      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 transition-colors duration-300">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-gray-700 dark:text-gray-200 font-medium mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-700 dark:text-gray-200 font-medium mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-gray-700 dark:text-gray-200 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none transition text-sm"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 bg-[rgb(33,150,243)] hover:bg-[#41474b] text-white font-semibold rounded-md shadow-sm transition text-sm cursor-pointer"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
