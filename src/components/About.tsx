import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Award, Code2 } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "4+", icon: <Briefcase className="w-6 h-6 text-blue-500" /> },
  { label: "Projects Delivered", value: "10+", icon: <Award className="w-6 h-6 text-purple-500" /> },
  { label: "Client Satisfaction", value: "80%", icon: <Users className="w-6 h-6 text-pink-500" /> },
];

const skills = [
  { name: "Frontend (React, Redux tool kit, Redux, Tailwind, Saas, Mixins, CSS)", level: 90 },
  { name: "Backend (Node.js, Express js, Java, Spring Boot)", level: 90 },
  { name: "Database (MongoDB, MySQL, PostgreSQL)", level: 85 },
  { name: "DevOps (AWS(EC2,S3), Docker, CI/CD)", level: 50 },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium">
            About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Full Stack Developer <br />
            <span className="text-muted-foreground">with a focus on quality.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a Full Stack Web Developer with strong skills in both frontend and backend technologies. 
            I have successfully delivered end-to-end solutions in various domains, ensuring high-quality 
            project outcomes through effective collaboration and innovative problem solving. 
            My experience ranges from designing secure APIs to managing complex project lifecycles.
          </p>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="font-bold">Star of the Month — Neuro Spark Works Solution Pvt. Ltd.</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Recognized multiple times for outstanding performance, demonstrating strong ownership, 
              leadership, accountability, and consistent delivery of high-quality results. 
              Appreciated for taking initiative, mentoring team members, and aligning effectively 
              with organizational goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <Card key={i} className="bg-background/40 backdrop-blur-sm border-border">
                <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                  {stat.icon}
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Technical Expertise</h3>
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
