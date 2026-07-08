export default function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind",
    "Firebase",
    "GitHub",
    "CSS",
  ];
  return (
    <section id="skills" className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition transform hover:scale-105 cursor-pointer w-full"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
