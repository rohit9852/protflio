"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/resume";
import { BENTO } from "@/constants/testIds";

type ExperienceItem = {
  company: string;
  location: string;
  title: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
              § 01 — Track Record
            </div>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-foreground">
              Experience
              <span className="text-primary">.</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground text-right">
            5 ROLES
            <br />
            3 COMPANIES
          </div>
        </div>
        <div
          data-testid={BENTO.experience}
          className="relative border-l border-border pl-6 md:pl-10 space-y-12 md:space-y-16"
        >
          {experience.map((job: ExperienceItem, i: number) => (
            <motion.article
              key={`${job.company}-${job.title}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative group"
            >
              <span
                className={`absolute -left-[31px] md:-left-[47px] top-2 w-3 h-3 rounded-full border-2 ${
                  job.current
                    ? "bg-primary border-primary shadow-[0_0_18px_hsl(var(--primary)/0.7)]"
                    : "bg-background border-border"
                }`}
              />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-3">
                  <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                    {job.period}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground/70 mt-1">
                    {job.location}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-foreground">
                      {job.title}
                    </h3>
                    <span className="text-muted-foreground">·</span>
                    <span className="font-mono text-sm text-primary inline-flex items-center gap-1">
                      {job.company}
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </span>
                    {job.current && (
                      <span className="ml-1 px-2 py-0.5 rounded-full border border-primary/40 bg-primary/10 text-primary font-mono text-[10px] tracking-[0.15em] uppercase">
                        Current
                      </span>
                    )}
                  </div>
                  <ul className="mt-4 space-y-2 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                    {job.bullets.map((b: string, j: number) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-primary/60 font-mono mt-1.5 leading-none">
                          ▸
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
