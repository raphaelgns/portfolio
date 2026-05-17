"use client";

import { motion } from "framer-motion";
import { 
  SiLinux, SiDocker, SiPostgresql, SiGit, SiPython, SiGnubash 
} from "react-icons/si";
import { useLanguage } from "@/components/language-provider";

const mainSkills = [
  { name: "Linux", icon: SiLinux },
  { name: "Python", icon: SiPython },
  { name: "Bash", icon: SiGnubash },
  { name: "PostgreSQL", icon: SiPostgresql },
];

const learningSkills = [
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
];

export function Stack() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-secondary/10 overflow-hidden">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            {t.skills.title_part1} <span className="text-primary">{t.skills.title_highlight}</span>{t.skills.title_part2}
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        <div className="flex flex-col items-center gap-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            {mainSkills.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-24 h-24 rounded-2xl bg-background border border-border/50 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] group-hover:-translate-y-1">
                  <tech.icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8 text-center w-full">
            <h3 className="text-xl font-semibold text-muted-foreground uppercase tracking-[0.2em]">
              {t.skills.learning}
            </h3>
            <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto">
              {learningSkills.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex flex-col items-center gap-4 group opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50">
                    <tech.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
