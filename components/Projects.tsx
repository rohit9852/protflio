"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/resume";
import { BENTO } from "@/constants/testIds";

export default function Projects() {
  const p = projects[0];
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
              § 03 — Selected Work
            </div>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-foreground">
              Projects<span className="text-primary">.</span>
            </h2>
          </div>
        </div>
        <motion.article
          data-testid={BENTO.project}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-3xl border border-border bg-card hover:border-primary/40 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="relative lg:col-span-2 aspect-[4/3] lg:aspect-auto overflow-hidden bg-secondary">
              <img
                src="https://images.pexels.com/photos/32396570/pexels-photo-32396570.jpeg"
                alt="Lite Trading App dashboard"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-primary/20 mix-blend-multiply" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.25em] uppercase text-foreground/90 bg-background/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-border">
                ▸ LIVE MARKET DATA
              </div>
            </div>
            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary">
                  / {p.type}
                </span>
                <Github size={18} strokeWidth={1.6} className="text-muted-foreground" />
              </div>
              <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-foreground mb-4">
                {p.name}
                <ArrowUpRight
                  size={28}
                  strokeWidth={2}
                  className="inline-block ml-1 -translate-y-2 text-primary group-hover:translate-x-1 group-hover:-translate-y-3 transition-transform"
                />
              </h3>
              <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-xl">
                {p.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full border border-border font-mono text-[11px] text-foreground/80 hover:border-primary hover:text-primary transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
