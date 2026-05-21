"use client";

import { motion } from "framer-motion";
import { Disc, Instagram, Facebook, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="relative py-16 px-4 border-t border-zinc-800/50"
      style={{
        background: "linear-gradient(180deg, #0f0f0f 0%, #080808 100%)",
      }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                <Image
                  src="/images/band-logo.jpg"
                  alt="Mukti & Revival"
                  width={1000}
                  height={1000}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </motion.div>
              <div>
                <span className="text-lg font-serif text-foreground">
                  Mukti & Revival
                </span>
                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  Est. 1996
                </p>
              </div>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Legendary Nepali rock band celebrating 30 years of music. Blending
              traditional Nepali folk with American Blues.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-foreground mb-4 flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full bg-primary"
                style={{ boxShadow: "0 0 4px oklch(0.75 0.16 60)" }}
              />
              Navigate
            </h4>
            <nav className="space-y-2">
              {[
                { label: "Join Waitlist", href: "#tour" },
                { label: "Band Members", href: "#band" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-zinc-500 hover:text-primary transition-colors group">
                  <div className="w-px h-3 bg-zinc-700 group-hover:bg-primary transition-colors" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social - Styled like equipment inputs */}
          <div>
            <h4 className="font-serif text-foreground mb-4 flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full bg-green-400"
                style={{ boxShadow: "0 0 4px #4ade80" }}
              />
              Tune In
            </h4>
            <div className="flex gap-3">
              {[
                {
                  icon: Instagram,
                  label: "Instagram",
                  link: "https://www.instagram.com/whatshappening_australia/",
                },
                {
                  icon: Facebook,
                  label: "Facebook",
                  link: "https://www.facebook.com/whatshappeningaustralia/",
                },
                {
                  icon: Youtube,
                  label: "YouTube",
                  link: "https://www.youtube.com/@whatshappeningaustralia",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-sm flex items-center justify-center transition-colors group"
                  style={{
                    background:
                      "linear-gradient(180deg, #1a1a1a 0%, #111 100%)",
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.03), 0 2px 4px rgba(0,0,0,0.3)",
                  }}
                  aria-label={social.label}>
                  <social.icon className="w-4 h-4 text-zinc-500 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>

            <div className="mt-6 space-y-1 text-xs text-zinc-600">
              <p>
                Tours By:{" "}
                <span className="text-zinc-400">
                  VIBE in the Captial & Nana Events
                </span>
              </p>
              <p>
                In Association with:{" "}
                <span className="text-zinc-400">VYBE Nation</span>
              </p>
              <p>
                Marketing and creative by:{" "}
                <span className="text-zinc-400">WhatsHappeningAustralia</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Styled like equipment status bar */}
        <div className="border-t border-zinc-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">
              &copy; 2026{" "}
              <Link
                href={"https://www.whaustralia.com"}
                target="_blank"
                className="text-blue-400 underline underline-offset-4 hover:underline">
                WhatsHappeningAustralia
              </Link>
              . All Rights Reserved.
            </p>

            {/* Decorative EQ - Now playing indicator */}
            <div className="flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-wider text-zinc-600">
                Now Playing
              </span>
              <div className="flex items-center gap-0.5">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-1 rounded-sm ${i > 9 ? "bg-red-500/70" : i > 6 ? "bg-yellow-500/70" : "bg-green-500/70"}`}
                    animate={{ height: [3, 6 + Math.random() * 10, 3] }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                      delay: i * 0.06,
                    }}
                  />
                ))}
              </div>
            </div>

            <p className="text-xs font-serif italic text-zinc-500">
              30 Years of Rocking the Nation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
