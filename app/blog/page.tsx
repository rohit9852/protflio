"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG } from "@/constants/testIds";

const lines = [
  "$ rpk --init blog",
  "→ scaffolding writing space ...",
  "→ tuning syntax themes ...",
  "→ warming up the editor ...",
  "✓ ready (almost).",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main data-testid={BLOG.root} className="flex-1 pt-32 pb-24 grain">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-10 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
          >
            <Terminal size={12} strokeWidth={2} className="text-primary" />
            Process · Live
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display uppercase tracking-tighter leading-[0.9] text-foreground text-[14vw] sm:text-[10vw] md:text-[8rem]"
          >
            SYSTEM
            <br />
            <span className="text-primary">INITIALIZING</span>
            <span className="blink-cursor" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-xl mx-auto font-mono text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            The blog is being built — long-form notes on performance, real-time
            systems, full-stack architecture and the work behind the metrics.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 max-w-xl mx-auto text-left rounded-2xl border border-border bg-card overflow-hidden"
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-background/50">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-3 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                rpk@blog:~
              </span>
            </div>
            <div className="p-6 font-mono text-sm space-y-1.5">
              {lines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.15 }}
                  className={l.startsWith("$") ? "text-primary" : "text-foreground/80"}
                >
                  {l}
                </motion.div>
              ))}
              <div className="text-muted-foreground blink-cursor">_</div>
            </div>
          </motion.div>
          <Link
            data-testid={BLOG.back}
            href="/"
            className="mt-12 inline-flex items-center gap-2 h-11 px-6 rounded-full border border-border text-foreground font-mono text-[11px] tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all"
          >
            <ArrowLeft size={14} /> Back to portfolio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
