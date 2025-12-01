// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
// import logo from "../assets/logo.png";
import bnsp from "../assets/bnsp.svg";
import kominfo from "../assets/magang.svg";
import revou from "../assets/Revou.svg";
import uisi from "../assets/uisi.svg";
import unitomo from "../assets/Unitomo.svg";

export default function Certifications() {
  const certifications = [
    {
      title: "Workshop Iconix Software Rewuirement & Software Modelling",
      issuer: "Pusat Pendidikan Dan Pelatihan Unitomo",
      year: "2023",
      logo: unitomo,
      link: "https://drive.google.com/file/d/1koMfP9gUWEt0Edf5TYb2s8XKl1BZicHd/view?usp=sharing",
    },
    {
      title: "Seminar Hybrid: Overthingking Artificial Intelligence(AI)",
      issuer: "Universitas Internasional Semen Indonesia",
      year: "2024",
      logo: uisi,
      link: "https://drive.google.com/file/d/12BGo8_xQDQgvjpieV99Ka3MxmIEY-zmp/view?usp=sharing",
    },
    {
      title: "Internship BPSDMP Kominfo",
      issuer: "BPSDMP Kominfo Surabaya",
      year: "2024",
      logo: kominfo,
      link: "https://drive.google.com/file/d/1ZvbWJRsXLg5r48U52C8ilsWpuBf9nBG7/view?usp=sharing",
    },
    {
      title: "Web Programming Cettificate",
      issuer: "LSP Unitomo & BNSP",
      year: "2025",
      logo: bnsp,
      link: "https://drive.google.com/file/d/1ym3GoSyYWOHioONYXrXJRXjCkbLIpIFu/view?usp=sharing",
    },
    {
      title: "Coding Camp - Intro to Software Engineering",
      issuer: "Revou",
      year: "2025",
      logo: revou,
      link: "https://drive.google.com/file/d/1W4pZHbnJdW1KqBe-S_3gcqzSFc0om1H4/view?usp=sharing",
    },
    {
      title: "Coding Camp - Intro to Data Analytics",
      issuer: "Revou",
      year: "2025",
      logo: revou,
      link: "https://drive.google.com/file/d/1hV4b5P6lOMGiPQCLjTJRgTxrq4lbobRf/view?usp=sharing",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const certificationsPerPage = 4;
  const totalPages = Math.ceil(certifications.length / certificationsPerPage);

  const indexOfLastCert = currentPage * certificationsPerPage;
  const indexOfFirstCert = indexOfLastCert - certificationsPerPage;
  const currentCertifications = certifications.slice(indexOfFirstCert, indexOfLastCert);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section
      id="certifications"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-24 text-gray-100 overflow-hidden"
    >
      {/* Background Gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 animate-aurora opacity-40 mix-blend-overlay"></div>
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
        Certifications
      </motion.h2>

      {/* Grid Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {currentCertifications.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-sky-400/10 border border-sky-400/20 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 backdrop-blur-sm hover:bg-sky-400/20 transition-all shadow-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-lg p-3">
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-sky-300 mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-300 text-sm">{cert.issuer}</p>
              <p className="text-gray-400 text-xs mt-1">{cert.year}</p>
              <a
                href={cert.link}
                className="inline-block mt-3 text-sm text-sky-400 hover:underline"
                target="_blank"
              >
                View Certificate →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-4 z-10">
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

      {/* Gradasi ke bawah */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-900"></div>
    </section>
  );
}
