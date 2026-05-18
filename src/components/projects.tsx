"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Terminal, Zap, Search, Server, Cpu } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const icons = [Terminal, Zap, Search, Server, Cpu];
const colors = [
  "bg-blue-500/10 text-blue-500",
  "bg-yellow-500/10 text-yellow-500",
  "bg-green-500/10 text-green-500",
  "bg-purple-500/10 text-purple-500",
  "bg-orange-500/10 text-orange-500",
];

const techStacks = [
  ["Bash", "Linux", "Crontab", "SAGE System"],
  ["Python", "Automation", "SAP", "mitigating errors"],
  ["Networking", "Security", "Auditing"],
  ["Linux", "NAS", "OpenMediaVault", "Security"],
  ["ESP32", "C++", "Robotics", "Hardware"],
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight md:text-5xl text-center md:text-left"
            >
              {t.projects.title_part1} <span className="text-primary">{t.projects.title_highlight}</span>{t.projects.title_part2}
            </motion.h2>
            <p className="text-lg text-muted-foreground max-w-xl text-center md:text-left">
              {t.projects.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-secondary/20 border-border/50 overflow-hidden group hover:border-primary/30 transition-all duration-300 select-none">
                  <CardHeader className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors[index % colors.length]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      {project.status && (
                        <Badge variant="outline" className="border-primary/50 text-primary animate-pulse font-bold text-[10px]">
                          {project.status}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="text-base mt-2 line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">{t.projects.problem}</h4>
                      <p className="text-muted-foreground text-sm line-clamp-3">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">{t.projects.impact}</h4>
                      <p className="text-foreground text-sm font-medium line-clamp-3">{project.impact}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {techStacks[index % techStacks.length].map(t => (
                        <Badge key={t} variant="secondary" className="bg-background/50">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
