"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const techStacks = [
  ["Linux", "Bash", "Python", "SAGE", "Fortinet", "VLANs", "SAP"],
];

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="space-y-16">
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            {t.experience.title_part1} <span className="text-primary">{t.experience.title_highlight}</span>{t.experience.title_part2}
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            {t.experience.description}
          </p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {t.experience.items.map((exp, index) => (
            <div key={exp.period} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                <Calendar className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border/50 bg-secondary/20 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <time className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </time>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.company}</span>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      {task}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {techStacks[index].map(t => (
                    <Badge key={t} variant="outline" className="text-[10px] uppercase tracking-wider">{t}</Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
