"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Network, Activity, ShieldCheck, Database, Cpu } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const icons = [Terminal, Network, Activity, ShieldCheck, Database];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            {t.about.title_part1} <span className="text-primary">{t.about.title_highlight}</span> <br /> 
            {t.about.title_part2}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {t.about.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.about.expertise.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-secondary/30 border-border/50 hover:border-primary/50 transition-colors group select-none">
                  <CardHeader>
                    <Icon className="w-10 h-10 text-primary mb-2 transition-colors" />
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
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
