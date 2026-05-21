"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  FastForward,
  Rewind,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Square,
  Circle,
} from "lucide-react";
import { WaitListDialog } from "./WaitlistDialog";

const tourDates = [
  {
    city: "Sydney",
    venue: "Date & Venue: TBD",
    date: "Coming Soon",
    state: "NSW",
  },

  {
    city: "Canberra",
    venue: "Date & Venue: TBD",
    date: "Coming Soon",
    state: "ACT",
  },
  {
    city: "Melbourne",
    venue: "Date & Venue: TBD",
    date: "Coming Soon",
    state: "VIC",
  },
  {
    city: "Hobart",
    venue: "Date & Venue: TBD",
    date: "Coming Soon",
    state: "TAS",
  },
  {
    city: "Adelaide",
    venue: "Date & Venue: TBD",
    date: "Coming Soon",
    state: "SA",
  },
  {
    city: "Brisbane",
    venue: "Date & Venue: TBD",
    date: "Coming Soon",
    state: "QLD",
  },
  {
    city: "Darwin",
    venue: "Date & Venue: TBD",
    date: "Coming Soon",
    state: "NT",
  },
  {
    city: "Perth",
    venue: "Date & Venue: TBD",
    date: "Coming Soon",
    state: "WA",
  },
];

export function CassetteTourDates() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reelRotation, setReelRotation] = useState(0);

  const nextTrack = () =>
    setCurrentTrack((prev) => (prev + 1) % tourDates.length);
  const prevTrack = () =>
    setCurrentTrack((prev) => (prev - 1 + tourDates.length) % tourDates.length);

  // Animate reels
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setReelRotation((prev) => prev + 15);
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="tour" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-primary mb-2 sm:mb-3">
            Australia Tour 2026
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4">
            Tour Dates
          </h2>
        </motion.div>

        {/* Cassette Deck Unit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative">
          {/* Deck Body */}
          <div
            className="relative rounded-lg overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 10%, #1f1f1f 90%, #151515 100%)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}>
            {/* Brushed Metal Faceplate */}
            <div className="brushed-metal p-3 sm:p-5 md:p-8">
              {/* Top Row - Cassette Well & Display */}
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Cassette Well */}
                <div className="flex-1 relative">
                  <div className="cassette-window rounded-sm p-2 sm:p-4">
                    {/* Cassette Shell */}
                    <div
                      className="relative rounded-sm overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(180deg, #d4c8b0 0%, #c8bc9e 50%, #beb292 100%)",
                        boxShadow:
                          "inset 0 2px 4px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.3)",
                      }}>
                      {/* Label Area */}
                      <div className="p-2 sm:p-3">
                        <div
                          className="bg-white/95 rounded-sm p-2 sm:p-3 border border-amber-200/50"
                          style={{
                            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
                          }}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-zinc-500">
                              Side A
                            </span>
                            <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-zinc-500">
                              C-90
                            </span>
                          </div>
                          <p className="text-[10px] sm:text-xs font-bold text-zinc-800 tracking-wider text-center">
                            MUKTI & REVIVAL
                          </p>
                          <p className="text-[8px] sm:text-[10px] text-zinc-600 text-center">
                            Australia Tour 2026
                          </p>
                          <div className="flex items-center justify-center gap-2 mt-1.5 sm:mt-2">
                            <div className="h-px flex-1 bg-amber-300/50" />
                            <span className="text-[6px] sm:text-[7px] text-zinc-500 uppercase">
                              30th Anniversary
                            </span>
                            <div className="h-px flex-1 bg-amber-300/50" />
                          </div>
                        </div>
                      </div>

                      {/* Tape Window */}
                      <div
                        className="mx-2 sm:mx-3 mb-2 sm:mb-3 rounded-sm overflow-hidden"
                        style={{
                          background:
                            "linear-gradient(180deg, #1a1512 0%, #251d15 50%, #1a1512 100%)",
                        }}>
                        <div className="flex items-center justify-center gap-3 sm:gap-6 py-2 sm:py-4 px-2 sm:px-4">
                          {/* Left Reel */}
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                            <div
                              className="absolute inset-0 rounded-full"
                              style={{
                                background:
                                  "linear-gradient(180deg, #222 0%, #111 100%)",
                                boxShadow: "inset 0 2px 6px rgba(0,0,0,0.6)",
                              }}
                            />
                            <motion.div
                              className="absolute inset-0.5 sm:inset-1 rounded-full"
                              animate={{ rotate: reelRotation }}
                              style={{
                                background:
                                  "conic-gradient(from 0deg, #3d2f1f, #5a4530, #3d2f1f, #5a4530, #3d2f1f)",
                              }}>
                              {/* Reel Spokes */}
                              {[0, 60, 120, 180, 240, 300].map((angle) => (
                                <div
                                  key={angle}
                                  className="absolute top-1/2 left-1/2 w-0.5 sm:w-1 h-3 sm:h-4 md:h-5 bg-zinc-800 rounded-full"
                                  style={{
                                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                                  }}
                                />
                              ))}
                              {/* Center Hub */}
                              <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-sm bg-zinc-200"
                                style={{
                                  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3)",
                                }}>
                                <div className="absolute inset-0.5 sm:inset-1 bg-zinc-800 rounded-sm" />
                              </div>
                            </motion.div>
                          </div>

                          {/* Tape Guide */}
                          <div className="flex-1 h-1.5 sm:h-2 relative">
                            <div
                              className="absolute inset-0 rounded-full"
                              style={{
                                background:
                                  "linear-gradient(180deg, #4a3828 0%, #3a2818 100%)",
                              }}
                            />
                            {/* Head Gap */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-zinc-600 rounded-sm" />
                          </div>

                          {/* Right Reel */}
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                            <div
                              className="absolute inset-0 rounded-full"
                              style={{
                                background:
                                  "linear-gradient(180deg, #222 0%, #111 100%)",
                                boxShadow: "inset 0 2px 6px rgba(0,0,0,0.6)",
                              }}
                            />
                            <motion.div
                              className="absolute inset-0.5 sm:inset-1 rounded-full"
                              animate={{ rotate: -reelRotation * 0.7 }}
                              style={{
                                background:
                                  "conic-gradient(from 0deg, #3d2f1f, #5a4530, #3d2f1f, #5a4530, #3d2f1f)",
                              }}>
                              {[0, 60, 120, 180, 240, 300].map((angle) => (
                                <div
                                  key={angle}
                                  className="absolute top-1/2 left-1/2 w-0.5 sm:w-1 h-3 sm:h-4 md:h-5 bg-zinc-800 rounded-full"
                                  style={{
                                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                                  }}
                                />
                              ))}
                              <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-sm bg-zinc-200"
                                style={{
                                  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3)",
                                }}>
                                <div className="absolute inset-0.5 sm:inset-1 bg-zinc-800 rounded-sm" />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Screws */}
                      <div className="flex justify-between px-2 sm:px-4 pb-2 sm:pb-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                            style={{
                              background:
                                "linear-gradient(145deg, #aaa 0%, #777 100%)",
                              boxShadow:
                                "inset 0 1px 1px rgba(255,255,255,0.3)",
                            }}>
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-0.5 sm:w-1 h-px bg-zinc-600" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* LED Display Panel */}
                <div className="lg:w-72 xl:w-80">
                  <div
                    className="rounded-sm overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, #0a0a0a 0%, #050505 100%)",
                      boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6)",
                    }}>
                    <div className="p-3 sm:p-4">
                      {/* Main Display */}
                      <div
                        className="bg-zinc-950 rounded-sm p-3 sm:p-4 mb-3 sm:mb-4"
                        style={{
                          boxShadow: "inset 0 2px 6px rgba(0,0,0,0.5)",
                        }}>
                        <p className="text-[7px] sm:text-[8px] uppercase tracking-[0.2em] text-zinc-700 mb-1">
                          Now Showing
                        </p>
                        <motion.div
                          key={currentTrack}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="font-mono text-xl sm:text-2xl md:text-3xl tracking-wider text-primary amber-glow">
                          {tourDates[currentTrack].city.toUpperCase()}
                        </motion.div>
                        <p className="text-[10px] sm:text-xs text-zinc-500 mt-1">
                          {tourDates[currentTrack].venue}
                        </p>

                        {/* Track Counter */}
                        <div className="flex items-center justify-between mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-zinc-800">
                          <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-zinc-600">
                            Track
                          </span>
                          <span className="font-mono text-primary text-base sm:text-lg">
                            {String(currentTrack + 1).padStart(2, "0")}/
                            {String(tourDates.length).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* EQ Visualizer */}
                      <div className="bg-zinc-950 rounded-sm p-2 sm:p-3 mb-3 sm:mb-4">
                        <div className="flex items-end justify-center gap-0.5 sm:gap-1 h-8 sm:h-10">
                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1 sm:w-1.5 rounded-sm"
                              style={{
                                background: `linear-gradient(180deg, 
                                  ${i > 9 ? "#ef4444" : i > 6 ? "#f59e0b" : "oklch(0.75 0.16 60)"} 0%, 
                                  oklch(0.75 0.16 60 / 0.5) 100%)`,
                              }}
                              animate={
                                isPlaying
                                  ? {
                                      height: [6, Math.random() * 28 + 6, 6],
                                    }
                                  : { height: 3 }
                              }
                              transition={{
                                duration: 0.15,
                                repeat: Infinity,
                                delay: i * 0.03,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Status LEDs */}
                      <div className="flex items-center justify-between px-1 sm:px-2">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${isPlaying ? "bg-green-400" : "bg-zinc-800"}`}
                            style={{
                              boxShadow: isPlaying ? "0 0 8px #4ade80" : "none",
                            }}
                          />
                          <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-zinc-600">
                            Play
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-zinc-800" />
                          <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-zinc-600">
                            Rec
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isPlaying ? "bg-primary animate-led-pulse" : "bg-zinc-800"}`}
                          />
                          <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-zinc-600">
                            Dolby
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transport Controls */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
                {/* Eject */}
                <TransportButton
                  label="Eject"
                  onClick={() => {}}
                  small
                  className="hidden sm:flex">
                  <div className="w-2.5 sm:w-3 h-1 sm:h-1.5 border border-current rounded-sm relative">
                    <div className="absolute -top-0.5 sm:-top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] sm:border-l-[4px] border-l-transparent border-r-[3px] sm:border-r-[4px] border-r-transparent border-b-[3px] sm:border-b-[4px] border-b-current" />
                  </div>
                </TransportButton>

                <div className="w-px h-6 sm:h-8 bg-zinc-700 mx-0.5 sm:mx-1 hidden sm:block" />

                {/* Rewind */}
                <TransportButton label="Rew" onClick={prevTrack}>
                  <Rewind className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </TransportButton>

                {/* Play */}
                <TransportButton
                  label="Play"
                  onClick={() => setIsPlaying(true)}
                  active={isPlaying}
                  primary>
                  <Play
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5"
                    fill={isPlaying ? "currentColor" : "none"}
                  />
                </TransportButton>

                {/* Pause */}
                <TransportButton
                  label="Pause"
                  onClick={() => setIsPlaying(false)}
                  active={!isPlaying}>
                  <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </TransportButton>

                {/* Stop */}
                <TransportButton
                  label="Stop"
                  onClick={() => setIsPlaying(false)}>
                  <Square
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                    fill="currentColor"
                  />
                </TransportButton>

                {/* Fast Forward */}
                <TransportButton label="FF" onClick={nextTrack}>
                  <FastForward className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </TransportButton>

                <div className="w-px h-6 sm:h-8 bg-zinc-700 mx-0.5 sm:mx-1 hidden sm:block" />

                {/* Record */}
                <TransportButton
                  label="Rec"
                  onClick={() => {}}
                  small
                  className="hidden sm:flex">
                  <Circle
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500"
                    fill="currentColor"
                  />
                </TransportButton>
              </div>

              {/* Bottom Row - Knobs & Labels */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-700/30">
                {/* Left Knobs */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <Knob label="Input" value={75} />
                  <Knob label="Output" value={60} />
                </div>

                {/* Brand */}
                <div className="text-center order-first sm:order-none">
                  <p className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-zinc-500 embossed-text">
                    Mukti & Revival
                  </p>
                  <p className="text-[6px] sm:text-[7px] tracking-[0.1em] sm:tracking-[0.15em] uppercase text-zinc-600">
                    Stereo Cassette Deck
                  </p>
                </div>

                {/* Right Knobs */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <Knob label="Balance" value={50} />
                  <Knob label="Tone" value={55} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 sm:mt-8 grid gap-1.5 sm:gap-2">
          {tourDates.map((tour, index) => (
            <motion.button
              key={tour.city}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setCurrentTrack(index)}
              className={`group flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-sm transition-all ${
                currentTrack === index
                  ? "bg-primary/10 border border-primary/30"
                  : "bg-card/30 border border-transparent hover:bg-card/50 hover:border-border/50"
              }`}>
              {/* Track Number */}
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-sm flex items-center justify-center font-mono text-xs sm:text-sm shrink-0 ${
                  currentTrack === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground"
                }`}>
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* City Info */}
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center gap-2">
                  <p
                    className={`font-medium text-sm sm:text-base truncate ${currentTrack === index ? "text-primary" : "text-foreground"}`}>
                    {tour.city}
                  </p>
                  <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 bg-muted/50 text-muted-foreground rounded shrink-0">
                    {tour.state}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">
                  {tour.venue}
                </p>
              </div>

              {/* Status / Playing Indicator */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0  justify-center ">
                <WaitListDialog city={tour.city} />
                {/* <span className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground hidden sm:block">
                  {tour.date}
                </span> */}
                {currentTrack === index && isPlaying && (
                  <div className="flex items-center gap-0.5 max-sm:hidden">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-0.5 bg-primary rounded-full"
                        animate={{ height: [3, 12, 3] }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// Transport Button Component
function TransportButton({
  children,
  label,
  onClick,
  active = false,
  primary = false,
  small = false,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
  primary?: boolean;
  small?: boolean;
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        transport-button rounded-sm flex flex-col items-center justify-center gap-0.5 sm:gap-1 transition-all
        ${small ? "w-10 h-10 sm:w-12 sm:h-12" : "w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16"}
        ${active ? "bg-primary/20 border-primary/50" : ""}
        ${primary ? "border-primary/30" : ""}
        ${className}
      `}
      style={{
        boxShadow: active
          ? "inset 0 2px 6px rgba(0,0,0,0.4), 0 0 12px rgba(217,119,6,0.3)"
          : undefined,
      }}>
      <div className={active ? "text-primary" : "text-zinc-400"}>
        {children}
      </div>
      <span className="text-[6px] sm:text-[7px] uppercase tracking-wider text-zinc-600">
        {label}
      </span>
    </motion.button>
  );
}

// Knob Component
function Knob({ label, value }: { label: string; value: number }) {
  const rotation = (value / 100) * 270 - 135;

  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
      <div
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full relative cursor-pointer"
        style={{
          background:
            "conic-gradient(from 180deg, oklch(0.45 0.008 55) 0deg, oklch(0.3 0.006 55) 60deg, oklch(0.2 0.005 55) 120deg, oklch(0.35 0.007 55) 180deg, oklch(0.2 0.005 55) 240deg, oklch(0.3 0.006 55) 300deg, oklch(0.45 0.008 55) 360deg)",
          boxShadow:
            "inset 0 2px 3px rgba(255,255,255,0.15), inset 0 -3px 5px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.5)",
        }}>
        {/* Indicator */}
        <div
          className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-2 sm:h-3 bg-zinc-300 rounded-full"
          style={{
            transform: `translateX(-50%) rotate(${rotation}deg)`,
            transformOrigin: "50% 200%",
          }}
        />
      </div>
      <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-zinc-600">
        {label}
      </span>
    </div>
  );
}
