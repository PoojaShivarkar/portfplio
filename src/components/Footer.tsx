import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 px-6 border-t border-border bg-background overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 tracking-tighter"
            >
              {import.meta.env.VITE_USER_NAME}
            </motion.div>
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
              Crafting scalable digital experiences with a focus on performance, 
              accessibility, and user-centric design.
            </p>
            <div className="flex gap-4">
              <SocialLink href={import.meta.env.VITE_USER_LINKEDIN} icon={<Linkedin className="w-5 h-5" />} />
              {/* <SocialLink href={`mailto:${import.meta.env.VITE_USER_EMAIL}`} icon={<Mail className="w-5 h-5" />} /> */}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Navigation</h4>
            <ul className="space-y-4">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#awards">Awards</FooterLink>
              <FooterLink href="#experience">Experience</FooterLink>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                {import.meta.env.VITE_USER_EMAIL}
              </li>
              <li className="text-muted-foreground">
                {import.meta.env.VITE_USER_LOCATION}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {import.meta.env.VITE_USER_NAME}. All rights reserved.
          </p>
          
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-bold"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.1 }}
      className="p-3 rounded-2xl bg-accent text-muted-foreground hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/20 shadow-lg"
    >
      {icon}
    </motion.a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a 
        href={href} 
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-2 group"
      >
        <span className="w-0 h-px bg-blue-500 transition-all group-hover:w-4" />
        {children}
      </a>
    </li>
  );
}
