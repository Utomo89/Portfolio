// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Instagram } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-sky-400" />,
      title: "Email",
      value: "prasetyotriutomo63@gmail.com",
      link: "mailto:prasetyotriutomo63@gmail.com",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-sky-400" />,
      title: "LinkedIn",
      value: "linkedin.com/in/prasetyotriutomo",
      link: "https://www.linkedin.com/in/prasetyo-tri-utomo-b9a619382/",
    },
    {
      icon: <Github className="w-6 h-6 text-sky-400" />,
      title: "GitHub",
      value: "github.com/Utomo89",
      link: "https://github.com/Utomo89",
    },
    {
      icon: <Instagram className="w-6 h-6 text-sky-400" />,
      title: "Instagram",
      value: "instagram.com/prasetyotriu_6",
      link: "https://www.instagram.com/prasetyotriu_6?igsh=MWFxd3BoMW0zanpiZg==",
    },
    {
      icon: <MapPin className="w-6 h-6 text-sky-400" />,
      title: "Location",
      value: "Surabaya, Indonesia",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-24 text-gray-100 overflow-hidden"
    >
      {/* Background Gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
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
        Get In Touch
      </motion.h2>

      {/* Kontak Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {contactInfo.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 bg-sky-400/10 border border-sky-400/20 rounded-xl p-6 backdrop-blur-sm hover:bg-sky-400/20 transition-all shadow-lg"
          >
            <div className="p-3 bg-gray-800/60 rounded-lg">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-sky-300">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Pesan Penutup */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-gray-400 text-center max-w-2xl z-10"
      >
        I’m always open to new opportunities, collaborations, or just a friendly chat.
        <br /> Let’s connect and create something great together 🚀
      </motion.p>

      {/* Gradasi ke bawah */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-900"></div>
    </section>
  );
}
