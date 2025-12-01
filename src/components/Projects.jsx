// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// import image
import potato from "../assets/TA.svg";
import pelatihan from "../assets/magang1.jpg";
import facereplacement from "../assets/face.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Potato Leaf Disease Detection System",
      description: "A web-based system that uses CNN to detect potato leaf diseases through digital image processing. The API is deployed on Hugging Face, while the frontend interface is built using Next.js, allowing users to upload leaf images and receive automatic predictions with accuracy results.",
      tech: ["Next.js with AI V0", "Tailwind", "Huggingface", "CNN", "Python","Google Colab"],
      image: potato,
      link: "https://potatota.vercel.app/",
    },
    {
      title: "Rumah Inovatif Training Registration System is a web-based platform",
      description: "The Rumah Inovatif Training Registration System is a web-based information system developed to streamline the management and registration processes for training programs. This platform enables administrators to efficiently organize and monitor training activities, while providing participants with a convenient and accessible online registration experience.",
      tech: ["Laravel", "Bootstrap", "SQLite"],
      image: pelatihan,
      link: "https://github.com/Utomo89/rumah-inovatif",
    },
    {
      title: "Face Replacment",
      description: "Built an AI-powered system using Python and OpenCV to detect and swap faces in images with realistic alignment and blending, showcasing skills in computer vision and image processing.",
      tech: ["insightface", "Python", "SQLionnxruntimete", "opencv-python", "numpy"],
      image: facereplacement,
      link: "https://github.com/Utomo89/Face_Replacment",
    },
  ];
    // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-24 text-gray-100 overflow-hidden"
    >
      {/* Background gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 animate-aurora opacity-50 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 text-sky-400 relative z-10"
      >
        Projects
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {currentProjects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-sky-400/10 border border-sky-400/20 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-sky-400/20 transition-all shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-sky-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-sky-400/10 border border-sky-400/20 rounded-full text-sky-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-sky-400 text-sm font-medium hover:underline"
                    target="_blank"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border border-sky-400/30 transition-all ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-sky-400/10 text-sky-300"
              }`}
            >
              ← Prev
            </button>

            <span className="text-gray-400 text-sm flex items-center">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md border border-sky-400/30 transition-all ${
                currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-sky-400/10 text-sky-300"
              }`}
            >
              Next →
            </button>
          </div>
        )}
      </div>
      {/* end pagination control */}

      {/* Transisi ke bawah */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-900"></div>
    </section>
  );
}
