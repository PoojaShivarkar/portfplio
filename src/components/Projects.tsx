import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/constants/projects";
import { useProjectStore } from "@/store/useProjectStore";

export default function Projects() {
  const openProject = useProjectStore((state) => state.openProject);

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-20 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium"
        >
          Case Studies
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Premium <span className="text-muted-foreground">Digital Solutions</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A selection of high-impact projects delivered for global clients and startups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              className="group relative overflow-hidden bg-background/40 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
              onClick={() => openProject(project)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  {project.restricted && (
                    <div className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-500 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                      {project.restricted}
                    </div>
                  )}
                </div>

                <div className="absolute top-6 right-6">
                  <div className="p-3 rounded-full bg-background/50 backdrop-blur-md border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <CardContent className="p-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, j) => (
                    <span key={j} className="text-[10px] uppercase tracking-widest font-bold text-blue-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
                
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    {project.role}
                  </span>
                  <Button variant="link" className="p-0 h-auto text-blue-500 font-bold">
                    View Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
