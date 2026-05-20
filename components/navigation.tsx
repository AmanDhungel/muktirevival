"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Disc, Radio, Volume2 } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Tour", href: "#tour" },
  { label: "Band", href: "#band" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  overflow-x-hidden">
      <div
        className="brushed-steel border-b border-zinc-700/50"
        style={{
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Spinning Vinyl Icon */}
            <div className="relative">
              <motion.div
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="text-accent">
                <Image
                  src="/images/nav-log.png"
                  alt="Wh Logo"
                  className="w-10 h-10"
                  width={1000}
                  height={1000}
                />
              </motion.div>
              <div
                className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-400"
                style={{
                  boxShadow: "0 0 6px #4ade80, 0 0 12px rgba(74,222,128,0.5)",
                }}
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-serif tracking-wider text-foreground">
                Mukti & Revival
              </p>
              <p className="text-[8px] uppercase tracking-[0.2em] text-zinc-500">
                Est. 1996 | Kathmandu
              </p>
            </div>
          </a>

          {/* Center - VU Style Indicator (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-1 rounded-sm ${i > 5 ? "bg-red-500" : i > 3 ? "bg-yellow-500" : "bg-green-500"}`}
                  animate={{
                    height: [4, 8 + Math.random() * 8, 4],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: i * 0.08,
                  }}
                />
              ))}
            </div>
            <span className="text-[9px] uppercase tracking-[0.15em] text-zinc-500">
              Live
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs uppercase tracking-[0.15em] text-zinc-400 hover:text-foreground transition-colors group py-2">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
              </a>
            ))}

            {/* Separator - Styled like panel divider */}
            <div className="w-px h-6 bg-zinc-700" />

            {/* CTA Button - Styled like illuminated button */}
            <motion.a
              href="#tour"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-5 py-2.5 text-xs uppercase tracking-[0.1em] overflow-hidden rounded-sm"
              style={{
                background:
                  "linear-gradient(180deg, rgba(217,119,6,0.2) 0%, rgba(217,119,6,0.1) 100%)",
                border: "1px solid rgba(217,119,6,0.3)",
                boxShadow:
                  "0 0 12px rgba(217,119,6,0.2), inset 0 1px 1px rgba(255,255,255,0.05)",
              }}>
              <span className="relative z-10 flex items-center gap-2 text-primary">
                <Radio className="w-3 h-3" />
                Get Tickets
              </span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden transport-button p-2.5 rounded-sm"
            aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Decorative LED strip */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Mobile Menu - Styled like equipment drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
            }}>
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-sm uppercase tracking-wider py-3 px-4 hover:bg-zinc-800/50 transition-colors rounded-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#tour"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="retro-button text-center py-3 text-xs uppercase tracking-wider mt-3">
                Get Tickets
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
