"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 overflow-hidden lg:flex-row lg:px-12 gap-12 lg:gap-20">
      <div className="z-10 w-full max-w-3xl space-y-8 lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl"
          >
            {t.hero.title_part1} <span className="text-primary">{t.hero.title_highlight}</span>
            <div className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground mt-2">{t.hero.title_part2}</div>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center lg:justify-start gap-4"
        >
          <Link href="https://www.linkedin.com/in/raphael-nikolas-de-alencar-goncalves/" target="_blank">
            <Button size="lg" className="rounded-full group px-8">
              {t.hero.view_projects} 
              <Linkedin className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
        
        {/* Image Container */}
        <div className="relative w-full h-full overflow-hidden rounded-3xl border-2 border-primary/20 bg-muted/50 backdrop-blur-sm shadow-2xl">
          <Image
            src="/me.jfif"
            alt="Raphael"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Background Decorative Blur */}
      <div className="absolute right-[-10%] top-[20%] hidden lg:block -z-10">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
    </section>
  );
}
