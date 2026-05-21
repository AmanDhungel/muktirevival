"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, Disc, Radio } from "lucide-react";
import { Turntable } from "@/components/turntable";
import { CassetteTourDates } from "@/components/cassette-tour-dates";
import { BandMembers } from "@/components/band-members";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background noise-overlay w-full overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Turntable */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-12 max-sm:max-w-sm mx-auto ">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-sm mb-6">
                <Radio className="w-3 h-3 text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Australia Tour 2026
                </span>
              </motion.div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-[0.95]">
                <span className="block text-foreground">Mukti</span>
                <span className="text-primary">&</span>
                <span className="block text-foreground">Revival</span>
              </h1>

              {/* Subtitle */}
              <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
                30 years of rocking the nation. Returning with fan favourites,
                Kathmandu stories, and surprise moments. From Darwin to
                Adelaide, every city brings historic energy.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#tour"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="retro-button inline-flex items-center justify-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.15em]">
                  <Calendar className="w-4 h-4 text-primary" />
                  Join Waitlist
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.15em] border border-border hover:bg-card transition-colors">
                  <Phone className="w-4 h-4" />
                  Get in Touch
                </motion.a>
              </div>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-8 mt-10 pt-6 border-t border-border justify-center lg:justify-start">
                <div>
                  <p className="text-2xl font-mono text-primary">30+</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Years
                  </p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div>
                  <p className="text-2xl font-mono text-primary">7</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Cities
                  </p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div>
                  <p className="text-2xl font-mono text-primary">1</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Legend
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Turntable */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2">
              <Turntable />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Tour Dates - Cassette Player */}
      <CassetteTourDates />

      {/* Band Members */}
      <BandMembers />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
