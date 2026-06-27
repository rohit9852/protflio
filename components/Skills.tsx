"use client";

import { motion } from "framer-motion";
import { skills, marqueeSkills } from "@/data/resume";
import { BENTO } from "@/constants/testIds";

export default function Skills() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
              § 02 — Toolkit
            </div>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-foreground">
              Stack
              <span className="text-primary">.</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            8 CATEGORIES
          </div>
        </div>

        <div
          data-testid={BENTO.skillsMarquee}
          className="relative overflow-hidden border-y border-border py-6 mb-14"
        >
          <div className="flex marquee-track whitespace-nowrap">
            {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
              <span
                key={i}
                className="font-display text-3xl md:text-5xl uppercase tracking-tight text-muted-foreground/60 px-6"
              >
                {s}{" "}
                <span className="text-primary mx-2">✦</span>
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:bg-card/80 transition-all"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-4">
                / <span>{cat}</span>
              </div>
              <ul className="space-y-1.5">
                {items.map((s) => (
                  <li
                    key={s}
                    className="font-mono text-[13px] text-foreground/85 hover:text-primary transition-colors cursor-default"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
