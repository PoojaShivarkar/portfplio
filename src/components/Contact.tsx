import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <SectionWrapper id="contact" className="bg-accent/5">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Let's build something <br />
              <span className="text-muted-foreground">impactful together.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Have a project in mind or just want to chat? Feel free to reach out. 
              I'm always open to discussing new projects and innovative ideas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <ContactInfo 
              icon={<Mail className="w-6 h-6" />} 
              label="Email" 
              value={import.meta.env.VITE_USER_EMAIL} 
              href={`mailto:${import.meta.env.VITE_USER_EMAIL}`}
            />
            <ContactInfo 
              icon={<Linkedin className="w-6 h-6" />} 
              label="LinkedIn" 
              value={import.meta.env.VITE_USER_NAME} 
              href={import.meta.env.VITE_USER_LINKEDIN}
            />
            <ContactInfo 
              icon={<MapPin className="w-6 h-6" />} 
              label="Location" 
              value={import.meta.env.VITE_USER_LOCATION} 
            />
            <ContactInfo 
              icon={<Phone className="w-6 h-6" />} 
              label="Phone" 
              value={import.meta.env.VITE_USER_PHONE} 
            />
          </div>
        </div>

        <Card className="bg-background/40 backdrop-blur-xl border-border shadow-2xl rounded-[2rem] overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground text-lg">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                  <Button variant="outline" size="lg" className="rounded-full px-8" onClick={() => setStatus("idle")}>
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold ml-1">Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your Name" 
                        required 
                        className="h-14 rounded-2xl bg-accent/30 border-border focus:ring-2 focus:ring-blue-500/50 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold ml-1">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="h-14 rounded-2xl bg-accent/30 border-border focus:ring-2 focus:ring-blue-500/50 transition-all" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold ml-1">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="How can I help you?" 
                      required 
                      className="h-14 rounded-2xl bg-accent/30 border-border focus:ring-2 focus:ring-blue-500/50 transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold ml-1">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..." 
                      required 
                      className="min-h-[180px] rounded-2xl bg-accent/30 border-border focus:ring-2 focus:ring-blue-500/50 transition-all p-4" 
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-14 rounded-2xl group text-lg font-bold shadow-lg shadow-blue-500/20" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}

function ContactInfo({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-5 group">
      <div className="p-4 rounded-2xl bg-accent text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/5">
        {icon}
      </div>
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">{label}</div>
        <div className="text-lg font-semibold group-hover:text-blue-500 transition-colors">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
