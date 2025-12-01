// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function ExperienceEducation() {
  const education = [
    {
      title: "Bachelor of Informatics engineering",
      institution: "Dr.Soetomo University",
      year: "2021 - 2025",     
    },
  ];

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "BPSDMP Kominfo Surabaya",
      year: "April 2024 - August 2024",
      desc: "building a training registration website, especially the front end side.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-24 text-gray-100 overflow-hidden"
    >
      {/* Background Gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 animate-aurora opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900"></div>
      </div>

      {/* Judul Section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 text-sky-400 relative z-10"
      >
        Experience & Education
      </motion.h2>

      {/* Container Card */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-sky-400/10 border border-sky-400/20 rounded-2xl p-8 backdrop-blur-sm hover:bg-sky-400/20 transition-all shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-sky-400" />
            <h3 className="text-2xl font-semibold text-sky-300">Education</h3>
          </div>

          <ul className="space-y-6">
            {education.map((edu, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-sky-400/40 pl-4 relative"
              >
                <span className="absolute -left-2 top-1 w-3 h-3 bg-sky-400 rounded-full"></span>
                <h4 className="text-lg font-medium text-sky-300">
                  {edu.title}
                </h4>
                <p className="text-gray-300 text-sm">{edu.institution}</p>
                <p className="text-gray-400 text-xs mb-1">{edu.year}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-purple-400/10 border border-purple-400/20 rounded-2xl p-8 backdrop-blur-sm hover:bg-purple-400/20 transition-all shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-semibold text-purple-300">
              Experience
            </h3>
          </div>

          <ul className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-purple-400/40 pl-4 relative"
              >
                <span className="absolute -left-2 top-1 w-3 h-3 bg-purple-400 rounded-full"></span>
                <h4 className="text-lg font-medium text-purple-300">
                  {exp.title}
                </h4>
                <p className="text-gray-300 text-sm">{exp.company}</p>
                <p className="text-gray-400 text-xs mb-1">{exp.year}</p>
                <p className="text-gray-400 text-sm">{exp.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Gradasi ke bawah */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-900"></div>
    </section>
  );
}
