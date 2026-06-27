"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { NAV } from "@/constants/testIds";

type NavLink = {
  label: string;
  to: string;
  id: string;
};

const links: NavLink[] = [
  {
    label: "INDEX",
    to: "/",
    id: NAV.linkHome,
  },
  {
    label: "EXPERIENCE",
    to: "/#experience",
    id: NAV.linkExperience,
  },
  {
    label: "PROJECTS",
    to: "/#projects",
    id: NAV.linkProjects,
  },
  {
    label: "BLOG",
    to: "/blog",
    id: NAV.linkBlog,
  },
];

export default function Header() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();

  return (
    <header
      data-testid={NAV.root}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          data-testid={NAV.logo}
          className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-foreground hover:text-primary transition-colors"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>RPK / SE</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active =
              l.to === "/blog" ? pathname === "/blog" : pathname === "/";
            return (
              <Link
                key={l.id}
                href={l.to}
                data-testid={l.id}
                className={`font-mono text-[11px] tracking-[0.2em] uppercase transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground"
                } hover:text-primary`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            data-testid={NAV.themeToggle}
            aria-label="Toggle theme"
            onClick={toggle}
            className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-all"
          >
            {theme === "dark" ? (
              <Sun size={14} strokeWidth={2} />
            ) : (
              <Moon size={14} strokeWidth={2} />
            )}
          </button>
          <a
            data-testid={NAV.downloadResume}
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-full bg-primary text-primary-foreground font-mono text-[11px] tracking-[0.2em] uppercase font-semibold hover:-translate-y-0.5 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all"
          >
            <Download size={13} strokeWidth={2.2} />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
