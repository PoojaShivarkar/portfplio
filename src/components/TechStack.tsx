import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import { 
  Code2, 
  Database, 
  Smartphone, 
  Wrench,
  Globe,
  Cpu,
  Layers,
  Cloud
} from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    skills: ["React", "TypeScript", "Next.js", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "Zustand", "SASS"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    category: "Backend",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Node.js", "Express", "Java", "Spring Boot", "Supabase", "Firebase", "Prisma", "PostgreSQL", "MongoDB"],
    color: "from-green-500 to-emerald-400",
  },
  {
    category: "Mobile & Architecture",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["React Native", "PWA", "Scalable Architecture"],
    color: "from-purple-500 to-pink-400",
  },
  {
    category: "Tools & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      "Agile", "Jira", "Git", "Bitbucket", "Postman", "Sourcetree", "Figma", 
      "Visual Studio Code", "Sprint Suite Tool", "AWS (EC2, S3)", "Docker", 
      "CI/CD", "Jest", "Storybook"
    ],
    color: "from-orange-500 to-yellow-400",
  },
];

export default function TechStack() {
  return (
    <SectionWrapper id="tech" className="bg-accent/20">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Technical <span className="text-muted-foreground">Expertise</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A comprehensive toolkit of modern technologies used to build high-performance digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techStack.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group"
          >
            <div className="h-full p-8 rounded-3xl bg-background/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-300">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{item.category}</h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-accent text-muted-foreground hover:text-foreground hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
