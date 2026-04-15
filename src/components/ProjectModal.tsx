import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ProjectModal() {
  const { selectedProject, isOpen, closeProject } = useProjectStore();

  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-50 w-full max-w-5xl max-h-[90vh] bg-card border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            <button
              onClick={closeProject}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-background/50 backdrop-blur-md border border-border hover:bg-accent transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="relative h-64 md:h-[400px] lg:h-[450px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 right-6 md:right-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 tracking-tight">{selectedProject.title}</h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-blue-400 font-medium">{selectedProject.role}</p>
                  </motion.div>
                </div>
              </div>

              <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 md:gap-16">
                <div className="space-y-10">
                  <section>
                    <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                      <span className="w-6 md:w-8 h-1 bg-blue-500 rounded-full" />
                      Overview
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                      <span className="w-6 md:w-8 h-1 bg-blue-500 rounded-full" />
                      Key Contributions
                    </h3>
                    <ul className="space-y-4 md:space-y-5">
                      {selectedProject.contributions.map((item, i) => (
                        <li key={i} className="flex gap-3 md:gap-4 text-muted-foreground text-base md:text-lg">
                          <CheckCircle2 className="w-5 h-5 md:w-6 h-6 text-blue-500 shrink-0 mt-1" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {selectedProject.problem && (
                    <section>
                      <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-6 md:w-8 h-1 bg-blue-500 rounded-full" />
                        The Problem
                      </h3>
                      <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </section>
                  )}

                  {selectedProject.architecture && (
                    <section>
                      <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-6 md:w-8 h-1 bg-blue-500 rounded-full" />
                        Solution Architecture
                      </h3>
                      <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                        {selectedProject.architecture}
                      </p>
                    </section>
                  )}

                  {selectedProject.features && (
                    <section>
                      <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-6 md:w-8 h-1 bg-blue-500 rounded-full" />
                        Key Features
                      </h3>
                      <div className="grid gap-6">
                        {selectedProject.features.map((feature, i) => (
                          <div key={i} className="p-6 rounded-2xl bg-accent/30 border border-border/50">
                            <h4 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h4>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {selectedProject.challengesSolutions && (
                    <section>
                      <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-6 md:w-8 h-1 bg-blue-500 rounded-full" />
                        Challenges & Solutions
                      </h3>
                      <div className="space-y-6">
                        {selectedProject.challengesSolutions.map((item, i) => (
                          <div key={i} className="space-y-3">
                            <div className="flex gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                              <p className="font-bold text-foreground/90 text-sm md:text-base">{item.challenge}</p>
                            </div>
                            <div className="flex gap-3 pl-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                              <p className="text-muted-foreground text-sm md:text-base">{item.solution}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {selectedProject.impact && (
                    <section>
                      <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-6 md:w-8 h-1 bg-blue-500 rounded-full" />
                        Impact
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.impact.map((item, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground text-sm md:text-base">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {selectedProject.learnings && (
                    <section>
                      <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-6 md:w-8 h-1 bg-blue-500 rounded-full" />
                        What I Learned
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.learnings.map((item, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground text-sm md:text-base">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>

                <div className="space-y-10">
                  <section>
                    <h3 className="text-lg md:text-xl font-bold mb-6 text-foreground/80 uppercase tracking-widest">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {selectedProject.tech.map((t, i) => (
                        <Badge key={i} variant="secondary" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold bg-accent/50 hover:bg-accent transition-colors">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </section>

                  <section className="flex flex-col gap-4 pt-6 border-t border-border">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground/80 uppercase tracking-widest">Project Links</h3>
                    {selectedProject.links ? (
                      <div className="flex flex-col gap-4">
                        {selectedProject.links.map((link, idx) => (
                          <div key={idx} className="space-y-2">
                            <a 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center rounded-2xl h-12 md:h-14 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] font-bold text-base md:text-lg shadow-lg shadow-primary/20"
                            >
                              {link.label} <ExternalLink className="ml-2 w-4 h-4 md:w-5 h-5" />
                            </a>
                            {link.restricted && (
                              <p className="text-[10px] md:text-xs text-center text-orange-500 font-medium flex items-center justify-center gap-1.5">
                                <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-orange-500 animate-pulse" />
                                {link.restricted}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                      <div className="space-y-2">
                        <a 
                          href={selectedProject.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center rounded-2xl h-12 md:h-14 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] font-bold text-base md:text-lg shadow-lg shadow-primary/20"
                        >
                          Live Preview <ExternalLink className="ml-2 w-4 h-4 md:w-5 h-5" />
                        </a>
                        {selectedProject.restricted && (
                          <p className="text-[10px] md:text-xs text-center text-orange-500 font-medium flex items-center justify-center gap-1.5">
                            <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-orange-500 animate-pulse" />
                            {selectedProject.restricted}
                          </p>
                        )}
                      </div>
                    )}
                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-2xl h-12 md:h-14 border border-border bg-background hover:bg-accent transition-all hover:scale-[1.02] active:scale-[0.98] font-bold text-base md:text-lg"
                      >
                        Source Code <Github className="ml-2 w-4 h-4 md:w-5 h-5" />
                      </a>
                    )}
                  </section>
                </div>
              </div>
              <div className="h-20" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
