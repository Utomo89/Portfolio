import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import GooeyNav from "./ui/gooeyNav/GooeyNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // =============================
  // SCROLL SPY (IntersectionObserver)
  // =============================
  useEffect(() => {
    const sections = items.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-lg shadow-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-pink-400">
          Prasetyo<span className="text-sky-400">Portfolio</span>
        </h1>

        {/* DESKTOP MENU WITH GOOEYNAV */}
        <div className="hidden md:block relative w-[400px]">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            activeIndex={activeIndex}  // ← UPDATE PENTING
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-300">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors ${
                    activeIndex === index
                      ? "text-pink-400 font-semibold"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
