// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import GradientText from "./ui/text-gradient/GradientText.jsx";
import TextType from './ui/text-type/TextType';
import ShinyText from './ui/shiny-text/ShinyText';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // === Efek Gerak Cahaya Mengikuti Kursor ===
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // === Efek Bintang Jatuh ===
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 40;
    const colors = ["#f9a8d4", "#38bdf8", "#c084fc", "#a5f3fc"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Inisialisasi bintang
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars) {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(star.x, star.y, star.x + star.length, star.y + star.length);
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, "transparent");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.globalAlpha = star.opacity;
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.length, star.y + star.length);
        ctx.stroke();

        // Gerakan diagonal jatuh
        star.x += star.speed;
        star.y += star.speed;

        // Reset posisi setelah keluar layar
        if (star.x > canvas.width || star.y > canvas.height) {
          star.x = Math.random() * canvas.width;
          star.y = -10;
          star.length = Math.random() * 80 + 20;
          star.speed = Math.random() * 4 + 2;
        }
      }

      requestAnimationFrame(draw);
    }

    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center text-gray-100 overflow-hidden"
    >
      {/* === BACKGROUND AURORA === */}
<div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
  <div className="absolute inset-0 animate-aurora opacity-50 mix-blend-overlay"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900"></div>
</div>
<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-900"></div>


      {/* === CANVAS BINTANG JATUH === */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* === CURSOR FOLLOW LIGHT EFFECT === */}
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-500/20 via-sky-400/20 to-purple-400/20 blur-3xl transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
        }}
      />

      {/* === CENTERED TEXT CONTENT === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I’m <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class">
        Prasetyo Tri Utomo</GradientText>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-400 mb-6">
        <TextType 
  text={["Web Design", "Front-end Developer", "Web Development"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="_"
/>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
        <ShinyText 
  text="Driven by curiosity, crafting clean and meaningful digital experiences." 
  disabled={false} 
  speed={3} 
  className='custom-class' 
/>
        </p>

        {/* === BUTTONS === */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
             href="https://drive.google.com/file/d/1SZgo7WQTVJee5DhTEhPlcR3Z2sTfJ2e7/view?usp=sharing"
            target="_blank"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-400 text-white font-medium transition-transform hover:scale-105"
          >
            <Download size={18} /> Download CV
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-gray-900 font-medium transition-transform hover:scale-105"
          >
            <Send size={18} /> Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
