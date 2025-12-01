// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Linkedin, Mail, Instagram } from "lucide-react";
import ElectricBorder from './ui/electricBorder/ElectricBorder';
import profile from '../assets/profil-4.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-24 text-gray-100 overflow-x-hidden"
    >
      {/* === Background === */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 animate-aurora opacity-50 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-900"></div>

      {/* === Header === */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 text-sky-400 relative z-10"
      >
        About Me
      </motion.h2>


      {/* === Main Layout === */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-start gap-10 md:gap-20">
        {/* === Left (Profile Card) === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
         
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
              className="hover:scale-105 transition-transform relative w-64 md:w-72 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            >
              <img
                src={profile}
                alt="Profile"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 text-center border-t border-sky-400/20">
                <h3 className="text-xl font-semibold text-sky-400">Tomo</h3>
                <p className="text-gray-300 text-sm">Frontend Developer | UI/UX Designer</p>
              </div>
            </ElectricBorder>


        </motion.div>

        {/* === Right (Text Description) === */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Blending Design & Technology for Impactful User Experience
          </h3>

          <p className="text-gray-300 leading-relaxed mb-4">
            I’m a Software Engineer & AI Enthusiast with a strong foundation in Informatics Engineering (GPA 3.69),
            passionate about developing intelligent, efficient, and scalable applications that integrate modern software engineering principles
            with artificial intelligence.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            My development approach focuses on writing clean, maintainable code and leveraging technologies such as Python, TensorFlow, and React to build data-driven solutions. I emphasize automation, model optimization, and system reliability to deliver impactful and innovative digital products.
          </p>
        </motion.div>
      </div>


      {/* === Stats Cards === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-center relative z-10"
      >
        {[
          { title: "3", subtitle: "Completed Projects" },
          { title: "1", subtitle: "Internship Experiences" },
          { title: "<1", subtitle: "Years Experience" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800/70 backdrop-blur-md border border-sky-400/30 rounded-2xl py-6 shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:scale-105 transition-transform"
          >
            <h4 className="text-3xl font-bold text-sky-400">{item.title}</h4>
            <p className="text-gray-300 mt-1">{item.subtitle}</p>
          </div>
        ))}
      </motion.div>

      {/* === Social Links === */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-8 mt-10 text-gray-300 relative z-10"
      >
        <a
          href="#"
          target="_blank"
          className="flex items-center gap-2 hover:text-sky-400 transition-colors"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
        <a
          href="#"
          target="_blank"
          className="flex items-center gap-2 hover:text-pink-400 transition-colors"
        >
          <Instagram size={20} /> Instagram
        </a>
        <a
          href="mailto:youremail@example.com"
          target=""
          className="flex items-center gap-2 hover:text-red-400 transition-colors"
        >
          <Mail size={20} /> Email
        </a>
      </motion.div>
    </section>
  );
}
