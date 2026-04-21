import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
    { name: "Awards", href: "#awards" },
  { name: "Tech", href: "#tech" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[110] origin-left"
        style={{ scaleX }}
      />
      
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "py-4 bg-background/70 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 tracking-tighter"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {import.meta.env.VITE_USER_NAME}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                </button>
              ))}
            </div>
            
            <div className="h-6 w-px bg-border" />
            
            <div className="flex items-center gap-4">
              <SocialIcon href={import.meta.env.VITE_USER_LINKEDIN} icon={<Linkedin className="w-4 h-4" />} />
              <SocialIcon href={`mailto:${import.meta.env.VITE_USER_EMAIL}`} icon={<Mail className="w-4 h-4" />} />
              <Button size="sm" className="rounded-full px-6 font-bold" onClick={() => scrollToSection('#contact')}>
                Hire Me
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xl font-bold text-left hover:text-blue-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="flex gap-4 pt-4">
              <SocialIcon href={import.meta.env.VITE_USER_LINKEDIN} icon={<Linkedin className="w-5 h-5" />} />
              <SocialIcon href={`mailto:${import.meta.env.VITE_USER_EMAIL}`} icon={<Mail className="w-5 h-5" />} />
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      {icon}
    </a>
  );
}
