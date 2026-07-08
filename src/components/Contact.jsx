export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="text-gray-400 mb-6">
        Let’s connect! Reach me via email or social links below.
      </p>
      <div className="flex justify-center gap-6">
        <a href="mailto:yasir@example.com" className="hover:text-indigo-400">
          Email
        </a>
        <a
          href="https://github.com/yasirrajput4"
          className="hover:text-indigo-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yasirrajput"
          className="hover:text-indigo-400"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
