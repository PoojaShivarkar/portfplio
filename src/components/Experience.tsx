import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    year: "Oct 2022 – present",
    role: "Software Developer",
    company: "Neuro Spark Works Solution Pvt Ltd",
    location: import.meta.env.VITE_USER_LOCATION,
    description: "Led the development of both web and mobile applications using modern technologies, ensuring scalable and highperformance solutions.",
    achievements: [
      "Managed full project lifecycles from planning and development to deployment and post-launch support.",
      "Guided and mentored junior developers and interns, supporting their growth and ensuring alignment with project goals.",
      "Conducted regular code reviews to maintain code quality, consistency, and adherence to best practices.",
      "Cooperated with UI/UX designers to refine user interfaces and enhance overall user experience.",
      "Took ownership of release management, including staging, deployment, and client demos.",
      "Ensured timely and successful delivery of projects by managing sprints, tasks, and timelines using Agile methodologies.",
      "Actively communicated with clients to understand requirements, provide technical input, and deliver tailored solutions."
    ]
  },
  {
    year: "Apr 2022 – Aug 2022",
    role: "Java Developer",
    company: "Brainwave Consulting Pvt Ltd",
    location: import.meta.env.VITE_USER_LOCATION,
    description: "Improved and maintained web applications using Spring Boot, SQL, and Hibernate.",
    achievements: [
      "Designed and integrated RESTful APIs to ensure smooth and reliable communication between system components.",
      "Participated in development meetings and contributed ideas to improve system functionality and efficiency.",
      "Worked closely with senior developers to define and implement software features based on client requirements.",
      "Worked together with cross-functional teams to deliver high-quality backend solutions aligned with project goals."
    ]
  },
  {
    year: "Nov 2021 – Feb 2022",
    role: "Java Engineer Internship",
    company: "Yesdo SoftIndia Pvt Ltd",
    location: import.meta.env.VITE_USER_LOCATION,
    description: "Maintained and enhanced a Spring Boot-based web application, resolving backend bugs to improve reliability.",
    achievements: [
      "Worked with the team to significantly improve API performance through code refactoring and optimized SQL queries.",
      "Assisted in optimizing existing code and backend architecture for better maintainability and scalability.",
      "Participated in team discussions to ensure alignment with best practices and project requirements."
    ]
  }
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Career <span className="text-muted-foreground">Journey</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A timeline of my professional growth and key milestones in software engineering.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line - Moved to left for consistent left alignment */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12 ml-12 md:ml-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-12 md:-left-20 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              <div className="p-8 rounded-3xl bg-background/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-300 text-left">
                <div className="flex items-center gap-2 mb-4 text-blue-500 font-mono font-bold">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.year}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <div className="text-lg text-muted-foreground font-medium mb-1">{exp.company}</div>
                <div className="text-sm text-muted-foreground/60 mb-6">{exp.location}</div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {exp.achievements.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
