"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, ArrowUpRight, Send } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { useState } from "react";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    // Create a temporary anchor element to trigger mailto
    const mailtoLink = `mailto:rgcap156@gmail.com?subject=${subject}&body=${body}`;
    const tempLink = document.createElement("a");
    tempLink.href = mailtoLink;
    tempLink.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="py-24 border-t border-border/50 bg-background relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] -z-10" />

      <div className="px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        <div className="space-y-4 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight md:text-6xl"
          >
            {t.contact.title_part1} <span className="text-primary">{t.contact.title_highlight}</span>{t.contact.title_part2}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {t.contact.description}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-4 text-left p-8 rounded-3xl border border-border/50 bg-secondary/10 backdrop-blur-sm">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="How should I call you?"
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
              <textarea
                required
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
            <Button type="submit" className="w-full rounded-xl py-6 text-lg group">
              {t.contact.say_hello} <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </motion.div>

        <div className="w-full pt-12 border-t border-border/50 flex justify-center">
          <Link href="https://www.linkedin.com/in/raphael-nikolas-de-alencar-goncalves/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
            LinkedIn <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
