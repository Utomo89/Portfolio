// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/Utomo89",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/prasetyo-tri-utomo-b9a619382/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:prasetyotriutomo63@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-10 px-6 md:px-20 overflow-hidden border-t border-gray-700/30">
      {/* Background subtle aurora */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/30 to-transparent opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
        {/* Nama atau Logo */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-semibold text-sky-400"
        >
          © {new Date().getFullYear()} Prasetyo
        </motion.h3>

        {/* Sosial Media */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-6"
        >
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-all transform hover:scale-110"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Pesan kecil */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm text-gray-500 max-w-lg"
        >
          Built with ❤️ using React & Tailwind CSS — Designed by You.
        </motion.p>
      </div>

    </footer>
  );
}
