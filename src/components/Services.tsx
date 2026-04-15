import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Layout, Database, Terminal, Smartphone, Globe } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web applications built with modern frameworks like React, Node.js, and Java Spring Boot.",
    icon: <Code2 className="w-10 h-10 text-blue-500" />,
    features: ["Custom Web Apps", "E-commerce Solutions", "API Development"]
  },
  {
    title: "UI/UX Engineering",
    description: "Crafting beautiful, intuitive, and highly interactive user interfaces with a focus on performance and accessibility.",
    icon: <Layout className="w-10 h-10 text-purple-500" />,
    features: ["Design Systems", "Responsive Design", "Interactive Prototypes"]
  },
  {
    title: "System Design",
    description: "Architecting scalable, robust, and secure backend systems and microservices for high-traffic applications.",
    icon: <Database className="w-10 h-10 text-pink-500" />,
    features: ["Microservices", "Database Optimization"]
  }
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-accent/10">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Specialized <span className="text-muted-foreground">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Delivering high-quality software solutions tailored to your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full bg-background/40 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-10 flex flex-col h-full">
                <div className="mb-8 p-4 rounded-2xl bg-accent group-hover:bg-primary/10 transition-colors w-fit">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed flex-1">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
