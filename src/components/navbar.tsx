"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <nav className="flex items-center justify-between w-full max-w-5xl px-8 py-3 border rounded-full backdrop-blur-md bg-background/50 border-border/50">
        {/* Desktop Nav */}
        <div className="hidden space-x-12 md:flex mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold transition-colors text-muted-foreground hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full w-8 h-8"
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            title={language === "en" ? "Mudar para Português" : "Change to English"}
          >
            <Languages className="w-4 h-4" />
            <span className="sr-only">Toggle Language</span>
          </Button>
          
          <Link href="https://www.linkedin.com/in/raphael-nikolas-de-alencar-goncalves/" target="_blank" className="hidden sm:block">
            <Linkedin className="w-5 h-5 transition-colors text-muted-foreground hover:text-primary" />
          </Link>
          <Link href="/cv.pdf" target="_blank">
            <Button variant="default" size="sm" className="hidden rounded-full md:flex shadow-lg shadow-primary/20">
              {t.nav.resume} <FileText className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute left-0 right-0 p-4 mx-4 mt-20 border rounded-2xl bg-background/95 backdrop-blur-lg border-border md:hidden"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-center text-muted-foreground hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/cv.pdf" target="_blank">
              <Button className="w-full rounded-full">{t.nav.resume}</Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full rounded-full"
              onClick={() => {
                setLanguage(language === "en" ? "pt" : "en");
                setIsOpen(false);
              }}
            >
              <Languages className="w-4 h-4 mr-2" />
              {language === "en" ? "Português" : "English"}
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
