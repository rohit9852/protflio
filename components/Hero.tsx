"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import { profile } from "@/data/resume";
import { HERO } from "@/constants/testIds";

export default function Hero() {
  return (
    <section
      data-testid={HERO.root}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grain"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-10"
        >
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available · Q1 2026
          </span>
          <span className="hidden sm:inline">/</span>
          <span className="flex items-center gap-2">
            <MapPin size={12} strokeWidth={2} /> {profile.location}
          </span>
          <span className="hidden sm:inline">/</span>
          <span>5+ YRS · FULL-STACK</span>
        </motion.div>

        <motion.h1
          data-testid={HERO.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display uppercase leading-[0.85] tracking-tighter text-foreground text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9rem] xl:text-[10.5rem]"
        >
          ROHIT
          <br />
          <span className="text-primary">PRASAD</span>
          <span className="inline-block ml-3 align-middle h-3 w-3 md:h-5 md:w-5 rounded-full bg-primary translate-y-[-0.4em]" />
          <br />
          KUSHWAHA
        </motion.h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div
              data-testid={HERO.role}
              className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3"
            >
              ROLE / TITLE
            </div>
            <div className="font-display text-2xl md:text-3xl text-foreground uppercase tracking-tight">
              Senior Software
              <br />
              Engineer
            </div>
            <div className="font-mono text-xs text-muted-foreground mt-3">
              Leading full-stack @ Upgrad
            </div>
          </motion.div>

          <motion.p
            data-testid={HERO.summary}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl"
          >
            {profile.summary}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center gap-3"
        >
          <a
            data-testid={HERO.primaryCta}
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 h-12 px-7 rounded-full bg-primary text-primary-foreground font-mono text-xs tracking-[0.2em] uppercase font-semibold hover:-translate-y-0.5 hover:shadow-[0_0_28px_hsl(var(--primary)/0.45)] transition-all"
          >
            Download Resume
            <ArrowDownRight
              size={16}
              strokeWidth={2.2}
              className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
            />
          </a>
          <a
            data-testid={HERO.secondaryCta}
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-border text-foreground font-mono text-xs tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
