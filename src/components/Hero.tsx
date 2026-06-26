"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Cpu, Database, Network, Server, HardDrive, Shield } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const titles = [
    "SOFTWARE ENGINEER",
    "FULL STACK ENGINEER",
    "BACKEND SYSTEMS BUILDER",
    "MOBILE & WEB DEVELOPER"
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length); // Next title
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 pt-20 md:pt-28 pb-24 md:pb-32 overflow-hidden select-none">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-15 z-0"></div>
      
      {/* Premium Multi-Color Glowing Neon Background Orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-cyber-green/5 rounded-full blur-[120px] pointer-events-none z-0 animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none z-0 animate-[pulse_8s_ease-in-out_infinite_1s]"></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-blue-600/5 rounded-full blur-[90px] pointer-events-none z-0 animate-[pulse_7s_ease-in-out_infinite_2s]"></div>

      {/* Sci-fi HUD Border overlay with Corner Brackets */}
      <div className="absolute inset-x-4 inset-y-8 md:inset-x-8 md:inset-y-12 border border-cyber-green/10 pointer-events-none z-10 flex flex-col justify-between p-3">
        {/* Corner Decors */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-green/40"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-green/40"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-green/40"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-green/40"></div>

        <div className="flex justify-between w-full text-[9px] font-mono text-cyber-green/40">
          <span>[SYS_LOC: 28.6139_N_77.2090_E]</span>
          <span>[SECURE_CHANNEL_A // 256_AES]</span>
        </div>
        
        {/* Decorative side ticks */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-[2px] bg-cyber-green/20"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[2px] bg-cyber-green/20"></div>

        <div className="flex justify-between w-full text-[9px] font-mono text-cyber-green/40">
          <span>[NET_INF: SECURE_CORE]</span>
          <span>[DECRYPTOR: ONLINE_V2]</span>
        </div>
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
        {/* Telemetry Status Capsule Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-3 border border-cyber-green/30 bg-zinc-950/90 px-4 py-2 rounded-md text-[10px] font-mono text-cyber-green shadow-[0_0_15px_rgba(0,255,102,0.05)] tracking-widest relative overflow-hidden"
        >
          <div className="flex items-center space-x-1.5">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green"></span>
            </span>
            <span className="text-white font-bold">SYSTEM STATUS: ONLINE</span>
          </div>
          <span className="text-cyber-green/30">|</span>
          <div className="hidden sm:inline-flex items-center space-x-1">
            <Shield className="w-3 h-3 text-cyber-green/80" />
            <span>INTEGRITY: SECURE</span>
          </div>
          <span className="hidden sm:inline text-cyber-green/30">|</span>
          <span className="text-cyber-green font-bold">10+ PRODUCTION APPS DEPLOYED</span>
        </motion.div>

        {/* Hero Title */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-extrabold tracking-[0.08em] hover:tracking-[0.12em] transition-all duration-700 font-mono text-white cyber-glow uppercase"
          >
            RAVI <span className="text-cyber-green">RAJ</span>
          </motion.h1>
          
          <div className="h-8 md:h-12 flex items-center justify-center font-mono">
            <span className="text-base md:text-2xl text-cyber-green/90 font-semibold cursor-blink tracking-wider">
              &gt; {typedText}
            </span>
          </div>
        </div>

        {/* Premium confinent Hacker Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl mx-auto text-xs md:text-sm text-cyber-green/70 leading-relaxed font-mono px-4"
        >
          I engineer high-concurrency backend services, real-time network communications, and interactive frontend systems. Experienced in deploying production architectures, containerized environments, and custom telemetry networks.
        </motion.p>

        {/* Premium HUD Diagnostic Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 px-4"
        >
          {/* Card 1 */}
          <div className="border border-cyber-green/10 bg-zinc-950/45 p-4 rounded-md space-y-3 hover:border-cyber-green/30 hover:bg-zinc-950/70 transition-all duration-300 group text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Cpu className="w-8 h-8 text-cyber-green" />
            </div>
            <div className="flex items-center space-x-2 text-cyber-green/80">
              <Cpu className="w-4 h-4 text-cyber-green" />
              <p className="text-[10px] tracking-wider font-bold">ENGINE // MULTI-CORE</p>
            </div>
            <p className="text-xs font-bold text-white font-mono tracking-wide">GO / NODE / PYTHON </p>
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[8px] text-zinc-500 font-mono">
                <span>LOAD STATS</span>
                <span className="text-cyber-green">88% CORE OPT</span>
              </div>
              <div className="w-full bg-zinc-900 h-1 rounded overflow-hidden">
                <div className="bg-cyber-green h-full w-[88%] group-hover:bg-white transition-colors duration-300"></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-cyber-green/10 bg-zinc-950/45 p-4 rounded-md space-y-3 hover:border-cyber-green/30 hover:bg-zinc-950/70 transition-all duration-300 group text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <HardDrive className="w-8 h-8 text-cyber-green" />
            </div>
            <div className="flex items-center space-x-2 text-cyber-green/80">
              <Database className="w-4 h-4 text-cyber-green" />
              <p className="text-[10px] tracking-wider font-bold">DATA // PERSISTENCE</p>
            </div>
            <p className="text-xs font-bold text-white font-mono tracking-wide">PG / REDIS / MONGO / PRISMA</p>
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[8px] text-zinc-500 font-mono">
                <span>QUERY LATENCY</span>
                <span className="text-cyber-green">&lt;12ms AVERAGE</span>
              </div>
              <div className="w-full bg-zinc-900 h-1 rounded overflow-hidden">
                <div className="bg-cyber-green h-full w-[95%] group-hover:bg-white transition-colors duration-300"></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-cyber-green/10 bg-zinc-950/45 p-4 rounded-md space-y-3 hover:border-cyber-green/30 hover:bg-zinc-950/70 transition-all duration-300 group text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Server className="w-8 h-8 text-cyber-green" />
            </div>
            <div className="flex items-center space-x-2 text-cyber-green/80">
              <Network className="w-4 h-4 text-cyber-green" />
              <p className="text-[10px] tracking-wider font-bold">TUNNEL // PROTOCOLS</p>
            </div>
            <p className="text-xs font-bold text-white font-mono tracking-wide">WS / WEBRTC / GRPC / KAFKA</p>
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[8px] text-zinc-500 font-mono">
                <span>COMMS BANDWIDTH</span>
                <span className="text-cyber-green">10G DUPLEX</span>
              </div>
              <div className="w-full bg-zinc-900 h-1 rounded overflow-hidden">
                <div className="bg-cyber-green h-full w-[90%] group-hover:bg-white transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4"
        >
          <button
            onClick={() => scrollToSection("terminal")}
            className="w-full sm:w-auto px-6 py-3.5 border border-cyber-green bg-cyber-green/10 hover:bg-cyber-green hover:text-black font-semibold text-xs tracking-widest font-mono text-cyber-green rounded transition-all duration-300 shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:shadow-[0_0_25px_rgba(0,255,102,0.5)] cursor-pointer flex items-center justify-center space-x-2"
          >
            <TerminalIcon className="w-4 h-4" />
            <span>EXECUTE TERMINAL</span>
          </button>
          
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-6 py-3.5 border border-cyber-green/30 hover:border-cyber-green bg-transparent text-white font-semibold text-xs tracking-widest font-mono rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,102,0.15)] cursor-pointer"
          >
            ACCESS PROJECTS
          </button>
        </motion.div>
      </div>

      {/* Cyber pulse anchor arrow */}
      <div 
        onClick={() => scrollToSection("skills")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-10 animate-bounce text-cyber-green/40 hover:text-cyber-green transition-colors text-center"
      >
        <span className="text-[9px] font-mono tracking-widest block mb-1">SCROLL_DOWN</span>
        <span className="block text-center font-bold text-sm">↓</span>
      </div>
    </section>
  );
}

