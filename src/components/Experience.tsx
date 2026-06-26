"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Calendar, MapPin, Terminal as TerminalIcon } from "lucide-react";

import JOBS_DATA from "@/data/experience.json";

interface JobLog {
  company: string;
  role: string;
  location: string;
  period: string;
  systemCode: string;
  bullets: string[];
  systemMetrics: { label: string; value: string }[];
}

const JOBS: JobLog[] = JOBS_DATA;


export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative max-w-5xl mx-auto space-y-12 select-none">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-[200px] h-[200px] bg-cyber-green/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

      {/* Heading */}
      <div className="space-y-2 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-2 text-cyber-green text-xs font-mono">
          <TerminalIcon className="w-4 h-4" />
          <span>JOURNAL_LOGS_RETRIEVED</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-wider text-white">
          SYSTEM AUDIT TRAIL
        </h2>
        <div className="h-[1px] w-full bg-gradient-to-r from-cyber-green/50 to-transparent"></div>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-cyber-green/20 pl-6 md:pl-8 ml-4 space-y-12 z-10">
        {JOBS.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative space-y-4"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-black border border-cyber-green flex items-center justify-center shadow-[0_0_8px_rgba(0,255,102,0.8)]">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse"></div>
              </div>
            </div>

            {/* Job Capsule Info */}
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="text-lg md:text-xl font-mono font-extrabold text-white tracking-wide">
                    {job.company}
                  </h3>
                  <span className="text-xs md:text-sm font-mono text-cyber-green font-semibold">
                    // {job.role}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-[10px] md:text-xs font-mono text-zinc-500">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{job.period}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}</span>
                  </span>
                </div>
              </div>

              {/* System Code Tag */}
              <div className="inline-block px-2 py-0.5 border border-cyber-green/20 bg-cyber-green/5 text-[9px] font-mono text-cyber-green/80 rounded">
                SYSTEM_ID: {job.systemCode}
              </div>
            </div>

            {/* Experience Panel */}
            <div className="border border-zinc-800 bg-zinc-950/60 p-5 rounded-lg space-y-5 hover:border-cyber-green/20 transition-all duration-300">
              {/* Micro diagnostic metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-b border-zinc-800/80 pb-4">
                {job.systemMetrics.map((met) => (
                  <div key={met.label} className="flex items-center space-x-2 font-mono text-[11px]">
                    <Server className="w-3.5 h-3.5 text-cyber-green/60" />
                    <div>
                      <span className="text-zinc-500">{met.label}: </span>
                      <span className="text-cyber-green font-semibold">{met.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Explanatory bullets */}
              <ul className="space-y-3">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start space-x-2.5 text-xs md:text-sm text-zinc-300 leading-relaxed font-mono">
                    <span className="text-cyber-green/80 font-bold shrink-0 mt-0.5">&gt;&gt;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
