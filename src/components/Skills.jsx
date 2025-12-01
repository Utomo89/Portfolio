// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Skills() {
  const coreSkills = [
"Python",
    "JavaScript",
    "React",
    "TensorFlow / Scikit-learn",
    "Node.js",
    "Tailwind CSS",
    "SQL / SQLite / MySQL / PostgreSQL",
    "Git & GitHub",
  ];
  
  const softSkills = [
    "Communication",
    "Team Collaboration",
    "Problem-Solving",
    "Adaptability",
    "Creativity",
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-24 text-gray-100 overflow-hidden"
    >
      {/* === Background sama dengan section lain === */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 animate-aurora opacity-50 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900"></div>
      </div>

      {/* === Title === */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 text-sky-400 relative z-10"
      >
        My Skills
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-14">
        {/* === Core UI/UX Skills === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white">
            <span className="text-sky-400 mr-2">●</span> Hard Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreSkills.map((skill, i) => (
              <div
                key={i}
                className="bg-sky-400/10 text-sky-100 border border-sky-400/20 rounded-lg px-4 py-2 text-center hover:bg-sky-400/20 transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

        <hr className="border-gray-700" />

         {/* === Core UI/UX Skills === */}
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white">
            <span className="text-sky-400 mr-2">●</span> Soft Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, i) => (
              <div
                key={i}
                className="bg-sky-400/10 text-sky-100 border border-sky-400/20 rounded-lg px-4 py-2 text-center hover:bg-sky-400/20 transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
       
        
      </div>

      {/* === Fade bawah (transisi ke section berikut) === */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-900"></div>
    </section>
  );
}

