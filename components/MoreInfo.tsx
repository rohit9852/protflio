"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  ScrollText,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import {
  education,
  awards,
  certifications,
  volunteering,
  publications,
} from "@/data/resume";
import { BENTO } from "@/constants/testIds";

interface CardProps {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
  testId?: string;
}

function Card({ icon: Icon, label, children, testId }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      data-testid={testId}
      className="rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-all"
    >
      <div className="flex items-center gap-3 mb-6 text-muted-foreground">
        <Icon size={16} strokeWidth={1.8} className="text-primary" />
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">
          {label}
        </span>
      </div>
      {children}
    </motion.div>
  );
}

export default function MoreInfo() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            § 04 — Credentials
          </div>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-foreground">
            Beyond Code<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card icon={GraduationCap} label="Education" testId={BENTO.education}>
            <div className="font-display text-xl md:text-2xl uppercase tracking-tight text-foreground leading-tight">
              {education.degree}
            </div>
            <div className="mt-3 font-mono text-sm text-foreground/80">
              {education.school}
            </div>
            <div className="mt-1 font-mono text-xs text-muted-foreground">
              {education.location} · {education.period}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary">
                GPA
              </span>
              <span className="font-display text-lg text-primary">
                {education.gpa}
              </span>
            </div>
          </Card>

          <Card icon={ScrollText} label="Certifications">
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex items-baseline justify-between gap-4"
                >
                  <div>
                    <div className="font-display text-lg uppercase tracking-tight text-foreground">
                      {c.name}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {c.issuer}
                    </div>
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-primary">
                    {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={Award} label="Awards" testId={BENTO.awards}>
            <ul className="space-y-4">
              {awards.map((a) => (
                <li
                  key={a.name}
                  className="flex items-baseline justify-between gap-4"
                >
                  <div>
                    <div className="font-display text-lg uppercase tracking-tight text-foreground">
                      {a.name}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {a.issuer}
                    </div>
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-primary">
                    {a.year}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={BookOpen} label="Publications">
            <ul className="space-y-4">
              {publications.map((p) => (
                <li key={p.title}>
                  <div className="font-display text-base md:text-lg uppercase tracking-tight text-foreground leading-snug">
                    {p.title}
                  </div>
                  <div className="mt-1 font-mono text-xs text-muted-foreground">
                    {p.venue} · {p.year}
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={HeartHandshake} label="Volunteering">
            <ul className="space-y-3">
              {volunteering.map((v) => (
                <li
                  key={v.role}
                  className="flex items-baseline justify-between gap-4"
                >
                  <div className="font-display text-lg uppercase tracking-tight text-foreground">
                    {v.role}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {v.org}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={ScrollText} label="Principles">
            <ul className="space-y-2 font-mono text-sm text-foreground/85">
              <li>▸ Performance is a feature.</li>
              <li>▸ Ship small, measure, iterate.</li>
              <li>▸ Mentor & document — compound the team.</li>
              <li>▸ Real-time UX beats clever code.</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
