"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 overflow-hidden lg:flex-row lg:px-12">
      <div className="z-10 w-full max-w-5xl space-y-8 lg:w-2/3 text-center lg:text-left flex flex-col items-center lg:items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl"
        >
          {t.hero.title_part1} <span className="text-primary">Computing Engineer</span> <br />
          {t.hero.title_part2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl text-lg md:text-xl text-muted-foreground"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center lg:justify-start gap-4"
        >
          {t.hero.view_projects && (
            <Link href="https://www.linkedin.com/in/raphael-nikolas-de-alencar-goncalves/" target="_blank">
              <Button size="lg" className="rounded-full group">
                {t.hero.view_projects} 
                <Linkedin className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </Link>
          )}
        </motion.div>
      </div>

      {/* Decorative side element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute right-[-10%] top-[20%] hidden lg:block"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
      </motion.div>
    </section>
  );
}
