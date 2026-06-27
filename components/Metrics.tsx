"use client";

import { motion } from "framer-motion";
import { ChartColumn, Activity, TrendingUp, Users } from "lucide-react";
import { metrics } from "@/data/resume";
import { BENTO } from "@/constants/testIds";

const icons = [TrendingUp, Users, Activity, ChartColumn];

export default function Metrics() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          data-testid={BENTO.metrics}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
        >
          {metrics.map((m, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-background p-6 md:p-8 group hover:bg-card transition-colors"
              >
                <div className="flex items-center justify-between mb-4 text-muted-foreground">
                  <Icon
                    size={18}
                    strokeWidth={1.6}
                    className="group-hover:text-primary transition-colors"
                  />
                  <span className="font-mono text-[10px] tracking-[0.2em]">
                    0{i + 1}
                  </span>
                </div>
                <div className="font-display text-4xl md:text-5xl tracking-tighter text-foreground group-hover:text-primary transition-colors">
                  {m.value}
                </div>
                <div className="mt-2 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                  {m.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
