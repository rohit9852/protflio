"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/resume";
import { FOOTER } from "@/constants/testIds";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      data-testid={FOOTER.root}
      className="relative pt-24 md:pt-32 pb-10 border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
          § 05 — Get in touch
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display uppercase leading-[0.85] tracking-tighter text-foreground text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9rem]"
        >
          LET'S
          <br />
          <span className="text-primary">BUILD</span>
          <span className="text-foreground">.</span>
        </motion.h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-1.5">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
              / Direct line
            </div>
            <a
              data-testid={FOOTER.email}
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} strokeWidth={1.8} />
              <span className="font-mono text-base md:text-lg">
                {profile.email}
              </span>
              <ArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              data-testid={FOOTER.phone}
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} strokeWidth={1.8} />
              <span className="font-mono text-base md:text-lg">
                {profile.phone}
              </span>
            </a>
            <a
              data-testid={FOOTER.linkedin}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={16} strokeWidth={1.8} />
              <span className="font-mono text-base md:text-lg">
                linkedin.com/in/rohit-prasad-kushwaha
              </span>
              <ArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <div
              data-testid={FOOTER.location}
              className="flex items-center gap-3 text-muted-foreground pt-2"
            >
              <MapPin size={16} strokeWidth={1.8} />
              <span className="font-mono text-base">{profile.location}</span>
            </div>
          </div>
          <div className="md:text-right">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
              / Currently
            </div>
            <p className="font-mono text-sm md:text-base text-foreground/85 leading-relaxed max-w-md md:ml-auto">
              Senior Software Engineer @ Upgrad. Open to conversations about
              full-stack roles, technical leadership, and high-scale real-time
              systems.
            </p>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full border border-border text-foreground font-mono text-[11px] tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all"
            >
              Download CV (PDF)
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          <span>
            © <span style={{ display: "contents" }}>{year}</span> ROHIT PRASAD
            KUSHWAHA
          </span>
          <span className="blink-cursor">SYSTEM // ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
