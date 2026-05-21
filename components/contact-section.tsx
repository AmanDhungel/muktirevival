"use client";

import { motion } from "framer-motion";
import { Phone, Volume2 } from "lucide-react";
import Image from "next/image";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section styled like an amplifier control panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #1f1f1f 0%, #141414 100%)",
            boxShadow:
              "0 16px 48px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)",
          }}>
          {/* Top accent */}
          <div className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

          {/* Brushed metal faceplate */}
          <div className="brushed-metal p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full bg-green-400 animate-led-pulse"
                  style={{ boxShadow: "0 0 8px #4ade80" }}
                />
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                  On Air
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-serif mb-3 text-foreground">
                Get in Touch
              </h2>
              <p className="text-sm text-muted-foreground">
                For Sponsorship and Interstate Inquiries
              </p>
            </div>

            {/* Contact Cards - Styled like channel strips */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
              <ContactCard
                label="Line 1"
                phone="0451 199 518"
                href="tel:0451199518"
              />
              <ContactCard
                label="Line 2"
                phone="0469 361 869"
                href="tel:0469361869"
              />
            </div>

            {/* Tour By Section - Styled like equipment badge */}
            <div className="text-center">
              <div
                className="flex flex-col max-w-xl m-auto rounded-sm px-8 py-5"
                style={{
                  background:
                    "linear-gradient(180deg, #151515 0%, #0a0a0a 100%)",
                  boxShadow:
                    "inset 0 2px 8px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.03)",
                }}>
                <div className="flex md:flex-row max-sm:flex-col items-center justify-center gap-10">
                  <div>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-3">
                      Tour Presented By
                    </p>
                    <div className="flex gap-2">
                      <Image
                        src="/images/sponsors/logo-1.png"
                        alt="VIBE Entertainment"
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                      <Image
                        src="/images/sponsors/logo-2.png"
                        alt="VIBE Entertainment"
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-3">
                      In Association with
                    </p>

                    <Image
                      src="/images/sponsors/logo-3.png"
                      alt="VIBE Entertainment"
                      width={100}
                      height={100}
                      className="object-cover mt-2 mx-auto"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-zinc-700" />
                  <span className="text-[8px] uppercase tracking-wider text-zinc-600">
                    Marketing and creative by:
                  </span>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-zinc-700" />
                </div>
                <Image
                  src="/images/nav-log.png"
                  alt="VIBE Entertainment"
                  width={100}
                  height={100}
                  className="object-cover mt-2 mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Bottom accent with LED indicators */}
          <div className="flex items-center justify-center gap-6 py-3 bg-zinc-900/50 border-t border-zinc-800/50">
            {["Sydney", "Canberra", "Melbourne", "Horbart"].map((city, i) => (
              <div key={city} className="flex items-center gap-1.5">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{ boxShadow: "0 0 4px oklch(0.75 0.16 60)" }}
                />
                <span className="text-[8px] uppercase tracking-wider text-zinc-600">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  phone,
  href,
}: {
  label: string;
  phone: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="block rounded-sm overflow-hidden group"
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)",
        boxShadow:
          "inset 0 1px 1px rgba(255,255,255,0.03), 0 4px 12px rgba(0,0,0,0.3)",
      }}>
      {/* Channel Label */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-zinc-800/50">
        <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
          {label}
        </span>
        <div className="flex items-center gap-1.5">
          <div
            className="w-1.5 h-1.5 rounded-full bg-green-400 group-hover:animate-led-pulse"
            style={{ boxShadow: "0 0 4px #4ade80" }}
          />
          <span className="text-[8px] uppercase tracking-wider text-zinc-600">
            Active
          </span>
        </div>
      </div>

      {/* Phone Number Display */}
      <div className="p-5 flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: "linear-gradient(180deg, #252525 0%, #1a1a1a 100%)",
            boxShadow:
              "inset 0 2px 4px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)",
          }}>
          <Phone className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-mono text-xl text-primary tracking-wider amber-glow">
            {phone}
          </p>
          <p className="text-[9px] uppercase tracking-wider text-zinc-600 mt-0.5">
            Tap to call
          </p>
        </div>
      </div>

      {/* Bottom meter bar */}
      <div className="h-1 bg-zinc-900 flex overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-green-500"
          initial={{ width: "30%" }}
          whileHover={{ width: "80%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.a>
  );
}
